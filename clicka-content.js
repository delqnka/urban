// Append additional gallery images uploaded in the Clicka admin to the
// portfolio page. Hardcoded cases stay untouched — this only adds tiles
// after the last existing case.

const SLUG = 'urban-by-delyana';
const ENGINE = 'https://www.clicka.bg';

async function fetchSalonImages() {
  try {
    const res = await fetch(`${ENGINE}/api/public/v1/salons/${SLUG}`, {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) return [];
    const data = await res.json();
    const list = data?.salon?.images;
    return Array.isArray(list) ? list.filter((u) => typeof u === 'string' && u) : [];
  } catch {
    return [];
  }
}

function appendPortfolioImages(images) {
  if (!images.length) return;
  const container = document.querySelector('.work_page');
  if (!container) return;

  const existingSrcs = new Set(
    Array.from(container.querySelectorAll('img')).map((img) => img.getAttribute('src'))
  );

  // Pair up images two-by-two so each new case looks like the existing
  // before/after layout. Odd trailing image is shown as a single tile.
  for (let i = 0; i < images.length; i += 2) {
    const a = images[i];
    const b = images[i + 1] ?? null;

    if (existingSrcs.has(a) && (!b || existingSrcs.has(b))) continue;

    const article = document.createElement('article');
    article.className = 'case reveal';

    const pair = document.createElement('div');
    pair.className = 'pair';

    const figA = document.createElement('figure');
    figA.className = 'tile reveal_tile';
    figA.setAttribute('data-stagger', '0');
    const imgA = document.createElement('img');
    imgA.src = a;
    imgA.alt = '';
    imgA.loading = 'lazy';
    imgA.decoding = 'async';
    figA.appendChild(imgA);
    pair.appendChild(figA);

    if (b) {
      const figB = document.createElement('figure');
      figB.className = 'tile reveal_tile';
      figB.setAttribute('data-stagger', '1');
      const imgB = document.createElement('img');
      imgB.src = b;
      imgB.alt = '';
      imgB.loading = 'lazy';
      imgB.decoding = 'async';
      figB.appendChild(imgB);
      pair.appendChild(figB);
    }

    article.appendChild(pair);
    container.appendChild(article);
  }
}

(async () => {
  if (document.body?.dataset?.page !== 'work') return;
  const images = await fetchSalonImages();
  appendPortfolioImages(images);
})();
