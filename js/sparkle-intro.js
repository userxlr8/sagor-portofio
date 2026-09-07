/**
 * Google Antigravity Style Sparkle Animation & Scroll Transition
 * For Sagor Sharif's Portfolio
 */

(function () {
  'use strict';

  const introSection = document.getElementById('antigravityIntro');
  const canvas = document.getElementById('sparkleCanvas');
  const exploreBtn = document.getElementById('introExploreBtn');
  const scrollHint = document.getElementById('introScrollHint');
  const mainNavbar = document.getElementById('mainNavbar');
  const introCenterContent = document.querySelector('.intro-center-content');
  const introTopbar = document.querySelector('.intro-topbar');

  if (!canvas || !introSection) return;

  const ctx = canvas.getContext('2d');
  let width, height, dpr;
  let animationFrameId;
  let isPaused = false;

  // Mouse tracking
  const mouse = {
    x: -9999,
    y: -9999,
    targetX: -9999,
    targetY: -9999,
    active: false
  };

  // Sparkle Color Palette (Google Antigravity Confetti Palette)
  const COLORS = [
    '#00f2fe', // Electric Cyan
    '#3b82f6', // Cobalt Blue
    '#8b5cf6', // Electric Violet
    '#ea4335', // Coral Red
    '#f59e0b', // Amber Gold
    '#10b981', // Emerald Green
    '#ec4899', // Radiant Pink
    '#6366f1'  // Indigo
  ];

  // Particle collection
  const particles = [];
  const PARTICLE_COUNT = 240;

  class Sparkle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      // Create a radial distribution around the center
      const centerX = width / 2;
      const centerY = height / 2;

      // Donut / radial burst distribution: leave center somewhat open, cluster around text
      const minRadius = Math.min(width, height) * 0.16;
      const maxRadius = Math.max(width, height) * 0.75;
      
      const angle = Math.random() * Math.PI * 2;
      // Power curve gives denser clustering near the middle perimeter
      const radius = minRadius + Math.pow(Math.random(), 0.7) * (maxRadius - minRadius);

      this.x = centerX + Math.cos(angle) * radius * (width / Math.max(width, height));
      this.y = centerY + Math.sin(angle) * radius * (height / Math.max(width, height));

      this.originX = this.x;
      this.originY = this.y;

      // Type: 0 = dash/pill, 1 = star/dot, 2 = cross
      this.type = Math.random() < 0.7 ? 0 : (Math.random() < 0.7 ? 1 : 2);

      // Sizing
      if (this.type === 0) {
        this.w = 5 + Math.random() * 8; // length of pill
        this.h = 2 + Math.random() * 2.5; // width of pill
      } else {
        this.w = 2.5 + Math.random() * 3.5;
        this.h = this.w;
      }

      this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.baseAlpha = 0.45 + Math.random() * 0.5;
      this.alpha = this.baseAlpha;
      
      this.angle = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.03;

      // Floating oscillation
      this.floatPhaseX = Math.random() * Math.PI * 2;
      this.floatPhaseY = Math.random() * Math.PI * 2;
      this.floatSpeedX = 0.008 + Math.random() * 0.015;
      this.floatSpeedY = 0.008 + Math.random() * 0.015;
      this.floatAmpX = 8 + Math.random() * 14;
      this.floatAmpY = 8 + Math.random() * 14;

      // Twinkle
      this.twinklePhase = Math.random() * Math.PI * 2;
      this.twinkleSpeed = 0.03 + Math.random() * 0.04;

      // Cursor interaction offsets
      this.vx = 0;
      this.vy = 0;
    }

    update(time, scrollProgress) {
      // Oscillating float
      const ox = Math.cos(time * this.floatSpeedX + this.floatPhaseX) * this.floatAmpX;
      const oy = Math.sin(time * this.floatSpeedY + this.floatPhaseY) * this.floatAmpY;

      // Target position
      let targetX = this.originX + ox;
      let targetY = this.originY + oy;

      // Mouse repulsion physics
      if (mouse.active) {
        const dx = targetX - mouse.x;
        const dy = targetY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 160;

        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 35;
          this.vx += (dx / dist) * force * 0.2;
          this.vy += (dy / dist) * force * 0.2;
        }
      }

      // Spring damping return
      this.vx *= 0.88;
      this.vy *= 0.88;

      this.x = targetX + this.vx;
      this.y = targetY + this.vy;

      // Rotation
      this.angle += this.rotSpeed;

      // Twinkle opacity
      const twinkle = (Math.sin(time * this.twinkleSpeed + this.twinklePhase) + 1) * 0.5;
      this.alpha = this.baseAlpha * (0.6 + twinkle * 0.4);

      // Liftoff dispersion during scroll
      if (scrollProgress > 0) {
        const centerX = width / 2;
        const centerY = height / 2;
        const dirX = this.x - centerX;
        const dirY = this.y - centerY;
        const dist = Math.sqrt(dirX * dirX + dirY * dirY) || 1;

        // Disperse outwards violently as scroll increases
        const disperseFactor = Math.pow(scrollProgress, 1.6) * 350;
        this.x += (dirX / dist) * disperseFactor;
        this.y += (dirY / dist) * disperseFactor;
        
        // Fade out
        this.alpha *= Math.max(0, 1 - scrollProgress * 1.5);
      }

      // Reduce sparkles inside center text container
      if (introCenterContent) {
        const cr = introCenterContent.getBoundingClientRect();
        if (this.x >= cr.left - 16 && this.x <= cr.right + 16 &&
            this.y >= cr.top - 16 && this.y <= cr.bottom + 16) {
          this.alpha *= 0.05;
        }
      }
    }

    draw() {
      if (this.alpha <= 0.01) return;

      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.globalAlpha = Math.min(1, Math.max(0, this.alpha));
      ctx.fillStyle = this.color;

      if (this.type === 0) {
        // Rounded dash / capsule
        ctx.beginPath();
        const r = this.h / 2;
        ctx.roundRect(-this.w / 2, -this.h / 2, this.w, this.h, r);
        ctx.fill();
      } else if (this.type === 1) {
        // Circular sparkle
        ctx.beginPath();
        ctx.arc(0, 0, this.w / 2, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // 4-point micro star
        ctx.beginPath();
        ctx.moveTo(0, -this.w);
        ctx.quadraticCurveTo(0, 0, this.w, 0);
        ctx.quadraticCurveTo(0, 0, 0, this.w);
        ctx.quadraticCurveTo(0, 0, -this.w, 0);
        ctx.quadraticCurveTo(0, 0, 0, -this.w);
        ctx.fill();
      }

      ctx.restore();
    }
  }

  function resize() {
    dpr = window.devicePixelRatio || 1;
    width = introSection.clientWidth;
    height = introSection.clientHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';

    ctx.scale(dpr, dpr);

    // Reinitialize particles to new bounds
    particles.length = 0;
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Sparkle());
    }
  }

  let startTime = performance.now();

  function animate(currentTime) {
    const elapsed = (currentTime - startTime) * 0.001;

    // Calculate current scroll progress through the intro section
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const introHeight = introSection.offsetHeight || window.innerHeight;
    const scrollProgress = Math.min(1, Math.max(0, scrollY / introHeight));

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    if (scrollProgress < 1) {
      // Draw and update sparkles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(elapsed * 60, scrollProgress);
        particles[i].draw();
      }
    }

    // Transform DOM elements on scroll
    updateScrollTransforms(scrollProgress, scrollY, introHeight);

    animationFrameId = requestAnimationFrame(animate);
  }

  function updateScrollTransforms(progress, scrollY, introHeight) {
    // 1. Center text liftoff transition
    if (introCenterContent) {
      if (progress > 0) {
        const scale = 1 - progress * 0.12;
        const translateY = -progress * 120;
        const opacity = Math.max(0, 1 - progress * 1.6);
        introCenterContent.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
        introCenterContent.style.opacity = opacity;
        introCenterContent.style.filter = `blur(${progress * 6}px)`;
        introCenterContent.style.pointerEvents = progress > 0.4 ? 'none' : 'auto';
      } else {
        introCenterContent.style.transform = 'translate3d(0, 0, 0) scale(1)';
        introCenterContent.style.opacity = '1';
        introCenterContent.style.filter = 'none';
        introCenterContent.style.pointerEvents = 'auto';
      }
    }

    // 2. Intro Topbar fade
    if (introTopbar) {
      const topbarOpacity = Math.max(0, 1 - progress * 2.2);
      introTopbar.style.opacity = topbarOpacity;
      introTopbar.style.pointerEvents = progress > 0.3 ? 'none' : 'auto';
    }

    // 3. Scroll Hint fade
    if (scrollHint) {
      const hintOpacity = Math.max(0, 1 - progress * 3.5);
      scrollHint.style.opacity = hintOpacity;
    }

    // 4. Main Navbar Appearance (Fades in smoothly as user leaves the white intro)
    if (mainNavbar) {
      if (scrollY > introHeight * 0.45) {
        mainNavbar.classList.add('navbar-visible');
        mainNavbar.classList.remove('navbar-hidden-intro');
      } else {
        mainNavbar.classList.remove('navbar-visible');
        mainNavbar.classList.add('navbar-hidden-intro');
      }
    }
  }

  // Smooth scroll down when clicking explore button or scroll hint
  function scrollToHero(e) {
    if (e) e.preventDefault();
    const heroSection = document.getElementById('hero');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  if (exploreBtn) {
    exploreBtn.addEventListener('click', scrollToHero);
  }

  if (scrollHint) {
    scrollHint.addEventListener('click', scrollToHero);
  }

  // Mouse move listener
  window.addEventListener('mousemove', (e) => {
    const rect = introSection.getBoundingClientRect();
    if (e.clientY <= rect.bottom && e.clientY >= rect.top) {
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    } else {
      mouse.active = false;
    }
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  // Sparkle burst effect originating from word location
  function createSparkleBurst(originX, originY) {
    if (!width || !height) return;
    const burstCount = 16;
    for (let i = 0; i < burstCount; i++) {
      const p = new Sparkle();
      p.x = originX;
      p.y = originY;
      p.originX = originX;
      p.originY = originY;
      const angle = (Math.PI * 2 * i) / burstCount + (Math.random() - 0.5) * 0.5;
      const speed = 2.5 + Math.random() * 4.5;
      p.vx = Math.cos(angle) * speed;
      p.vy = Math.sin(angle) * speed;
      p.baseAlpha = 0.9;
      p.alpha = 0.9;
      particles.push(p);
      if (particles.length > PARTICLE_COUNT + 45) {
        particles.shift();
      }
    }
  }

  // Word-by-word streaming animation like Google Antigravity
  function runWordByWordAnimation() {
    const words = document.querySelectorAll('.intro-word');
    const cursor = document.getElementById('introCursor');
    const subtitle = document.querySelector('.intro-subtitle');
    const ctas = document.querySelector('.intro-ctas');

    if (!words.length) return;

    // Word reveal timing
    const wordDelay = 460; // ms between words
    const startDelay = 320; // initial pause

    words.forEach((word, idx) => {
      setTimeout(() => {
        word.classList.add('is-visible');

        // Move the typing cursor to sit immediately after the current word
        if (cursor && word.parentNode) {
          word.parentNode.insertBefore(cursor, word.nextSibling);
        }

        // Trigger cheerful micro-sparkle burst centered on the appearing word
        const wordRect = word.getBoundingClientRect();
        const introRect = introSection.getBoundingClientRect();
        const cx = wordRect.left + wordRect.width / 2 - introRect.left;
        const cy = wordRect.top + wordRect.height / 2 - introRect.top;
        createSparkleBurst(cx, cy);

        // When the final word ("Sagor") is written
        if (idx === words.length - 1) {
          // Fade in subtitle
          setTimeout(() => {
            if (subtitle) subtitle.classList.add('is-visible');
          }, 380);

          // Fade in CTA buttons
          setTimeout(() => {
            if (ctas) ctas.classList.add('is-visible');
          }, 650);

          // Hide cursor softly after blinking
          setTimeout(() => {
            if (cursor) cursor.classList.add('is-hidden');
          }, 2200);
        }
      }, startDelay + idx * wordDelay);
    });
  }

  // Window resize
  window.addEventListener('resize', () => {
    resize();
  });

  // Initialization
  function init() {
    resize();
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    const introHeight = introSection.offsetHeight || window.innerHeight;
    if (scrollY > introHeight * 0.45 && mainNavbar) {
      mainNavbar.classList.add('navbar-visible');
      mainNavbar.classList.remove('navbar-hidden-intro');
    }
    animationFrameId = requestAnimationFrame(animate);

    // Run the word-by-word written animation
    runWordByWordAnimation();

    // If page is loaded with a hash anchor other than #antigravityIntro or #hero, allow native jump
    if (window.location.hash && window.location.hash !== '#antigravityIntro' && window.location.hash !== '#hero') {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' });
        }, 150);
      }
    }
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
