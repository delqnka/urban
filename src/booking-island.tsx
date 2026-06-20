import { createRoot } from 'react-dom/client';
import { BookingProvider, BookingButton } from '@clicka/booking';
import '@clicka/booking/styles.css';

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

  createRoot(host).render(
    <BookingProvider salonSlug="urban-by-delyana">
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
