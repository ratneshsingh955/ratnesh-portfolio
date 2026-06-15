/* =========================================================
   Ratnesh Singh — Portfolio (vanilla JS)
   ========================================================= */
(function () {
  "use strict";
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document.addEventListener("DOMContentLoaded", function () {
    initYear();
    initNav();
    initReveal();
    initCounters();
    initTyping();
    renderProjects();
    initCopyEmail();
    initContactForm();
    if (!reduced && window.matchMedia("(pointer:fine)").matches) initCursorGlow();
  });

  function initYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------- Navigation ---------- */
  function initNav() {
    const burger = document.getElementById("burger");
    const menu = document.getElementById("nav-menu");
    const links = Array.from(document.querySelectorAll(".nav__link"));

    burger.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      burger.setAttribute("aria-expanded", String(open));
    });
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) {
        menu.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      }
    });

    const sections = links
      .map((l) => document.querySelector(l.getAttribute("href")))
      .filter(Boolean);
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + id));
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (reduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            o.unobserve(e.target);
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
    if (reduced) {
      els.forEach((el) => (el.textContent = el.dataset.count + (el.dataset.suffix || "")));
      return;
    }
    const run = (el) => {
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const dur = 1300;
      let start = null;
      const step = (t) => {
        if (start === null) start = t;
        const p = Math.min((t - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run(e.target);
            o.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    els.forEach((el) => obs.observe(el));
  }

  /* ---------- Hero typing line ---------- */
  function initTyping() {
    const el = document.getElementById("typing");
    if (!el) return;
    const phrases = [
      "Building production-grade AI products.",
      "Shipping Flutter apps to 150K+ users.",
      "Integrating Google Gemini & LLMs.",
      "Real-time voice with speech-to-text.",
    ];
    if (reduced) {
      el.textContent = phrases[0];
      const caret = document.querySelector(".caret");
      if (caret) caret.style.display = "none";
      return;
    }
    let pi = 0, ci = 0, deleting = false;
    const tick = () => {
      const word = phrases[pi];
      el.textContent = word.slice(0, ci);
      if (!deleting && ci < word.length) {
        ci++;
        setTimeout(tick, 55);
      } else if (!deleting && ci === word.length) {
        deleting = true;
        setTimeout(tick, 1800);
      } else if (deleting && ci > 0) {
        ci--;
        setTimeout(tick, 28);
      } else {
        deleting = false;
        pi = (pi + 1) % phrases.length;
        setTimeout(tick, 280);
      }
    };
    tick();
  }

  /* ---------- Projects ---------- */
  function renderProjects() {
    const grid = document.getElementById("proj-grid");
    if (!grid) return;
    const arrow = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M7 7h10v10"/></svg>';
    const projects = [
      {
        ic: "🎙️", meta: "MySA capability · In production", title: "Real-time Voice AI",
        body: "Live, conversational voice — speak naturally and the assistant replies in real time, built on streaming LLM responses and hybrid speech-to-text.",
        links: [],
      },
      {
        ic: "⚖️", meta: "Academic · IEEE", title: "Legal-Ease",
        body: "Hybrid lawyer recommendation system using the AGE-MOEA multi-objective evolutionary algorithm. Peer-reviewed and published by IEEE.",
        links: [{ label: "Read publication", href: "https://ieeexplore.ieee.org/document/9792700" }],
      },
      {
        ic: "🎮", meta: "Mobile · Witzeal", title: "BigCash & BigSports",
        body: "12+ multiplayer & casual Android games with secure payment SDKs, Firebase, and REST APIs — used by thousands of daily players.",
        links: [],
      },
      {
        ic: "🌐", meta: "Web · Open source", title: "This Portfolio",
        body: "Hand-built with vanilla HTML, CSS, and JavaScript — dark UI, glassmorphism, animated aurora background, and a Lighthouse-first build.",
        links: [{ label: "View source", href: "https://github.com/ratneshsingh955/ratnesh-portfolio" }],
      },
    ];

    grid.innerHTML = projects
      .map((p) => {
        const links = p.links.length
          ? `<div class="proj__links">${p.links
              .map((l) => `<a class="proj__link" href="${l.href}" target="_blank" rel="noopener">${l.label} ${arrow}</a>`)
              .join("")}</div>`
          : `<div class="proj__links"><span class="proj__link" style="color:var(--faint);cursor:default">Proprietary — not public</span></div>`;
        return `<article class="proj glass">
          <div class="proj__top"><div class="proj__ic">${p.ic}</div></div>
          <p class="proj__meta">${p.meta}</p>
          <h3>${p.title}</h3>
          <p>${p.body}</p>
          ${links}
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
      try {
        await navigator.clipboard.writeText(btn.dataset.email);
        label.textContent = "Copied!";
        setTimeout(() => (label.textContent = "Copy"), 1800);
      } catch (e) {
        window.location.href = "mailto:" + btn.dataset.email;
      }
    });
  }

  /* ---------- Contact form (Formspree + mailto fallback) ---------- */
  function initContactForm() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    const status = document.getElementById("form-status");
    const FALLBACK = "ratneshsingh955@gmail.com";

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        status.textContent = "Please fill in all fields with a valid email.";
        status.className = "form-status error";
        return;
      }
      const action = form.getAttribute("action") || "";
      const configured = action.includes("formspree.io/f/") && !action.includes("REPLACE");
      if (!configured) {
        const fd = new FormData(form);
        window.location.href = `mailto:${FALLBACK}?subject=${encodeURIComponent("Portfolio contact")}&body=${encodeURIComponent(
          `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\n\n${fd.get("message")}`
        )}`;
        return;
      }
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Sending…";
      status.textContent = "";
      status.className = "form-status";
      try {
        const res = await fetch(action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } });
        if (!res.ok) throw new Error();
        status.textContent = "Message sent — I'll get back to you soon.";
        status.className = "form-status success";
        form.reset();
      } catch (err) {
        status.textContent = "Something went wrong. Please email me at " + FALLBACK + ".";
        status.className = "form-status error";
      } finally {
        btn.disabled = false;
        btn.textContent = original;
      }
    });
  }

  /* ---------- Cursor glow ---------- */
  function initCursorGlow() {
    const glow = document.getElementById("cursor-glow");
    if (!glow) return;
    let x = window.innerWidth / 2, y = window.innerHeight / 2, tx = x, ty = y, raf = 0;
    const render = () => {
      x += (tx - x) * 0.15;
      y += (ty - y) * 0.15;
      glow.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(render);
    };
    window.addEventListener("pointermove", (e) => {
      tx = e.clientX;
      ty = e.clientY;
      glow.style.opacity = "1";
    });
    render();
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else { raf = requestAnimationFrame(render); }
    });
  }
})();
