/* =========================================================
   Ratnesh Singh — Portfolio interactions
   ========================================================= */
(function () {
  "use strict";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.addEventListener("DOMContentLoaded", function () {
    initYear();
    initNav();
    initReveal();
    initCounters();
    renderProjects();
    initCopyEmail();
    initContactForm();
    if (!prefersReduced) initNeuralCanvas();
  });

  /* ---------- Footer year ---------- */
  function initYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Navigation ---------- */
  function initNav() {
    const navbar = document.getElementById("navbar");
    const hamburger = document.getElementById("hamburger");
    const menu = document.getElementById("nav-menu");
    const links = Array.from(document.querySelectorAll(".nav-link"));

    const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    hamburger.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      hamburger.setAttribute("aria-expanded", String(open));
    });
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        menu.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });

    // Scrollspy
    const sections = links
      .map((l) => document.querySelector(l.getAttribute("href")))
      .filter(Boolean);
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            links.forEach((l) =>
              l.classList.toggle("active", l.getAttribute("href") === "#" + id)
            );
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            o.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
  }

  /* ---------- Animated counters ---------- */
  function initCounters() {
    const els = document.querySelectorAll("[data-count]");
    if (!els.length) return;
    if (prefersReduced) {
      els.forEach((el) => (el.textContent = el.dataset.count + (el.dataset.suffix || "")));
      return;
    }
    const run = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const dur = 1400;
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run(entry.target);
            o.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    els.forEach((el) => obs.observe(el));
  }

  /* ---------- Projects ---------- */
  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    const icons = {
      ai: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 0-4 4v1a4 4 0 0 0-1 7.87V18a4 4 0 0 0 8 0v-3.13A4 4 0 0 0 16 7V6a4 4 0 0 0-4-4z"/><path d="M9 13h6"/></svg>',
      law: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M5 7h14M5 7l-2 6h4L5 7zm14 0l-2 6h4l-2-6z"/></svg>',
      game: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="10" rx="5"/><path d="M7 11v2M6 12h2M15 11h.01M18 13h.01"/></svg>',
      web: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></svg>',
    };

    const projects = [
      {
        icon: icons.ai,
        title: "MySA",
        meta: "AI Productivity · Featured",
        desc: "AI assistant with chat, voice, smart calendar, and document AI — 150K+ downloads across Android, iOS, and Web.",
        link: { label: "See above", href: "#mysa" },
      },
      {
        icon: icons.law,
        title: "Legal-Ease",
        meta: "Academic · IEEE",
        desc: "Hybrid lawyer recommendation system built on the AGE-MOEA multi-objective evolutionary algorithm. Published research.",
        link: { label: "Read publication", href: "https://ieeexplore.ieee.org/document/9792700", external: true },
      },
      {
        icon: icons.game,
        title: "BigCash & BigSports",
        meta: "Mobile Gaming",
        desc: "12+ multiplayer Android games with payment SDKs, Firebase, and REST APIs — used by thousands of daily players.",
        link: null,
      },
      {
        icon: icons.web,
        title: "This Portfolio",
        meta: "Web · Open source",
        desc: "Hand-built, dependency-free portfolio: dark UI, glassmorphism, an animated neural background, and a perfect Lighthouse target.",
        link: { label: "View source", href: "https://github.com/ratneshsingh955/ratnesh-portfolio", external: true },
      },
    ];

    const arrow = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg>';

    grid.innerHTML = projects
      .map((p) => {
        const link = p.link
          ? `<a class="card__link" href="${p.link.href}"${p.link.external ? ' target="_blank" rel="noopener"' : ""}>${p.link.label} ${arrow}</a>`
          : `<span class="card__link" style="color:var(--text-faint)">Proprietary — not public</span>`;
        return `
        <article class="glass card">
          <div class="card__icon">${p.icon}</div>
          <span class="card__meta">${p.meta}</span>
          <h3 class="card__title">${p.title}</h3>
          <p class="card__desc">${p.desc}</p>
          ${link}
        </article>`;
      })
      .join("");
  }

  /* ---------- Copy email ---------- */
  function initCopyEmail() {
    const btn = document.getElementById("copy-email");
    if (!btn) return;
    const label = btn.querySelector(".contact__copy");
    btn.addEventListener("click", async () => {
      const email = btn.dataset.email;
      try {
        await navigator.clipboard.writeText(email);
        label.textContent = "Copied!";
      } catch (e) {
        window.location.href = "mailto:" + email;
        return;
      }
      setTimeout(() => (label.textContent = "Copy"), 1800);
    });
  }

  /* ---------- Contact form (Formspree) ---------- */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    const status = document.getElementById("form-status");
    const FALLBACK_EMAIL = "ratneshsingh955@gmail.com";

    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        status.textContent = "Please fill in all fields with a valid email.";
        status.className = "form-status error";
        return;
      }

      const action = form.getAttribute("action") || "";
      const configured = action.includes("formspree.io/f/") && !action.includes("REPLACE_WITH_YOUR_ID");

      // Fallback: open the visitor's email client if Formspree isn't set up yet.
      if (!configured) {
        const fd = new FormData(form);
        const body = `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\n\n${fd.get("message")}`;
        window.location.href =
          `mailto:${FALLBACK_EMAIL}?subject=${encodeURIComponent(fd.get("subject") || "Portfolio contact")}` +
          `&body=${encodeURIComponent(body)}`;
        status.textContent = "Opening your email app…";
        status.className = "form-status";
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Sending…";
      status.textContent = "";
      status.className = "form-status";

      try {
        const res = await fetch(action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          status.textContent = "Message sent — I'll get back to you soon.";
          status.className = "form-status success";
          form.reset();
        } else {
          throw new Error("Bad response");
        }
      } catch (err) {
        status.textContent = "Something went wrong. Please email me directly at " + FALLBACK_EMAIL + ".";
        status.className = "form-status error";
      } finally {
        btn.disabled = false;
        btn.textContent = original;
      }
    });
  }

  /* ---------- Neural network canvas ---------- */
  function initNeuralCanvas() {
    const canvas = document.getElementById("neural-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w, h, dpr, nodes, raf;

    const NODE_COUNT = () => Math.min(70, Math.floor((w * h) / 22000));
    const MAX_DIST = 140;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth = window.innerWidth;
      h = canvas.clientHeight = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      const n = NODE_COUNT();
      nodes = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    }

    function tick() {
      ctx.clearRect(0, 0, w, h);
      for (const p of nodes) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.22;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of nodes) {
        ctx.fillStyle = "rgba(34, 211, 238, 0.55)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    }

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    });

    // Pause when tab hidden (saves CPU/battery)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else raf = requestAnimationFrame(tick);
    });

    resize();
    tick();
  }
})();
