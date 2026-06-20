import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBookingClient,
  type BookingClient,
  type PublicSalon,
  type PublicStaffMember,
  type PublicSlot,
} from '@clicka/booking-sdk';

type Lang = 'en' | 'bg';

const T = {
  en: {
    pickService: 'Service',
    pickStaff: 'Stylist',
    anyStaff: 'No preference',
    pickDate: 'Date',
    pickTime: 'Time',
    yourName: 'Full name',
    phone: 'Phone',
    email: 'Email (optional)',
    notes: 'Notes (optional)',
    submit: 'Reserve',
    submitting: 'Reserving…',
    success: 'Reservation received. You will get a confirmation shortly.',
    none: 'No times available on this date.',
    loadingSlots: 'Checking availability…',
    error: 'Something went wrong.',
    config: 'Booking module not configured. Add a Clicka API key to enable reservations.',
  },
  bg: {
    pickService: 'Услуга',
    pickStaff: 'Стилист',
    anyStaff: 'Без предпочитание',
    pickDate: 'Дата',
    pickTime: 'Час',
    yourName: 'Име',
    phone: 'Телефон',
    email: 'Имейл (по избор)',
    notes: 'Бележки (по избор)',
    submit: 'Запази',
    submitting: 'Изпращане…',
    success: 'Резервацията е получена. Ще получиш потвърждение скоро.',
    none: 'Няма свободни часове за този ден.',
    loadingSlots: 'Проверка на свободни часове…',
    error: 'Нещо се обърка.',
    config: 'Booking модулът не е конфигуриран. Добави Clicka API ключ за резервации.',
  },
} as const;

function readConfig(node: HTMLElement) {
  const params = new URLSearchParams(location.search);
  const lang = (document.body.dataset.lang as Lang) || 'en';
  const w = window as any;
  const meta = (name: string) => document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.content;
  return {
    lang,
    engineUrl: node.dataset.engine || meta('clicka:engine') || w.URBAN_ENGINE_URL || 'https://clicka.bg',
    salonSlug: node.dataset.salon || meta('clicka:salon') || w.URBAN_SALON_SLUG || 'urban-by-delyana',
    apiKey: node.dataset.apiKey || meta('clicka:api-key') || w.URBAN_CLICKA_API_KEY || '',
    initialService: params.get('service') || node.dataset.service || '',
  };
}

function todayISO(): string {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}

