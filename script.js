(() => {
  'use strict';

  // Header: Scroll-Shadow
  const header = document.getElementById('siteHeader');
  const onScroll = () => {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile Menu Toggle
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('navPrimary');
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Menu bei Link-Klick schließen
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuToggle.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Sortiment-Tabs (mit ARIA-State + Keyboard-Navigation)
  const tabs = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  const activateTab = (tab) => {
    const target = tab.dataset.tab;
    tabs.forEach(t => {
      const isActive = t === tab;
      t.classList.toggle('is-active', isActive);
      t.setAttribute('aria-selected', String(isActive));
      t.setAttribute('tabindex', isActive ? '0' : '-1');
    });
    panels.forEach(p => {
      const isActive = p.dataset.panel === target;
      p.classList.toggle('is-active', isActive);
      if (isActive) {
        p.removeAttribute('hidden');
      } else {
        p.setAttribute('hidden', '');
      }
    });
  };

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', (e) => {
      let nextIndex = null;
      if (e.key === 'ArrowRight') nextIndex = (i + 1) % tabs.length;
      else if (e.key === 'ArrowLeft') nextIndex = (i - 1 + tabs.length) % tabs.length;
      else if (e.key === 'Home') nextIndex = 0;
      else if (e.key === 'End') nextIndex = tabs.length - 1;
      if (nextIndex !== null) {
        e.preventDefault();
        tabs[nextIndex].focus();
        activateTab(tabs[nextIndex]);
      }
    });
  });

  // Cookie-Banner + Click-to-Load Maps
  const STORAGE_KEY = 'schuhwiedu-consent';
  const banner = document.getElementById('cookieBanner');
  const acceptBtn = document.getElementById('cookieAccept');
  const declineBtn = document.getElementById('cookieDecline');
  const mapBox = document.getElementById('mapConsent');
  const mapLoadBtn = document.getElementById('mapLoadBtn');

  const loadMap = () => {
    if (!mapBox) return;
    const src = mapBox.dataset.mapSrc;
    if (!src) return;
    mapBox.innerHTML = `<iframe class="map" src="${src}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="SCHUHWIEDU · Laurentiusstraße 24, Oberaudorf"></iframe>`;
  };

  const setConsent = (value) => {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) {}
    if (banner) banner.hidden = true;
    if (value === 'all') loadMap();
  };

  let consent = null;
  try { consent = localStorage.getItem(STORAGE_KEY); } catch (e) {}

  if (!consent && banner) {
    banner.hidden = false;
  }
  if (consent === 'all') {
    loadMap();
  }

  if (acceptBtn) acceptBtn.addEventListener('click', () => setConsent('all'));
  if (declineBtn) declineBtn.addEventListener('click', () => setConsent('necessary'));

  if (mapLoadBtn) {
    mapLoadBtn.addEventListener('click', () => {
      setConsent('all');
    });
  }

  // Scroll-Reveal: Intersection Observer für sanfte Sektion-Einblendungen
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');

  if (revealEls.length && 'IntersectionObserver' in window && !reduced) {
    const revealObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback: alle direkt sichtbar
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Number-Counting für [data-count] Elemente
  const countEls = document.querySelectorAll('[data-count]');
  if (countEls.length && 'IntersectionObserver' in window && !reduced) {
    const animateCount = (el) => {
      const target = parseFloat(el.dataset.count);
      const decimals = (el.dataset.count.split('.')[1] || el.dataset.count.split(',')[1] || '').length;
      const duration = 1400;
      const start = performance.now();
      const ease = (t) => 1 - Math.pow(1 - t, 3); // easeOutCubic

      const tick = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const value = target * ease(progress);
        el.textContent = decimals > 0
          ? value.toFixed(decimals).replace('.', ',')
          : Math.round(value).toString();
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const countObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    countEls.forEach(el => countObserver.observe(el));
  }
})();
