import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BookingWidget,
  type BookingWidgetHandle,
} from '@clicka/booking';
import '@clicka/booking/styles.css';

type Lang = 'en' | 'bg';

const T = {
  en: { loading: 'Loading…', error: 'Booking is temporarily unavailable.' },
  bg: { loading: 'Зареждане…', error: 'Резервациите временно не са достъпни.' },
} as const;

type Config = {
  lang: Lang;
  engineUrl: string;
  salonSlug: string;
  successUrl: string;
  cancelUrl: string;
};

function readConfig(node: HTMLElement | null): Config {
  const lang = (document.body.dataset.lang as Lang) || 'en';
  const meta = (name: string) =>
    document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)?.content;
  const engineUrl =
    node?.dataset.engine ||
    meta('clicka:engine') ||
    'https://clicka.bg';
  const salonSlug =
    node?.dataset.salon ||
    meta('clicka:salon') ||
    'urban-by-delyana';
  return {
    lang,
    engineUrl,
    salonSlug,
    successUrl:
      node?.dataset.successUrl ||
      `${location.origin}${location.pathname}?booked=1`,
    cancelUrl:
      node?.dataset.cancelUrl ||
      `${location.origin}${location.pathname}?cancelled=1`,
  };
}

type OpenFn = (service?: string) => void;

function GlobalBooking({
  config,
  registerOpen,
}: {
  config: Config;
  registerOpen: (fn: OpenFn) => void;
}) {
  const t = T[config.lang];
  const ref = useRef<BookingWidgetHandle>(null);
  const [salon, setSalon] = useState<Record<string, unknown> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const pendingRef = useRef<string | null>(null);
  const noticeTimer = useRef<number | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

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

  useEffect(() => {
    const open: OpenFn = (service) => {
      if (error) {
        setNotice(error);
        if (noticeTimer.current) window.clearTimeout(noticeTimer.current);
        noticeTimer.current = window.setTimeout(() => setNotice(null), 4000);
        return;
      }
      if (!salon || !ref.current) {
        pendingRef.current = service || '';
        setNotice(t.loading);
        if (noticeTimer.current) window.clearTimeout(noticeTimer.current);
        noticeTimer.current = window.setTimeout(() => setNotice(null), 2500);
        return;
      }
      ref.current.open(service || undefined);
    };
    registerOpen(open);
  }, [salon, error, t.loading, registerOpen]);

  useEffect(() => {
    if (salon && ref.current && pendingRef.current !== null) {
      const s = pendingRef.current;
      pendingRef.current = null;
      ref.current.open(s || undefined);
    }
  }, [salon]);

  return (
    <>
      {notice ? <div className="clicka_booking_notice" role="status">{notice}</div> : null}
      {salon ? (
        <BookingWidget
          ref={ref}
          slug={config.salonSlug}
          salon={salon}
          engineUrl={config.engineUrl}
          successUrl={config.successUrl}
          cancelUrl={config.cancelUrl}
          locale={config.lang === 'bg' ? 'bg-BG' : 'en-US'}
        />
      ) : null}
    </>
  );
}

function mountGlobal() {
  if ((window as unknown as { __clickaBookingMounted?: boolean }).__clickaBookingMounted) return;
  (window as unknown as { __clickaBookingMounted?: boolean }).__clickaBookingMounted = true;

  let host = document.getElementById('clicka_booking') as HTMLElement | null;
  if (!host) {
    host = document.createElement('div');
    host.id = 'clicka_booking';
    host.style.position = 'fixed';
    host.style.inset = 'auto';
    host.style.zIndex = '2147483000';
    document.body.appendChild(host);
  } else {
    host.innerHTML = '';
  }

  const config = readConfig(host);
  let openFn: OpenFn = (service) => {
    pending = service || '';
  };
  let pending: string | null = null;
  const registerOpen = (fn: OpenFn) => {
    openFn = fn;
    if (pending !== null) {
      const s = pending;
      pending = null;
      openFn(s || undefined);
    }
  };

  createRoot(host).render(
    <GlobalBooking config={config} registerOpen={registerOpen} />
  );

  const handler = (ev: Event) => {
    const target = ev.target as Element | null;
    if (!target) return;
    const trigger = target.closest<HTMLElement>('[data-book-service],[data-book]');
    if (!trigger) return;
    ev.preventDefault();
    const service =
      trigger.getAttribute('data-book-service') ||
      trigger.getAttribute('data-service') ||
      '';
    openFn(service || undefined);
  };
  document.addEventListener('click', handler);

  const params = new URLSearchParams(location.search);
  const initial = params.get('service');
  if (initial || params.has('book')) {
    openFn(initial || undefined);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountGlobal, { once: true });
} else {
  mountGlobal();
}
