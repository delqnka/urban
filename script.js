(function(){
  const body = document.body;
  const lang = body.dataset.lang || 'en';
  const page = body.dataset.page || 'home';

  /* ── i18n dictionary ─────────────────────────── */
  const T = {
    en:{
      nav:{work:'Transformations',services:'Services',about:'Delyana',studio:'Studio',voices:'Reviews',contact:'Contact',book:'Book'},
      brand:{l1:'Urban',l2:'by Delyana'},
      footer:{visit:'Visit',hours:'Hours',contact:'Contact',social:'Follow',hoursv:'Tue to Sat · 10:00 to 19:00<br/>Sun &amp; Mon · By appointment',crafted:'Crafted with care · Varna'},
      menu:'Menu',close:'Close'
    },
    bg:{
      nav:{work:'Трансформации',services:'Услуги',about:'Деляна',studio:'Студио',voices:'Мнения',contact:'Контакт',book:'Резервация'},
      brand:{l1:'Urban',l2:'от Деляна'},
      footer:{visit:'Локация',hours:'Часове',contact:'Контакт',social:'Последвай',hoursv:'Вторник до Събота · 10:00 до 19:00<br/>Неделя и Понеделник · По уговорка',crafted:'Създадено с грижа · Варна'},
      menu:'Меню',close:'Затвори'
    }
  };
  const t = T[lang];

  /* ── route table ─────────────────────────────── */
  const pages = ['home','work','services','about','studio','voices','book','contact'];
  const file = (p)=> p==='home' ? 'index.html' : `${p}.html`;
  const link = (p)=> `../${lang}/${file(p)}`;
  const navOrder = ['work','services','about','studio','voices','contact'];

  /* ── header ──────────────────────────────────── */
  const header = document.createElement('header');
  header.className = 'nav';
  header.innerHTML = `
    <a class="brand" href="${link('home')}" aria-label="Urban by Delyana">
      <span class="brand_mark">U</span>
      <span class="brand_word">
        <span>${t.brand.l1}</span>
        <em>${t.brand.l2}</em>
      </span>
    </a>
    <nav class="nav_links" aria-label="Primary">
      ${navOrder.map(p=>`<a href="${link(p)}" class="${p===page?'is_active':''}">${t.nav[p]}</a>`).join('')}
    </nav>
    <div class="nav_right">
      <div class="lang" role="group" aria-label="Language">
        <a class="lang_btn ${lang==='en'?'is_active':''}" href="../en/${file(page)}">EN</a>
        <span class="lang_sep">/</span>
        <a class="lang_btn ${lang==='bg'?'is_active':''}" href="../bg/${file(page)}">BG</a>
      </div>
      <a class="btn btn_ghost" href="#" data-book-service>${t.nav.book}</a>
      <button class="menu_toggle" aria-label="${t.menu}">
        <svg viewBox="0 0 24 24" width="18" height="18"><path d="M3 7h18M3 17h18" stroke="currentColor" stroke-width="1.4" fill="none"/></svg>
      </button>
    </div>`;
  document.body.prepend(header);

  /* ── mobile sheet ────────────────────────────── */
  const sheet = document.createElement('aside');
  sheet.className = 'sheet';
  sheet.innerHTML = `
    <div class="sheet_head">
      <span class="brand_word"><span>${t.brand.l1}</span><em>${t.brand.l2}</em></span>
      <button class="sheet_close" aria-label="${t.close}">
        <svg viewBox="0 0 24 24" width="22" height="22"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.4" fill="none"/></svg>
      </button>
    </div>
    <div class="sheet_links">
      ${navOrder.map(p=>`<a href="${link(p)}">${t.nav[p]} <em>↗</em></a>`).join('')}
      <a href="#" data-book-service>${t.nav.book} <em>↗</em></a>
    </div>
    <div class="sheet_foot">
      <div class="lang">
        <a class="lang_btn ${lang==='en'?'is_active':''}" href="../en/${file(page)}">EN</a>
        <span class="lang_sep">/</span>
        <a class="lang_btn ${lang==='bg'?'is_active':''}" href="../bg/${file(page)}">BG</a>
      </div>
      <span class="cap cap_dim">Varna · BG</span>
    </div>`;
  document.body.appendChild(sheet);
  document.addEventListener('click',(e)=>{
    if(e.target.closest('.menu_toggle')) sheet.classList.add('is_open');
    if(e.target.closest('.sheet_close')) sheet.classList.remove('is_open');
  });

  /* ── footer ──────────────────────────────────── */
  const foot = document.createElement('footer');
  foot.className = 'foot';
  foot.innerHTML = `
    <div class="foot_lock">
      <div class="foot_brand">
        <div class="brand_mark brand_mark_lg">U</div>
        <p class="foot_title">${t.brand.l1} <em>${t.brand.l2}</em></p>
      </div>
      <div class="foot_cols">
        <div>
          <span class="cap">${t.footer.visit}</span>
          <p>ул. Цар Симеон I 12<br/>Varna, Bulgaria</p>
        </div>
        <div>
          <span class="cap">${t.footer.hours}</span>
          <p>${t.footer.hoursv}</p>
        </div>
        <div>
          <span class="cap">${t.footer.contact}</span>
          <p>hello@urbanbydelyana.com<br/>+359 88 000 000</p>
        </div>
        <div>
          <span class="cap">${t.footer.social}</span>
          <p><a href="#" class="link_under">Instagram</a><br/><a href="#" class="link_under">Pinterest</a></p>
        </div>
      </div>
      <div class="foot_base">
        <span>© 2026 Urban by Delyana</span>
        <span>${t.footer.crafted}</span>
      </div>
    </div>`;
  document.body.appendChild(foot);

  /* ── nav scroll state ────────────────────────── */
  const onScroll = ()=>{
    header.classList.toggle('is_scrolled', window.scrollY > 24);
  };
  document.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  /* ── reveal observer — failsafe pattern ──────────────────────────────────────
     Only elements that start OFF-screen get the `.reveal_init` class (which
     hides them in CSS); then an IntersectionObserver flips `.is_in` when they
     scroll in. Elements already in viewport on load stay visible — no flash. */
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const initAndObserve = (selector)=>{
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('is_in');
          io.unobserve(e.target);
        }
      });
    },{threshold: 0.1, rootMargin:'0px 0px -6% 0px'});

    document.querySelectorAll(selector).forEach(el=>{
      if(reduceMotion) return;
      const r = el.getBoundingClientRect();
      const offscreen = r.top > window.innerHeight * 0.9;
      if(offscreen){
        el.classList.add('reveal_init');
        io.observe(el);
      }
    });
  };

  requestAnimationFrame(()=> initAndObserve('.reveal'));

  /* ── hero reveal slider ──────────────────────── */
  document.querySelectorAll('.hero_reveal').forEach(setupHeroReveal);
  function setupHeroReveal(el){
    const start = parseFloat(el.dataset.reveal || '50');
    const set = (p)=>{
      const v = Math.max(0, Math.min(100, p));
      el.style.setProperty('--reveal', v + '%');
    };
    set(start);
    let active = false;
    const fromEvent = (ev)=>{
      const r = el.getBoundingClientRect();
      const x = (ev.touches ? ev.touches[0].clientX : ev.clientX) - r.left;
      set((x / r.width) * 100);
    };
    const begin = (ev)=>{ active = true; el.classList.add('is_dragging'); try{ el.setPointerCapture(ev.pointerId); }catch(_){} fromEvent(ev); ev.preventDefault(); };
    el.addEventListener('pointerdown', begin);
    el.addEventListener('pointermove',(ev)=>{ if(active) fromEvent(ev); });
    window.addEventListener('pointerup',()=>{ active = false; el.classList.remove('is_dragging'); });
    el.addEventListener('pointercancel',()=>{ active = false; el.classList.remove('is_dragging'); });
  }

  /* ── before+after sliders ────────────────────── */
  document.querySelectorAll('[data-ba]').forEach(setupBA);
  function setupBA(el){
    const clip = el.querySelector('.ba_clip');
    const handle = el.querySelector('.ba_handle');
    const input = el.querySelector('.ba_input');
    const clipImg = clip.querySelector('.ba_img');
    let active = false;

    const set = (p)=>{
      const v = Math.max(0, Math.min(100, p));
      clip.style.width = v + '%';
      handle.style.left = v + '%';
      if(clipImg) clipImg.style.width = (100 * (100 / Math.max(v,.01))) + '%';
      if(input) input.value = v;
    };

    const fromEvent = (ev)=>{
      const r = el.getBoundingClientRect();
      const x = (ev.touches ? ev.touches[0].clientX : ev.clientX) - r.left;
      set((x / r.width) * 100);
    };

    el.addEventListener('pointerdown',(ev)=>{ active = true; el.setPointerCapture(ev.pointerId); fromEvent(ev); });
    el.addEventListener('pointermove',(ev)=>{ if(active) fromEvent(ev); });
    el.addEventListener('pointerup',(ev)=>{ active = false; });
    el.addEventListener('pointercancel',()=>{ active = false; });
    if(input) input.addEventListener('input', ()=> set(parseFloat(input.value)));

    set(50);

    const open = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          let v = 50;
          const start = performance.now();
          const dur = 1400;
          const tick = (now)=>{
            const k = Math.min(1,(now-start)/dur);
            const eased = 1 - Math.pow(1-k, 3);
            const goTo = 50 + Math.sin(eased * Math.PI) * 22;
            set(goTo);
            if(k < 1) requestAnimationFrame(tick); else set(50);
          };
          requestAnimationFrame(tick);
          open.unobserve(el);
        }
      });
    },{threshold:.45});
    open.observe(el);
  }

  /* ── service rows → open booking modal ───────── */
  document.querySelectorAll('.service[data-service]').forEach((row)=>{
    row.style.cursor = 'pointer';
    row.addEventListener('click',(e)=>{
      if(e.target.closest('a,button')) return;
      const slug = row.dataset.service || '';
      const ev = new CustomEvent('click', { bubbles: true });
      const trigger = document.createElement('a');
      trigger.setAttribute('data-book-service', slug);
      trigger.style.display = 'none';
      document.body.appendChild(trigger);
      trigger.dispatchEvent(ev);
      trigger.remove();
    });
  });

  /* Block default navigation for any booking trigger so href="#" never
     scrolls to top even if the SDK script is slow or fails to load.
     The SDK attaches its own click handler in dist/booking.js (matches
     [data-clicka-book], [data-book-service], [data-book]). */
  document.addEventListener('click', (e) => {
    const t = e.target instanceof Element
      ? e.target.closest('[data-clicka-book],[data-book-service],[data-book]')
      : null;
    if (t) e.preventDefault();
  }, true);

  /* Auto-load the booking SDK on every page so the modal + click
     delegation work site-wide, not just on /en/book and /bg/book.
     Idempotent: skips if already loaded by an inline <script>. */
  if (!document.querySelector('script[data-clicka-booking-js]')) {
    const css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = '/dist/style.css';
    css.setAttribute('data-clicka-booking-css', '');
    document.head.appendChild(css);
    const js = document.createElement('script');
    js.type = 'module';
    js.src = '/dist/booking.js';
    js.setAttribute('data-clicka-booking-js', '');
    document.head.appendChild(js);
  }
})();

