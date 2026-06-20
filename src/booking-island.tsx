import { createRoot } from 'react-dom/client';
import { BookingProvider, BookingButton } from '@clicka/booking';
import '@clicka/booking/styles.css';

// Mount once into the slot that lives on /en/book and /bg/book.
// Click delegation for [data-clicka-book] anywhere else on the site
// is handled by BookingProvider's autoTriggers (default on).
const host = document.getElementById('clicka_booking');
if (host) {
  host.innerHTML = '';
  createRoot(host).render(
    <BookingProvider salonSlug="urban-by-delyana">
      <BookingButton className="btn btn_solid">
        <span>{document.documentElement.lang === 'bg' ? 'Запази' : 'Reserve'}</span>
      </BookingButton>
    </BookingProvider>,
  );
}
