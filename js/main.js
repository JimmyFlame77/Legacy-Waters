/* ============================================================
   Legacy Waters — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* --- Hamburger Toggle --- */
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('main-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.classList.toggle('active');
      nav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
  }

  /* --- Close Mobile Menu on Link Click --- */
  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      if (nav && nav.classList.contains('open')) {
        hamburger.classList.remove('active');
        nav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  });

  /* --- Smooth Scroll with Header Offset --- */
  document.querySelectorAll('a[href*="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;

      const hash = href.substring(hashIndex);
      if (hash === '#') return;

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();
      const headerH = document.querySelector('.site-header')
        ? document.querySelector('.site-header').offsetHeight
        : 72;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerH - 16;
      window.scrollTo({ top: top, behavior: 'smooth' });

      // Update URL without jump
      if (history.pushState) {
        history.pushState(null, null, hash);
      }
    });
  });

  /* --- Header Shadow on Scroll --- */
  var header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* --- Intersection Observer: Fade-In --- */
  // Add fade-in to individual service cards and other granular elements
  document.querySelectorAll('.service-card-link, .service-card, .faq-item, .team-member').forEach(function(el) {
    if (!el.classList.contains('fade-in')) el.classList.add('fade-in');
  });

  var fadeEls = document.querySelectorAll('.fade-in');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    var fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) {
      // If element is already in viewport on load, reveal immediately
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      } else {
        fadeObserver.observe(el);
      }
    });
  }

  /* --- FAQ Accordion --- */
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = this.closest('.faq-item');
      var isOpen = item.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-item.open').forEach(function (openItem) {
        openItem.classList.remove('open');
        openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle current
      if (!isOpen) {
        item.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

/* --- Contact Form Validation & Submission --- */
var form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    var valid = true;

    // Clear previous errors
    form.querySelectorAll('.form-group').forEach(function (group) {
      group.classList.remove('has-error');
    });

    // Required fields
    form.querySelectorAll('[required]').forEach(function (field) {
      var group = field.closest('.form-group');
      if (!field.value.trim()) {
        group.classList.add('has-error');
        field.classList.add('error');
        valid = false;
      } else {
        field.classList.remove('error');
      }
    });

    // Email format
    var emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value.trim()) {
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailField.value.trim())) {
        var group = emailField.closest('.form-group');
        group.classList.add('has-error');
        emailField.classList.add('error');
        valid = false;
      }
    }

    // IF NOT VALID: Stop the form from submitting
    if (!valid) {
      e.preventDefault();
    } else {
      // IF VALID: Let the form submit to Web3Forms naturally.
      // We change the button text so the user knows something is happening.
      var submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
      }
    }
  });
}

  /* --- Video Hero: Desktop only, skip download on mobile --- */
  var heroVideo = document.querySelector('.hero-video');
  if (heroVideo && window.innerWidth > 900) {
    // Only load the video source on desktop
    var videoSrc = heroVideo.getAttribute('data-src');
    if (videoSrc) {
      var source = document.createElement('source');
      source.src = videoSrc;
      source.type = 'video/mp4';
      heroVideo.appendChild(source);
      heroVideo.load();
    }

    if ('IntersectionObserver' in window) {
      var videoObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            heroVideo.play().catch(function () {});
          } else {
            heroVideo.pause();
          }
        });
      }, { threshold: 0.25 });
      videoObserver.observe(heroVideo);
    }
  }

})();