/* ═══════════════════════════════════════════════════════════════
   ▌ Premium tier — motion layer
   Adds: film grain, scroll progress, precision cursor, magnetic CTAs,
   character-stagger headline, image-peek for services, gentle parallax.
   All progressive — reduced-motion respected, no critical path. ▌
   ═══════════════════════════════════════════════════════════════ */
(function premium(){
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine   = window.matchMedia('(pointer: fine)').matches;
  const docEl  = document.documentElement;

  /* ─── film grain layer ────────────────────────── */
  const grain = document.createElement('div');
  grain.className = 'grain';
  grain.setAttribute('aria-hidden','true');
  document.body.appendChild(grain);

  /* ─── scroll progress hairline ────────────────── */
  const prog = document.createElement('div');
  prog.className = 'sprog';
  prog.setAttribute('aria-hidden','true');
  document.body.appendChild(prog);
  const onProg = ()=>{
    const max = docEl.scrollHeight - window.innerHeight;
    const p = max > 0 ? (window.scrollY / max) * 100 : 0;
    prog.style.setProperty('--p', p.toFixed(2)+'%');
  };
  window.addEventListener('scroll', onProg, {passive:true});
  onProg();

  /* ─── precision cursor (desktop, fine pointer) ── */
  let cur, ring;
  if(fine && !reduce){
    cur  = document.createElement('div'); cur.className  = 'cur';  cur.setAttribute('aria-hidden','true');
    ring = document.createElement('div'); ring.className = 'cur_ring'; ring.setAttribute('aria-hidden','true');
    document.body.appendChild(cur); document.body.appendChild(ring);

    let cx=0, cy=0, rx=0, ry=0, tx=0, ty=0;
    const onMove = (e)=>{ tx = e.clientX; ty = e.clientY; };
    window.addEventListener('pointermove', onMove, {passive:true});

    const tick = ()=>{
      cx += (tx - cx) * 0.55;
      cy += (ty - cy) * 0.55;
      rx += (tx - rx) * 0.18;
      ry += (ty - ry) * 0.18;
      cur.style.transform  = `translate(${cx}px, ${cy}px) translate(-50%,-50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    /* hover state on interactive targets */
    const hoverSel = 'a,button,input,textarea,select,.tile,.service,.cal_c,.slot';
    document.addEventListener('pointerover',(e)=>{
      if(e.target.closest(hoverSel)){ cur.classList.add('is_hover'); ring.classList.add('is_hover'); }
    });
    document.addEventListener('pointerout',(e)=>{
      if(e.target.closest(hoverSel)){ cur.classList.remove('is_hover'); ring.classList.remove('is_hover'); }
    });

    /* drag state on the hero before/after handle */
    document.addEventListener('pointerdown',(e)=>{
      if(e.target.closest('.hero_reveal,.ba')){ cur.classList.add('is_drag'); ring.classList.add('is_drag'); }
    });
    window.addEventListener('pointerup',()=>{
      cur.classList.remove('is_drag'); ring.classList.remove('is_drag');
    });
  }

  /* ─── magnetic CTAs ───────────────────────────── */
  if(fine && !reduce){
    document.querySelectorAll('.btn_solid,.btn_ghost').forEach((btn)=>{
      const strength = 14;
      btn.addEventListener('pointermove',(e)=>{
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width/2;
        const y = e.clientY - r.top  - r.height/2;
        btn.style.transform = `translate(${(x/r.width)*strength}px, ${(y/r.height)*strength}px)`;
      });
      btn.addEventListener('pointerleave',()=>{
        btn.style.transform = '';
      });
    });
  }

  /* ─── character-stagger headline ──────────────── */
  const splitDisplay = (el)=>{
    if(el.dataset.split === '1') return;
    el.dataset.split = '1';
    /* preserve em / span structure: walk text nodes, wrap each non-space char */
    const wrap = (text)=>{
      const frag = document.createDocumentFragment();
      const words = text.split(/(\s+)/);
      let idx = 0;
      words.forEach((w)=>{
        if(/^\s+$/.test(w)){ frag.appendChild(document.createTextNode(w)); return; }
        const word = document.createElement('span');
        word.className = 'word';
        for(const ch of w){
          const c = document.createElement('span');
          c.className = 'char';
          c.style.setProperty('--i', idx++);
          c.textContent = ch;
          word.appendChild(c);
        }
        frag.appendChild(word);
      });
      return frag;
    };
    const walk = (node)=>{
      const kids = [...node.childNodes];
      kids.forEach((n)=>{
        if(n.nodeType === 3 && n.nodeValue.trim()){
          n.parentNode.replaceChild(wrap(n.nodeValue), n);
        } else if(n.nodeType === 1){
          walk(n);
        }
      });
    };
    walk(el);
  };

  const lit = (el)=> requestAnimationFrame(()=> el.classList.add('is_lit'));

  document.querySelectorAll('.hero .display, .hero .display_sm').forEach((el)=>{
    splitDisplay(el);
    lit(el);
  });
  /* also light up the badge if present */
  document.querySelectorAll('.hero').forEach((h)=> h.classList.add('is_lit'));

  /* below-the-fold displays: split on intersect */
  if('IntersectionObserver' in window && !reduce){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach((e)=>{
        if(e.isIntersecting){
          splitDisplay(e.target);
          lit(e.target);
          io.unobserve(e.target);
        }
      });
    },{threshold:.18, rootMargin:'0px 0px -8% 0px'});
    document.querySelectorAll('section:not(.hero) .display, section:not(.hero) .display_sm').forEach((el)=>{
      io.observe(el);
    });
  } else {
    document.querySelectorAll('.display,.display_sm').forEach((el)=>{ splitDisplay(el); lit(el); });
  }

  /* ─── inject hero badge + handle pulse ────────── */
  const hero = document.querySelector('.hero .hero_copy');
  if(hero && !hero.querySelector('.hero_badge')){
    const html = (document.body.dataset.lang === 'bg')
      ? '<span class="dotlive"></span><span>Атeлие за цвят · Варна</span>'
      : '<span class="dotlive"></span><span>Color atelier · Varna</span>';
    const badge = document.createElement('span');
    badge.className = 'hero_badge';
    badge.innerHTML = html;
    hero.insertBefore(badge, hero.firstChild);
  }
  const handle = document.querySelector('.hero_handle');
  if(handle){
    handle.classList.add('is_pulse');
    handle.addEventListener('pointerdown', ()=> handle.classList.remove('is_pulse'), {once:true});
  }

  /* ─── service row image peek ──────────────────── */
  const peekMap = {
    balayage: '../rusa toni.jpeg',
    dimensional_blonde: '../toni.jpeg',
    color_correction: '../rusa platina.jpeg'
  };
  document.querySelectorAll('.service[data-service]').forEach((row)=>{
    const slug = row.dataset.service;
    const src = peekMap[slug];
    if(!src || row.querySelector('.service_peek')) return;
    const peek = document.createElement('div');
    peek.className = 'service_peek';
    peek.setAttribute('aria-hidden','true');
    peek.innerHTML = `<img src="${src}" alt=""/>`;
    row.appendChild(peek);
  });

  /* ─── gentle parallax on tiles ────────────────── */
  if(!reduce && 'IntersectionObserver' in window){
    const tiles = document.querySelectorAll('.tile');
    if(tiles.length){
      let ticking = false;
      const onTick = ()=>{
        tiles.forEach((t)=>{
          const r = t.getBoundingClientRect();
          if(r.bottom < 0 || r.top > window.innerHeight) return;
          const mid = r.top + r.height/2;
          const off = (window.innerHeight/2 - mid) / window.innerHeight; /* -.5 to .5 */
          const img = t.querySelector('img');
          if(img) img.style.transform = `translateY(${(off*22).toFixed(1)}px) scale(1.06)`;
        });
        ticking = false;
      };
      window.addEventListener('scroll',()=>{
        if(!ticking){ requestAnimationFrame(onTick); ticking = true; }
      },{passive:true});
      onTick();
    }
  }
})();

/* ═══════════════════════════════════════════════════════════════
   ▌ Showcase: pair → full-bleed swipe carousel
   Each image is huge. Swipe / drag / arrows to advance. Active
   slide does a slow Ken-Burns zoom while idle.
   ═══════════════════════════════════════════════════════════════ */
(function swipePairs(){
  const lang = document.body.dataset.lang || 'en';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const t = {
    before: lang === 'bg' ? 'Преди' : 'Before',
    after:  lang === 'bg' ? 'След'  : 'After',
    hint:   lang === 'bg' ? 'Плъзни ←→' : 'Swipe ←→',
    of:     lang === 'bg' ? 'от' : 'of'
  };

  document.querySelectorAll('.case .pair').forEach((pair)=>{
    const tiles = [...pair.querySelectorAll('.tile')];
    if(tiles.length < 2) return;

    /* prep */
    pair.classList.add('is_swipe');
    pair.setAttribute('role','region');
    pair.setAttribute('aria-roledescription','carousel');
    pair.setAttribute('aria-label','Color transformation');
    tiles.forEach((t)=>{ t.setAttribute('aria-hidden','true'); });

    /* tag, counter, dots, arrows, hint, progress */
    const total = tiles.length;
    const tagWrap = document.createElement('div');
    tagWrap.innerHTML = `
      <div class="sw_prog" aria-hidden="true"></div>
      <span class="sw_tag"><span class="dotlive"></span><span class="sw_tag_t">${t.before}</span></span>
      <span class="sw_count">
        <span class="sw_count_n">01</span>
        <span class="sw_count_s">${t.of} ${String(total).padStart(2,'0')}</span>
      </span>
      <div class="sw_dots" role="tablist" aria-label="Slide">
        ${tiles.map((_,i)=>`<button class="sw_dot${i===0?' is_on':''}" data-i="${i}" aria-label="Slide ${i+1}"></button>`).join('')}
      </div>
      <button class="sw_arrow is_prev" aria-label="Previous">
        <svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>
      </button>
      <button class="sw_arrow is_next" aria-label="Next">
        <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.7"/></svg>
      </button>
      <span class="sw_hint"><span>↔</span><span>${t.hint}</span></span>
    `;
    while(tagWrap.firstChild) pair.appendChild(tagWrap.firstChild);

    const tag   = pair.querySelector('.sw_tag');
    const tagT  = pair.querySelector('.sw_tag_t');
    const cntN  = pair.querySelector('.sw_count_n');
    const dots  = [...pair.querySelectorAll('.sw_dot')];
    const prog  = pair.querySelector('.sw_prog');
    const prev  = pair.querySelector('.sw_arrow.is_prev');
    const next  = pair.querySelector('.sw_arrow.is_next');

    let i = 0;
    let w = pair.getBoundingClientRect().width;
    let dx = 0;          /* live drag delta */
    let active = false;
    let startX = 0;
    let lockedAxis = null; /* 'x' or 'y' */

    const place = (idx, drag=0)=>{
      tiles.forEach((tile, n)=>{
        const off = (n - idx) * w + drag;
        /* opacity: slight darken for non-active */
        const dist = Math.abs(n - idx - drag/w);
        const o = Math.max(.55, 1 - dist*.45);
        tile.style.setProperty('--x', off + 'px');
        tile.style.setProperty('--o', o.toFixed(3));
        tile.classList.toggle('is_idle', n === idx && drag === 0);
      });
    };

    const updateChrome = (idx)=>{
      cntN.textContent = String(idx+1).padStart(2,'0');
      dots.forEach((d,n)=> d.classList.toggle('is_on', n === idx));
      /* progress: idx 0 → 50%, idx 1 → 100% (for 2 slides). General formula: */
      const pct = total === 1 ? 100 : Math.round(((idx+1)/total)*100);
      prog.style.setProperty('--pp', pct + '%');
      /* tag: 0 = Before, last = After, middle = step n */
      if(idx === 0){ tag.classList.remove('is_after'); tagT.textContent = t.before; }
      else if(idx === total - 1){ tag.classList.add('is_after'); tagT.textContent = t.after; }
      else{ tag.classList.remove('is_after'); tagT.textContent = `· ${idx+1}`; }
    };

    const go = (n)=>{
      i = Math.max(0, Math.min(total-1, n));
      place(i, 0);
      updateChrome(i);
    };

    /* init */
    new ResizeObserver(()=>{ w = pair.getBoundingClientRect().width; place(i,0); }).observe(pair);
    requestAnimationFrame(()=> go(0));

    /* arrows + dots */
    prev.addEventListener('click',()=> go(i-1));
    next.addEventListener('click',()=> go(i+1));
    dots.forEach((d)=> d.addEventListener('click',()=> go(parseInt(d.dataset.i,10))));

    /* keyboard */
    pair.tabIndex = 0;
    pair.addEventListener('keydown',(e)=>{
      if(e.key === 'ArrowLeft'){ go(i-1); e.preventDefault(); }
      if(e.key === 'ArrowRight'){ go(i+1); e.preventDefault(); }
    });

    /* drag */
    pair.addEventListener('pointerdown',(ev)=>{
      if(ev.target.closest('.sw_arrow,.sw_dot')) return;
      active = true; lockedAxis = null;
      startX = ev.clientX; dx = 0;
      pair.classList.add('is_drag','is_touched');
      try{ pair.setPointerCapture(ev.pointerId); }catch(_){}
    });
    pair.addEventListener('pointermove',(ev)=>{
      if(!active) return;
      dx = ev.clientX - startX;
      const dy = Math.abs(ev.movementY);
      if(lockedAxis === null && (Math.abs(dx) > 6 || dy > 6)){
        lockedAxis = Math.abs(dx) > dy ? 'x' : 'y';
      }
      if(lockedAxis === 'x'){
        ev.preventDefault();
        /* resistance at the edges */
        let drag = dx;
        if((i === 0 && drag > 0) || (i === total-1 && drag < 0)) drag *= .35;
        place(i, drag);
      }
    });
    const release = ()=>{
      if(!active) return;
      active = false;
      pair.classList.remove('is_drag');
      const thresh = Math.min(120, w * .18);
      if(lockedAxis === 'x' && Math.abs(dx) > thresh){
        go(i + (dx < 0 ? 1 : -1));
      } else {
        place(i, 0);
      }
      dx = 0; lockedAxis = null;
    };
    pair.addEventListener('pointerup', release);
    pair.addEventListener('pointercancel', release);
    pair.addEventListener('pointerleave', (ev)=>{ if(active) release(); });

    /* on first reveal: animate hint + a teaser nudge */
    if(!reduce && 'IntersectionObserver' in window){
      const io = new IntersectionObserver((entries)=>{
        entries.forEach((e)=>{
          if(!e.isIntersecting) return;
          pair.classList.add('is_lit');
          /* nudge: 0 → -28px → 0 over 1.4s, then settle */
          const start = performance.now();
          const dur = 1400;
          const tick = (now)=>{
            if(active || pair.classList.contains('is_touched')) return;
            const k = Math.min(1,(now-start)/dur);
            const eased = Math.sin(k * Math.PI);
            place(i, -eased * 24);
            if(k < 1) requestAnimationFrame(tick); else place(i, 0);
          };
          setTimeout(()=> requestAnimationFrame(tick), 600);
          io.unobserve(pair);
        });
      },{threshold:.35});
      io.observe(pair);
    }
  });
})();
