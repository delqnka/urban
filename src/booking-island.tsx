import { createRoot } from 'react-dom/client';
import { BookingProvider, BookingButton } from '@clicka1/booking';
import '@clicka1/booking/styles.css';

const engineUrl =
  import.meta.env.VITE_ENGINE_URL ||
  import.meta.env.VITE_BOOKING_ENGINE_URL ||
  import.meta.env.NEXT_PUBLIC_ENGINE_URL ||
  import.meta.env.PUBLIC_ENGINE_URL ||
  '';
const bookingApiKey =
  import.meta.env.VITE_BOOKING_API_KEY ||
  import.meta.env.NEXT_PUBLIC_BOOKING_API_KEY ||
  import.meta.env.PUBLIC_BOOKING_API_KEY ||
  '';
const siteUrl =
  import.meta.env.VITE_SITE_URL ||
  import.meta.env.NEXT_PUBLIC_SITE_URL ||
  import.meta.env.PUBLIC_SITE_URL ||
  '';

// Two integration modes coexist:
//   - On /en/book + /bg/book: a visible <BookingButton> renders inside
//     the existing #clicka_booking slot.
//   - On every other page (homepage, services, etc.): a hidden root is
//     created so the BookingProvider's modal + [data-clicka-book] /
//     [data-book-service] click delegation work site-wide without any
//     per-page markup.

function mount() {
  if ((window as unknown as { __clickaBookingMounted?: boolean }).__clickaBookingMounted) return;
  (window as unknown as { __clickaBookingMounted?: boolean }).__clickaBookingMounted = true;

  const slot = document.getElementById('clicka_booking');
  let host = slot;
  if (!host) {
    host = document.createElement('div');
    host.id = 'clicka_booking_root';
    document.body.appendChild(host);
  } else {
    host.innerHTML = '';
  }

  const lang = document.documentElement.lang === 'bg' ? 'bg' : 'en';
  const label = lang === 'bg' ? 'Запази' : 'Reserve';
  const successPath = lang === 'bg' ? '/bg/book/success' : '/en/book/success';
  const cancelPath = lang === 'bg' ? '/bg/book/cancel' : '/en/book/cancel';

  createRoot(host).render(
    <BookingProvider
      salonSlug="urban-by-delyana"
      engineUrl={engineUrl}
      apiKey={bookingApiKey}
      successUrl={siteUrl ? `${siteUrl}${successPath}` : undefined}
      cancelUrl={siteUrl ? `${siteUrl}${cancelPath}` : undefined}
    >
      {slot ? (
        <BookingButton className="btn btn_solid">
          <span>{label}</span>
        </BookingButton>
      ) : null}
    </BookingProvider>,
  );
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount, { once: true });
} else {
  mount();
}
