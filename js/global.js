/* DATA CLYVE — global.js v7 | getalpha.ca */
(function() {
    'use strict';

    var nav = document.getElementById('nav');
    var tog = document.querySelector('.nav-mtog');
    var mob = document.getElementById('nav-mob');

    // Light sections (nav should switch to light glass)
    var LIGHT_BG = ['bg-page', 'hero-light', 'ph-light'];

    function tick() {
        if (!nav) return;
        var midY = 72;
        var el = document.elementFromPoint(window.innerWidth / 2, midY);
        if (!el) {
            nav.classList.remove('lt');
            return;
        }
        // Walk up to find a section
        var sec = el.closest('section,.hero-sec,footer,.foot');
        if (!sec) {
            nav.classList.remove('lt');
            return;
        }
        var bg = window.getComputedStyle(sec).backgroundColor;
        // Parse RGB
        var m = bg.match(/\d+/g);
        if (!m) {
            nav.classList.remove('lt');
            return;
        }
        // Luminance check — light background = nav goes light
        var r = +m[0],
            g = +m[1],
            b = +m[2];
        var lum = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        lum > 0.75 ? nav.classList.add('lt') : nav.classList.remove('lt');
    }

    window.addEventListener('scroll', tick, {
        passive: true
    });
    window.addEventListener('resize', tick);
    document.addEventListener('DOMContentLoaded', tick);
    setTimeout(tick, 50);

    // Mobile toggle
    if (tog && mob) {
        tog.addEventListener('click', function() {
            var o = tog.getAttribute('aria-expanded') === 'true';
            tog.setAttribute('aria-expanded', String(!o));
            mob.setAttribute('aria-hidden', String(o));
            mob.classList.toggle('open', !o);
        });
    }
    document.addEventListener('click', function(e) {
        if (mob && mob.classList.contains('open') && nav && !nav.contains(e.target)) {
            mob.classList.remove('open');
            if (tog) tog.setAttribute('aria-expanded', 'false');
        }
    });

    // Accordion
    document.querySelectorAll('.acc-b').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var on = btn.classList.contains('on');
            document.querySelectorAll('.acc-b').forEach(function(b) {
                b.classList.remove('on');
                b.setAttribute('aria-expanded', 'false');
                var d = b.nextElementSibling;
                if (d) d.classList.remove('open');
            });
            if (!on) {
                btn.classList.add('on');
                btn.setAttribute('aria-expanded', 'true');
                var d2 = btn.nextElementSibling;
                if (d2) d2.classList.add('open');
            }
        });
    });

    // Scroll-reveal — add fu-ready class to enable animations, then observe
    if ('IntersectionObserver' in window) {
        document.documentElement.classList.add('fu-ready');
        var io = new IntersectionObserver(function(ee) {
            ee.forEach(function(e) {
                if (e.isIntersecting) {
                    e.target.classList.add('vis');
                    io.unobserve(e.target);
                }
            });
        }, {
            threshold: .07,
            rootMargin: '0px 0px -28px 0px'
        });
        document.querySelectorAll('.fu').forEach(function(el, i) {
            el.style.transitionDelay = (i % 6 * .08) + 's';
            io.observe(el);
        });
    }

    // Cookie consent
    var CK = 'alpha_ck_consent';
    var banner = document.getElementById('ck-banner');
    if (banner) {
        try {
            if (localStorage.getItem(CK)) {
                banner.style.display = 'none';
            }
        } catch (e) {}
        var acc = banner.querySelector('.ck-acc');
        var dec = banner.querySelector('.ck-dec');

        function dismiss() {
            banner.style.display = 'none';
            try {
                localStorage.setItem(CK, '1');
            } catch (e) {}
        }
        if (acc) acc.addEventListener('click', dismiss);
        if (dec) dec.addEventListener('click', dismiss);
    }
})();