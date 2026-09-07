/**
 * antigravity-bg.js - Global Google Antigravity Sparkles Background Engine
 * With Smart Text-Zone Avoidance & Interactive Tap/Click Spark Bursts.
 * 
 * Features:
 * 1. Ambient Sparkles:
 *    - Distributed across negative spaces, margins, and section gaps.
 *    - Dynamically detects text bounding boxes (Hero headings, paragraphs, cards, tags).
 *    - Repels away and dramatically dims/suppresses sparkles wherever text is present,
 *      ensuring 100% crisp, readable typography without visual clutter.
 * 2. Interactive Tap / Click Spark Animation:
 *    - Instant multi-colored spark explosion (confetti dashes, 4-point glittering stars,
 *      diamonds, and glowing specks) emanating from any click or touch coordinate.
 *    - Features fluid physics: high initial velocity, natural air drag, gravity arching,
 *      and an instantaneous radiant feedback ripple.
 *    - Rendered on a top-layer overlay canvas so sparks burst dynamically right under
 *      the user's cursor or fingertip.
 */

(function () {
  'use strict';

  // 1. Canvases & Contexts
  const bgCanvas = document.getElementById('antigravityBgCanvas');
  const burstCanvas = document.getElementById('sparkBurstCanvas');
  if (!bgCanvas) return;

  const bgCtx = bgCanvas.getContext('2d');
  const burstCtx = burstCanvas ? burstCanvas.getContext('2d') : null;

  let width = 0;
  let height = 0;
  let dpr = 1;
  let animationFrameId;

  // Track mouse coordinates
  const mouse = {
    x: -9999,
    y: -9999,
    targetX: -9999,
    targetY: -9999,
    active: false,
    radius: 140
  };

  let scrollY = window.pageYOffset || document.documentElement.scrollTop;
  let targetScrollY = scrollY;

  // Google Antigravity Confetti & Sparkle Color Palette
  const SPARKLE_COLORS = [
    '#00f2fe', // Electric Cyan
    '#0284c7', // Sky Cyan
    '#2563eb', // Cobalt Blue
    '#3b82f6', // Bright Blue
    '#8b5cf6', // Electric Violet
    '#7c3aed', // Purple Accent
    '#ea4335', // Coral Red
    '#f59e0b', // Amber Gold
    '#10b981', // Emerald Green
    '#ec4899', // Radiant Pink
    '#0f172a'  // Obsidian Slate for contrast
  ];

  // Collections
  const sparkles = [];
  const SPARKLE_COUNT_DESKTOP = 340;
  const SPARKLE_COUNT_MOBILE = 130;

  const burstParticles = [];
  const burstRipples = [];

  /* --------------------------------------------------------------------------
     TEXT ZONE DETECTION & COLLISION AVOIDANCE
     -------------------------------------------------------------------------- */
  let textZones = [];
  let frameCounter = 0;

  const TEXT_SELECTORS = [
    '.hero-left',
    '.hero-avatar-card',
    '.intro-center-content',
    '.section-header',
    '.about-story',
    '.about-bio',
    '.about-stats',
    '.sim-info',
    '.stats-grid',
    '.project-card .card-body',
    '.timeline-card',
    '.timeline-content',
    '.mentor-card',
    '.contest-card',
    '.skill-group-card',
    '.contact-card',
    '.contact-form-wrap',
    '.footer-clean-inner',
    'h1', 'h2', 'h3', 'p'
  ];

  function updateTextZones() {
    const elements = document.querySelectorAll(TEXT_SELECTORS.join(', '));
    const zones = [];
    const padX = 16;
    const padY = 12;

    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      if (!el || el.offsetParent === null) continue;

      const r = el.getBoundingClientRect();
      // Keep only elements in or near the viewport
      if (r.width > 0 && r.height > 0 && r.bottom > -60 && r.top < height + 60) {
        zones.push({
          left: r.left - padX,
          top: r.top - padY,
          right: r.right + padX,
          bottom: r.bottom + padY,
          cx: (r.left + r.right) / 2,
          cy: (r.top + r.bottom) / 2,
          halfW: (r.width + padX * 2) / 2,
          halfH: (r.height + padY * 2) / 2
        });
      }
    }
    textZones = zones;
  }

  function getTextZoneAt(x, y) {
    for (let i = 0; i < textZones.length; i++) {
      const z = textZones[i];
      if (x >= z.left && x <= z.right && y >= z.top && y <= z.bottom) {
        return z;
      }
    }
    return null;
  }

  /* --------------------------------------------------------------------------
     1. AMBIENT SPARKLE PARTICLE (Background Layer)
     -------------------------------------------------------------------------- */
  class SparkleParticle {
    constructor() {
      this.reset(true);
    }

    reset(initial = false) {
      // Pick coordinates preferably in negative space outside text zones
      let chosenX = Math.random() * width;
      let chosenY = Math.random() * height;

      for (let attempt = 0; attempt < 6; attempt++) {
        const testX = Math.random() * width;
        const testY = Math.random() * height;
        if (!getTextZoneAt(testX, testY)) {
          chosenX = testX;
          chosenY = testY;
          break;
        }
      }

      this.originX = chosenX;
      this.originY = chosenY;
      this.x = this.originX;
      this.y = this.originY;

      // Type:
      // 0 = Pill / Confetti dash (~42%)
      // 1 = 4-Point curved star sparkle (~28%)
      // 2 = Diamond shimmer (~15%)
      // 3 = Twinkling round stardust speck (~15%)
      const rand = Math.random();
      if (rand < 0.42) {
        this.type = 0;
        this.w = 5.5 + Math.random() * 6.5;
        this.h = 2.2 + Math.random() * 1.5;
      } else if (rand < 0.70) {
        this.type = 1;
        this.size = 3.5 + Math.random() * 4.5;
      } else if (rand < 0.85) {
        this.type = 2;
        this.size = 3.0 + Math.random() * 3.5;
      } else {
        this.type = 3;
        this.radius = 1.2 + Math.random() * 1.8;
      }

      this.color = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
      this.baseAlpha = 0.45 + Math.random() * 0.45;
      this.alpha = this.baseAlpha;
      this.textAlphaFactor = 1.0; // drops to near zero inside text zones

      this.angle = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.025;

      this.floatPhaseX = Math.random() * Math.PI * 2;
      this.floatPhaseY = Math.random() * Math.PI * 2;
      this.floatSpeedX = 0.007 + Math.random() * 0.014;
      this.floatSpeedY = 0.007 + Math.random() * 0.014;
      this.floatAmpX = 8 + Math.random() * 16;
      this.floatAmpY = 8 + Math.random() * 16;

      this.twinklePhase = Math.random() * Math.PI * 2;
      this.twinkleSpeed = 0.02 + Math.random() * 0.035;
      this.twinkle = 1;

      this.vx = 0;
      this.vy = 0;
      this.parallaxFactor = 0.03 + Math.random() * 0.07;
    }

    update(time) {
      // Floating oscillation
      const ox = Math.cos(time * this.floatSpeedX + this.floatPhaseX) * this.floatAmpX;
      const oy = Math.sin(time * this.floatSpeedY + this.floatPhaseY) * this.floatAmpY;

      // Parallax scroll wrap-around
      const py = (scrollY * this.parallaxFactor) % height;
      let targetY = (this.originY + oy - py);
      if (targetY < -30) targetY += height + 60;
      if (targetY > height + 30) targetY -= height + 60;

      let targetX = this.originX + ox;

      // Mouse repulsion physics
      if (mouse.active) {
        const dx = targetX + this.vx - mouse.x;
        const dy = targetY + this.vy - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (1 - dist / mouse.radius) * 28;
          this.vx += (dx / dist) * force * 0.2;
          this.vy += (dy / dist) * force * 0.2;
        }
      }

      // Check text collision and repulsion
      const currentX = targetX + this.vx;
      const currentY = targetY + this.vy;
      const zone = getTextZoneAt(currentX, currentY);

      if (zone) {
        // Gently push away from the center of the text block toward margins
        const dx = currentX - zone.cx;
        const dy = currentY - zone.cy;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        this.vx += (dx / dist) * 0.45;
        this.vy += (dy / dist) * 0.45;

        // Dim smoothly down to zero so letters remain 100% readable
        this.textAlphaFactor += (0.0 - this.textAlphaFactor) * 0.35;
      } else {
        // Outside text zones: restore full vibrant opacity
        this.textAlphaFactor += (1.0 - this.textAlphaFactor) * 0.15;
      }

      // Spring damping return
      this.vx *= 0.88;
      this.vy *= 0.88;

      this.x = targetX + this.vx;
      this.y = targetY + this.vy;

      // Rotation & Twinkle
      this.angle += this.rotSpeed;
      this.twinklePhase += this.twinkleSpeed;
      this.twinkle = 0.7 + Math.sin(this.twinklePhase) * 0.3;
    }

    draw(targetCtx) {
      const effectiveAlpha = this.alpha * this.twinkle * this.textAlphaFactor;
      // Skip drawing if effectively invisible (e.g. inside text)
      if (effectiveAlpha <= 0.02) return;

      targetCtx.save();
      targetCtx.translate(this.x, this.y);
      targetCtx.rotate(this.angle);
      targetCtx.globalAlpha = Math.max(0, Math.min(1.0, effectiveAlpha));
      targetCtx.fillStyle = this.color;

      if (this.type === 0) {
        // Pill / Confetti Dash
        const halfW = this.w / 2;
        const halfH = this.h / 2;
        targetCtx.beginPath();
        if (targetCtx.roundRect) {
          targetCtx.roundRect(-halfW, -halfH, this.w, this.h, this.h / 2);
        } else {
          targetCtx.rect(-halfW, -halfH, this.w, this.h);
        }
        targetCtx.fill();
      } else if (this.type === 1) {
        // 4-Point Curved Star Sparkle
        const r = this.size;
        targetCtx.beginPath();
        targetCtx.moveTo(0, -r);
        targetCtx.quadraticCurveTo(0, 0, r, 0);
        targetCtx.quadraticCurveTo(0, 0, 0, r);
        targetCtx.quadraticCurveTo(0, 0, -r, 0);
        targetCtx.quadraticCurveTo(0, 0, 0, -r);
        targetCtx.closePath();
        targetCtx.fill();
      } else if (this.type === 2) {
        // Diamond Sparkle
        const r = this.size;
        targetCtx.beginPath();
        targetCtx.moveTo(0, -r);
        targetCtx.lineTo(r * 0.45, 0);
        targetCtx.lineTo(0, r);
        targetCtx.lineTo(-r * 0.45, 0);
        targetCtx.closePath();
        targetCtx.fill();
      } else {
        // Twinkling Stardust Dot
        targetCtx.beginPath();
        targetCtx.arc(0, 0, this.radius, 0, Math.PI * 2);
        targetCtx.fill();
      }

      targetCtx.restore();
    }
  }

  /* --------------------------------------------------------------------------
     2. INTERACTIVE TAP / CLICK SPARK BURST ENGINE
     -------------------------------------------------------------------------- */
  class BurstSparkle {
    constructor(x, y) {
      this.x = x + (Math.random() - 0.5) * 6;
      this.y = y + (Math.random() - 0.5) * 6;

      // Radially exploding angle
      const angle = Math.random() * Math.PI * 2;
      // High velocity burst
      const speed = 3.5 + Math.random() * 6.8;
      this.vx = Math.cos(angle) * speed;
      // Lift slightly upwards for a fountain/firework aesthetic
      this.vy = Math.sin(angle) * speed - 1.2;

      this.drag = 0.93;
      this.gravity = 0.18 + Math.random() * 0.10;

      // Type: 0 = 4-point star, 1 = pill dash, 2 = diamond, 3 = circle speck
      const rand = Math.random();
      if (rand < 0.35) {
        this.type = 0; // Star
        this.size = 4.5 + Math.random() * 4.0;
      } else if (rand < 0.70) {
        this.type = 1; // Pill dash
        this.w = 6.5 + Math.random() * 7.5;
        this.h = 2.4 + Math.random() * 1.8;
      } else if (rand < 0.85) {
        this.type = 2; // Diamond
        this.size = 3.8 + Math.random() * 3.5;
      } else {
        this.type = 3; // Circle dot
        this.radius = 2.2 + Math.random() * 2.2;
      }

      this.color = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
      this.angle = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.28;

      this.life = 1.0;
      this.decay = 0.022 + Math.random() * 0.022; // Lasts ~35-50 frames (0.6 - 0.85s)
    }

    update() {
      this.vx *= this.drag;
      this.vy = this.vy * this.drag + this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.angle += this.rotSpeed;
      this.rotSpeed *= 0.98;
      this.life -= this.decay;
    }

    draw(targetCtx) {
      if (this.life <= 0) return;
      const scale = Math.max(0, Math.pow(this.life, 0.7));

      targetCtx.save();
      targetCtx.translate(this.x, this.y);
      targetCtx.rotate(this.angle);
      targetCtx.scale(scale, scale);
      targetCtx.globalAlpha = Math.max(0, Math.min(1.0, this.life));
      targetCtx.fillStyle = this.color;

      if (this.type === 0) {
        // 4-Point Star
        const r = this.size;
        targetCtx.beginPath();
        targetCtx.moveTo(0, -r);
        targetCtx.quadraticCurveTo(0, 0, r, 0);
        targetCtx.quadraticCurveTo(0, 0, 0, r);
        targetCtx.quadraticCurveTo(0, 0, -r, 0);
        targetCtx.quadraticCurveTo(0, 0, 0, -r);
        targetCtx.closePath();
        targetCtx.fill();
      } else if (this.type === 1) {
        // Pill Dash
        const halfW = this.w / 2;
        const halfH = this.h / 2;
        targetCtx.beginPath();
        if (targetCtx.roundRect) {
          targetCtx.roundRect(-halfW, -halfH, this.w, this.h, this.h / 2);
        } else {
          targetCtx.rect(-halfW, -halfH, this.w, this.h);
        }
        targetCtx.fill();
      } else if (this.type === 2) {
        // Diamond
        const r = this.size;
        targetCtx.beginPath();
        targetCtx.moveTo(0, -r);
        targetCtx.lineTo(r * 0.45, 0);
        targetCtx.lineTo(0, r);
        targetCtx.lineTo(-r * 0.45, 0);
        targetCtx.closePath();
        targetCtx.fill();
      } else {
        // Circle Dot
        targetCtx.beginPath();
        targetCtx.arc(0, 0, this.radius, 0, Math.PI * 2);
        targetCtx.fill();
      }

      targetCtx.restore();
    }
  }

  // Instant Radiant Ring Feedback on Tap
  class BurstRipple {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.radius = 3;
      this.maxRadius = 38;
      this.life = 1.0;
      this.decay = 0.07; // ~14 frames
      this.color = '#00f2fe';
    }

    update() {
      this.radius += (this.maxRadius - this.radius) * 0.22;
      this.life -= this.decay;
    }

    draw(targetCtx) {
      if (this.life <= 0) return;
      targetCtx.save();
      targetCtx.beginPath();
      targetCtx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      targetCtx.strokeStyle = this.color;
      targetCtx.lineWidth = Math.max(1, 2.5 * this.life);
      targetCtx.globalAlpha = Math.max(0, Math.min(0.75, this.life));
      targetCtx.stroke();
      targetCtx.restore();
    }
  }

  function spawnBurst(clientX, clientY) {
    const count = width < 768 ? 16 : 24;
    for (let i = 0; i < count; i++) {
      burstParticles.push(new BurstSparkle(clientX, clientY));
    }
    burstRipples.push(new BurstRipple(clientX, clientY));
  }

  /* --------------------------------------------------------------------------
     3. INITIALIZATION & RESIZING
     -------------------------------------------------------------------------- */
  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);

    bgCanvas.width = width * dpr;
    bgCanvas.height = height * dpr;
    bgCtx.scale(dpr, dpr);

    if (burstCanvas && burstCtx) {
      burstCanvas.width = width * dpr;
      burstCanvas.height = height * dpr;
      burstCtx.scale(dpr, dpr);
    }

    updateTextZones();
    initSparkles();
  }

  function initSparkles() {
    sparkles.length = 0;
    const count = width < 768 ? SPARKLE_COUNT_MOBILE : SPARKLE_COUNT_DESKTOP;
    for (let i = 0; i < count; i++) {
      sparkles.push(new SparkleParticle());
    }
  }

  /* --------------------------------------------------------------------------
     4. ANIMATION LOOP (60 FPS)
     -------------------------------------------------------------------------- */
  let hadActiveBursts = false;

  function animate(timestamp) {
    const time = timestamp * 0.001;
    frameCounter++;

    // Smooth scroll interpolation
    targetScrollY = window.pageYOffset || document.documentElement.scrollTop;
    scrollY += (targetScrollY - scrollY) * 0.1;

    // Refresh text zones dynamically on scroll or periodically
    if (Math.abs(targetScrollY - scrollY) > 0.4 || frameCounter % 35 === 0) {
      updateTextZones();
    }

    // Mouse ease towards target
    if (mouse.active) {
      mouse.x += (mouse.targetX - mouse.x) * 0.25;
      mouse.y += (mouse.targetY - mouse.y) * 0.25;
    }

    // Clear ambient background canvas
    bgCtx.clearRect(0, 0, width, height);

    // Render all ambient sparkles (repelled & dimmed in text zones)
    for (let i = 0; i < sparkles.length; i++) {
      sparkles[i].update(time);
      sparkles[i].draw(bgCtx);
    }

    // Render interactive tap/click burst sparks & ripples on overlay canvas
    const activeCtx = burstCtx || bgCtx;
    if (burstParticles.length > 0 || burstRipples.length > 0) {
      hadActiveBursts = true;
      if (burstCtx) {
        burstCtx.clearRect(0, 0, width, height);
      }

      // Update & draw ripples
      for (let i = burstRipples.length - 1; i >= 0; i--) {
        const r = burstRipples[i];
        r.update();
        r.draw(activeCtx);
        if (r.life <= 0) {
          burstRipples.splice(i, 1);
        }
      }

      // Update & draw burst sparkles
      for (let i = burstParticles.length - 1; i >= 0; i--) {
        const p = burstParticles[i];
        p.update();
        p.draw(activeCtx);
        if (p.life <= 0) {
          burstParticles.splice(i, 1);
        }
      }
    } else if (hadActiveBursts && burstCtx) {
      // Clear overlay canvas once when everything finishes
      burstCtx.clearRect(0, 0, width, height);
      hadActiveBursts = false;
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  /* --------------------------------------------------------------------------
     5. EVENT LISTENERS
     -------------------------------------------------------------------------- */
  window.addEventListener('resize', resize);
  window.addEventListener('scroll', () => {
    updateTextZones();
  }, { passive: true });

  window.addEventListener('mousemove', (e) => {
    mouse.active = true;
    mouse.targetX = e.clientX;
    mouse.targetY = e.clientY;
  });

  window.addEventListener('mouseleave', () => {
    mouse.active = false;
    mouse.targetX = -9999;
    mouse.targetY = -9999;
  });

  // Touch move support
  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches.length > 0) {
      mouse.active = true;
      mouse.targetX = e.touches[0].clientX;
      mouse.targetY = e.touches[0].clientY;
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    mouse.active = false;
  });

  // Interactive Click & Tap Animation (Global Pointer Down Capture)
  let lastBurstTime = 0;
  function handlePointerDown(e) {
    if (e.button !== undefined && e.button !== 0) return; // ignore right clicks
    const now = performance.now();
    if (now - lastBurstTime < 18) return; // Prevent duplicate rapid events
    lastBurstTime = now;
    spawnBurst(e.clientX, e.clientY);
  }

  window.addEventListener('pointerdown', handlePointerDown, { capture: true, passive: true });

  // Initial setup & start
  resize();
  animationFrameId = requestAnimationFrame(animate);
})();