function workingHoursForDate(salon: PublicSalon, date: string): { open: string; close: string; closed: boolean } | null {
  const day = new Date(date + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const hours = salon.working_hours?.[day];
  return hours || null;
}

function* iterateGrid(open: string, close: string, stepMin: number) {
  const [oh, om] = open.split(':').map(Number);
  const [ch, cm] = close.split(':').map(Number);
  const start = oh * 60 + om;
  const end = ch * 60 + cm;
  for (let t = start; t + stepMin <= end; t += stepMin) {
    const h = String(Math.floor(t / 60)).padStart(2, '0');
    const m = String(t % 60).padStart(2, '0');
    yield `${h}:${m}`;
  }
}

function isTaken(time: string, taken: PublicSlot[]) {
  return taken.some((s) => s.start.endsWith(time) || s.start.slice(11, 16) === time);
}

function BookingWidget({ config }: { config: ReturnType<typeof readConfig> }) {
  const t = T[config.lang];
  const client: BookingClient | null = useMemo(() => {
    if (!config.apiKey) return null;
    return createBookingClient({
      engineUrl: config.engineUrl,
      apiKey: config.apiKey,
      salonSlug: config.salonSlug,
    });
  }, [config.apiKey, config.engineUrl, config.salonSlug]);

  const [salon, setSalon] = useState<PublicSalon | null>(null);
  const [staff, setStaff] = useState<PublicStaffMember[]>([]);
  const [serviceSlug, setServiceSlug] = useState<string>(config.initialService);
  const [staffId, setStaffId] = useState<string>('');
  const [date, setDate] = useState<string>(todayISO());
  const [time, setTime] = useState<string>('');
  const [taken, setTaken] = useState<PublicSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!client) return;
    let cancel = false;
    Promise.all([client.getSalon(), client.getStaff()])
      .then(([s, st]) => {
        if (cancel) return;
        setSalon(s);
        setStaff(st);
        if (!serviceSlug && Array.isArray(s.services) && s.services.length) {
          const first = s.services[0] as { slug?: string };
          if (first?.slug) setServiceSlug(first.slug);
        }
      })
      .catch((e) => setError(e?.message || t.error));
    return () => { cancel = true; };
  }, [client]);

  useEffect(() => {
    if (!client || !date) return;
    setLoadingSlots(true);
    let cancel = false;
    client.getSlots({ date, staffMemberId: staffId || undefined })
      .then((s) => { if (!cancel) setTaken(s); })
      .catch(() => { if (!cancel) setTaken([]); })
      .finally(() => { if (!cancel) setLoadingSlots(false); });
    return () => { cancel = true; };
  }, [client, date, staffId]);

  const services = useMemo(() => {
    if (!salon || !Array.isArray(salon.services)) return [];
    return (salon.services as Array<{ slug: string; name: string; price?: number }>).filter(s => s.slug);
  }, [salon]);

  const grid = useMemo(() => {
    if (!salon) return [];
    const hours = workingHoursForDate(salon, date);
    if (!hours || hours.closed) return [];
    return Array.from(iterateGrid(hours.open, hours.close, 30));
  }, [salon, date]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!client) return;
    setError(null);
    setSubmitting(true);
    const startsAt = new Date(`${date}T${time}:00`).toISOString();
    const result = await client.createBooking({
      serviceSlug,
      staffMemberId: staffId || undefined,
      startsAt,
      clientName: name,
      clientPhone: phone,
      clientEmail: email || undefined,
      notes: notes || undefined,
    });
    setSubmitting(false);
    if (result.ok) {
      setSuccess(result.message || t.success);
      setName(''); setPhone(''); setEmail(''); setNotes(''); setTime('');
    } else {
      setError(result.error || t.error);
    }
  }

  if (!client) {
    return <div className="clicka_pending"><p className="book_note">{t.config}</p></div>;
  }

  if (success) {
    return (
      <div className="clicka_pending">
        <span className="cap">{config.lang === 'bg' ? 'Готово' : 'Confirmed'}</span>
        <p className="clicka_pending_t">{success}</p>
      </div>
    );
  }

  return (
    <form className="booking_form" onSubmit={submit}>
      <label className="booking_field">
        <span className="booking_label">{t.pickService}</span>
        <select required value={serviceSlug} onChange={(e) => setServiceSlug(e.target.value)}>
          <option value="" disabled>—</option>
          {services.map((s) => (
            <option key={s.slug} value={s.slug}>{s.name}</option>
          ))}
        </select>
      </label>

      {staff.length > 0 && (
        <label className="booking_field">
          <span className="booking_label">{t.pickStaff}</span>
          <select value={staffId} onChange={(e) => setStaffId(e.target.value)}>
            <option value="">{t.anyStaff}</option>
            {staff
              .filter((m) => !serviceSlug || m.serviceSlugs.includes(serviceSlug))
              .map((m) => (
                <option key={m.id} value={m.id}>{m.name}</option>
              ))}
          </select>
        </label>
      )}

      <label className="booking_field">
        <span className="booking_label">{t.pickDate}</span>
        <input type="date" required value={date} min={todayISO()} onChange={(e) => { setDate(e.target.value); setTime(''); }} />
      </label>

      <div className="booking_field">
        <span className="booking_label">{t.pickTime}</span>
        {loadingSlots ? (
          <p className="book_note">{t.loadingSlots}</p>
        ) : grid.length === 0 ? (
          <p className="book_note">{t.none}</p>
        ) : (
          <div className="booking_slots">
            {grid.map((g) => {
              const disabled = isTaken(g, taken);
              const active = time === g;
              return (
                <button
                  type="button"
                  key={g}
                  disabled={disabled}
                  className={`booking_slot${active ? ' is_active' : ''}`}
                  onClick={() => setTime(g)}
                >
                  {g}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <label className="booking_field">
        <span className="booking_label">{t.yourName}</span>
        <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
      </label>

      <label className="booking_field">
        <span className="booking_label">{t.phone}</span>
        <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>

      <label className="booking_field">
        <span className="booking_label">{t.email}</span>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>

      <label className="booking_field">
        <span className="booking_label">{t.notes}</span>
        <textarea rows={3} value={notes} onChange={(e) => setNotes(e.target.value)} />
      </label>

      {error && <p className="booking_error">{error}</p>}

      <button type="submit" className="btn btn_solid" disabled={submitting || !time || !serviceSlug}>
        <span>{submitting ? t.submitting : t.submit}</span>
      </button>
    </form>
  );
}

const node = document.getElementById('clicka_booking');
if (node) {
  const config = readConfig(node as HTMLElement);
  node.innerHTML = '';
  createRoot(node).render(<BookingWidget config={config} />);
}
