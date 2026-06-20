import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BookingWidget,
  type BookingWidgetHandle,
} from '@clicka/booking';
import '@clicka/booking/styles.css';

type Lang = 'en' | 'bg';

const T = {
  en: { open: 'Reserve', loading: 'Loading…', error: 'Booking is temporarily unavailable.' },
  bg: { open: 'Запази', loading: 'Зареждане…', error: 'Резервациите временно не са достъпни.' },
} as const;

function readConfig(node: HTMLElement) {
  const params = new URLSearchParams(location.search);
  const lang = (document.body.dataset.lang as Lang) || 'en';
  const meta = (name: string) =>
    document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.content;
  return {
    lang,
    engineUrl:
      node.dataset.engine ||
      meta('clicka:engine') ||
      'https://clicka.bg',
    salonSlug:
      node.dataset.salon ||
      meta('clicka:salon') ||
      'urban-by-delyana',
    initialService: params.get('service') || node.dataset.service || '',
    successUrl:
      node.dataset.successUrl ||
      `${location.origin}${location.pathname}?booked=1`,
    cancelUrl:
      node.dataset.cancelUrl ||
      `${location.origin}${location.pathname}?cancelled=1`,
  };
}

function Island({ config }: { config: ReturnType<typeof readConfig> }) {
  const t = T[config.lang];
  const ref = useRef<BookingWidgetHandle>(null);
  const [salon, setSalon] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const url = `${config.engineUrl.replace(/\/$/, '')}/api/public/v1/salons/${encodeURIComponent(config.salonSlug)}`;
    fetch(url, { cache: 'no-store' })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then((d: { salon?: Record<string, unknown> }) => {
        if (cancelled) return;
        if (!d.salon) throw new Error('Empty salon response');
        setSalon(d.salon);
      })
      .catch((e) => {
        if (cancelled) return;
        console.error('[booking] salon fetch failed:', e);
        setError(t.error);
      });
    return () => {
      cancelled = true;
    };
  }, [config.engineUrl, config.salonSlug, t.error]);

  if (error) {
    return <p className="book_note">{error}</p>;
  }

  if (!salon) {
    return <p className="book_note">{t.loading}</p>;
  }

  return (
    <>
      <button
        type="button"
        className="btn btn_solid"
        onClick={() => ref.current?.open(config.initialService || undefined)}
      >
        <span>{t.open}</span>
      </button>
      <BookingWidget
        ref={ref}
        slug={config.salonSlug}
        salon={salon}
        engineUrl={config.engineUrl}
        successUrl={config.successUrl}
        cancelUrl={config.cancelUrl}
        locale={config.lang === 'bg' ? 'bg-BG' : 'en-US'}
      />
    </>
  );
}

const node = document.getElementById('clicka_booking');
if (node) {
  const config = readConfig(node as HTMLElement);
  node.innerHTML = '';
  createRoot(node).render(<Island config={config} />);
}
