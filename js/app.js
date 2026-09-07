/**
 * app.js - Main Application Controller
 * Handles Navigation, Project Filtering, Case Study Modal Dialog,
 * Contact Form Validation, and Toast Notifications.
 */

// ---------------------------------------------------------------------------
// 1. PROJECTS DATABASE
// ---------------------------------------------------------------------------
const PROJECTS_DATA = [
  {
    id: 'sand-hourglass',
    title: 'Digital Sand Hourglass',
    subtitle: 'Recreating physical sand behavior with LEDs, sensors & embedded software',
    category: 'robotics',
    categoryName: 'Embedded Systems & Robotics',
    badge: 'Featured Hardware',
    image: 'assets/images/sand-hourglass.jpg',
    summary: 'Interactive electronic hourglass simulating realistic falling sand on dual 8x8 RGB LED matrices, reacting dynamically to tilt, rotation, and gravity via MPU6050 accelerometer.',
    tech: ['Arduino', 'MPU6050', 'Dual 8x8 LED Matrices', 'I2C', 'Embedded C++', 'Gravity Sensing'],
    specs: {
      'Microcontroller': 'Arduino UNO / Nano',
      'Motion Sensing': 'MPU-6050 6-Axis Gyro & Accelerometer',
      'Display Array': 'Two 8x8 Square RGB LED Matrix Modules',
      'Communication': 'I2C Protocol',
      'Simulation Physics': 'Discrete Cellular Automaton Sand Gravity Model',
      'Timer Presets': '30s, 1m, 2m, 5m, 10m, 30m via Potentiometer'
    },
    problem: 'Traditional mechanical hourglasses suffer from fixed durations, fragile glass, and no adaptability. Most digital timers lack the visceral, relaxing visual feedback of physical flowing sand.',
    solution: 'Designed an interactive embedded system running physics-inspired falling sand cellular automata. When tilted, the MPU6050 detects gravitational vector angles; sand particles realistically slide diagonally, gather into natural pyramids at the base, and restart upon flipping.',
    features: [
      'Real-time diagonal grain movement and pyramid piling',
      'Continuous gravity vector tracking via MPU6050 6-DOF sensor',
      'Dynamic moving hole animation at the funnel constriction',
      'Auto-flip detection that resets timer and inverts particle flow',
      'Potentiometer-based analog timer duration selection',
      'Modular breadboard and custom acrylic enclosure architecture'
    ],
    github: 'https://github.com/Sagor-Sharif/Digital_Sand_Watch'
  },
  {
    id: 'child-safety',
    title: 'Smart Child Safety & Tracking Device',
    subtitle: 'Wearable cellular emergency alert & GPS telemetry system',
    category: 'robotics',
    categoryName: 'IoT & Safety Systems',
    badge: 'Featured IoT',
    image: 'assets/images/child-safety.jpg',
    summary: 'A wearable emergency communication device equipped with GPS and GSM modules that enables children to instantly trigger emergency calls and transmit live location coordinates to parents.',
    tech: ['Arduino', 'SIM800L GSM', 'NEO-6M GPS', 'Embedded C++', 'Hardware Electronics', 'SOS Protocol'],
    specs: {
      'Microcontroller': 'Arduino Nano / Pro Mini (5V, 16MHz)',
      'Cellular Network': 'SIM800L Quad-band GSM/GPRS Module',
      'Positioning Engine': 'NEO-6M GPS Receiver with Ceramic Antenna',
      'Trigger Mechanism': 'Debounced Tactile SOS Button',
      'Power Source': '3.7V Li-ion Battery with TP4056 Boost Charger',
      'Output Modes': 'Direct Voice Call + SMS Geolocation Link'
    },
    problem: 'School-age children face vulnerabilities during commutes, and smartphones are often prohibited in school environments or too complex to unlock and operate under panic conditions.',
    solution: 'Created a standalone, wearable safety device with a dedicated, tactile SOS button. One press immediately places a phone call to predefined guardian numbers and transmits an emergency SMS containing accurate Google Maps coordinates.',
    features: [
      'One-touch immediate guardian phone dialer via AT commands',
      'Automated SMS containing live latitude/longitude and Google Maps link',
      'High-sensitivity GPS fix with external ceramic patch antenna',
      'Low standby power consumption optimized for wearable battery packs',
      'Robust physical casing with child-friendly button feedback',
      'Verified with field test hardware and circuit schematics'
    ],
    github: 'https://github.com/Sagor-Sharif/Security-Device-for-child.'
  },
  {
    id: 'robot-loader',
    title: 'Bluetooth Controlled Load-Unload Robot',
    subtitle: 'Mobile automation rover with motorized handling mechanism',
    category: 'robotics',
    categoryName: 'Robotics & Automation',
    badge: 'Featured Robotics',
    image: 'assets/images/robot-loader.jpg',
    summary: 'A 4-wheel mobile Arduino robotics platform capable of omnidirectional navigation and remote motorized material loading and unloading via Bluetooth and smartphone controls.',
    tech: ['Arduino UNO', 'L298N Motor Driver', 'HC-05 Bluetooth', 'DC Geared Motors', 'PWM Speed Control'],
    specs: {
      'Microcontroller': 'Arduino UNO R3',
      'Drive System': '4WD Chassis with High-Torque DC Geared Motors',
      'Motor Driver': 'L298N Dual H-Bridge Driver Module',
      'Wireless Interfacing': 'HC-05 Bluetooth 2.0+EDR Module (UART)',
      'Handling Mechanism': 'Motorized Conveyor & Tilting Load Bed',
      'Control Inputs': 'Custom Mobile Bluetooth App & PC Serial Terminal'
    },
    problem: 'Small-scale factory workflows and educational robotics testbeds often need affordable, reconfigurable mobile automated guided vehicles (AGVs) that can transfer items between workstations.',
    solution: 'Built a multi-directional robotic carrier controlled remotely via smartphone Bluetooth. Features pulse-width modulation (PWM) for smooth velocity curves and dedicated serial commands for operating the motorized loading/unloading mechanism.',
    features: [
      'Comprehensive serial command parsing (F=Forward, B=Backward, L=Left, R=Right)',
      'Motorized loading/unloading conveyor actions with dedicated triggers',
      'Automatic motor cutoff and brake protection after movement sequences',
      'Smartphone app connectivity with real-time Bluetooth telemetry',
      'Dual H-bridge PWM motor speed ramping',
      'Tested for small warehouse payload dispatch and conveyor testing'
    ],
    github: 'https://github.com/Sagor-Sharif/Arduino-Based-Load-Unload-Track-with-Mobile-App-Control'
  },
  {
    id: 'dotproject',
    title: 'DotProject — Custom 3D Printing E-Commerce',
    subtitle: 'Modern full-stack web storefront with Supabase database',
    category: 'web',
    categoryName: 'Full-Stack Web Software',
    badge: 'Featured Full-Stack',
    image: 'assets/images/dotproject.jpg',
    summary: 'A complete full-stack web storefront for custom 3D printing orders, featuring Next.js, React, Supabase authentication, interactive shopping cart drawer, and administrative product management.',
    tech: ['Next.js', 'React', 'TypeScript', 'Supabase', 'SQL', 'Authentication', 'E-Commerce UI'],
    specs: {
      'Frontend Framework': 'Next.js & React with TypeScript',
      'Backend & Database': 'Supabase PostgreSQL Cloud',
      'Authentication': 'Supabase Auth (Magic Links, Email/Password, Sessions)',
      'State Management': 'React Context & Custom Hooks for Cart State',
      'Database Schema': 'Custom SQL Relational Tables (Products, Orders, Profiles)',
      'Key UI Modules': 'Slide-out Cart Drawer, Product Customizer, Admin Panel'
    },
    problem: 'Makers offering on-demand 3D printing lack tailored storefronts that allow customers to select custom materials, colors, infill settings, and view dynamic pricing with customer account tracking.',
    solution: 'Engineered a full-stack e-commerce web application featuring user accounts, shopping cart persistence, product review interfaces, checkout flows, and an admin dashboard for inventory management.',
    features: [
      'Complete authentication flow: Sign-in, sign-up, password reset, magic links',
      'Interactive shopping cart drawer with instant quantity and price recalculations',
      'Detailed product view with customizable filament materials and finishing tags',
      'Customer order history and profile management portal',
      'Secure Supabase database schema with Row Level Security (RLS)',
      'Admin catalog management for listing new 3D printed models'
    ],
    github: 'https://github.com/Sagor-Sharif/DotProject'
  },
  {
    id: 'currency-scanner',
    title: 'Intelligent Paper Currency Recognition',
    subtitle: 'Assistive computer vision system for visually impaired in Bangladesh',
    category: 'assistive',
    categoryName: 'Assistive Tech & Computer Vision',
    badge: 'Social Impact Project',
    image: 'assets/images/currency-scanner.jpg',
    summary: 'An assistive technology computer vision solution designed to help blind and visually impaired individuals rapidly identify Bangladeshi paper currency banknotes through camera inspection.',
    tech: ['Computer Vision', 'Pattern Recognition', 'Image Processing', 'Assistive Technology', 'Python'],
    specs: {
      'Application Domain': 'Assistive Technology for Visually Impaired',
      'Target Currency': 'Bangladeshi Taka (BDT 10, 20, 50, 100, 500, 1000)',
      'Core Techniques': 'Contour Detection, Feature Extraction & Pattern Matching',
      'User Feedback': 'Synthetic Audio Announcement & High-Contrast Visual HUD',
      'Project Period': 'August 2023 – November 2023 (Supporting Role)'
    },
    problem: 'Visually impaired individuals in Bangladesh struggle to differentiate banknotes that share similar physical textures and wear, making financial transactions prone to errors or deception.',
    solution: 'Developed a pattern recognition prototype capable of analyzing captured banknote frames, extracting unique design hallmarks of Bangladeshi currency, and announcing denominations via instant audio feedback.',
    features: [
      'Real-time banknote boundary localization and perspective normalization',
      'Robust feature extraction capable of handling crumpled or creased bills',
      'Multi-denomination classification across all common Bangladeshi notes',
      'Audio-first feedback design tailored for blind users',
      'Lightweight model design suitable for mobile smartphone execution',
      'Presented as an impactful social innovation project'
    ],
    github: 'https://github.com/Sagor-Sharif'
  },
  {
    id: 'line-robot',
    title: 'Line Following Autonomous Robot',
    subtitle: 'Autonomous differential drive navigation robot',
    category: 'robotics',
    categoryName: 'Robotics & Control Systems',
    badge: 'Hardware',
    image: 'assets/images/line-robot.jpg',
    summary: 'An autonomous mobile robot designed to track and follow high-contrast path trajectories using an array of infrared reflectance sensors and closed-loop motor control algorithms.',
    tech: ['Arduino', 'Embedded C++', 'IR Sensor Array', 'DC Motors', 'Autonomous Control'],
    specs: {
      'Controller': 'Arduino Microcontroller',
      'Sensors': 'TCRT5000 Multi-channel Infrared Reflectance Array',
      'Drive Configuration': 'Differential Drive with Ball Caster Stabilizer',
      'Control Loop': 'Discrete Threshold & Differential Correction Algorithm',
      'Power System': 'Dual 18650 Li-ion Battery Bank'
    },
    problem: 'Autonomous mobile transport requires accurate, drift-free path following on defined factory floors without expensive LIDAR or GPS systems.',
    solution: 'Constructed a robust differential-drive autonomous robot utilizing real-time analog IR reflectance sensor readings to maintain trajectory alignment along curving paths.',
    features: [
      'High-speed line detection with noise filtering for ambient light',
      'Differential motor PWM speed compensation on tight radius turns',
      'Custom acrylic lightweight chassis for agile acceleration',
      'Autonomous track re-acquisition logic on line loss',
      'Low power consumption and modular sensor calibration routines'
    ],
    github: 'https://github.com/Sagor-Sharif/Line-Following-Robot'
  },
  {
    id: 'asterisk-pbx',
    title: 'Local PBX Smartphone Intercom System',
    subtitle: 'Private Linux VoIP telecommunication server',
    category: 'systems',
    categoryName: 'Systems & Networking',
    badge: 'Systems & VoIP',
    image: 'assets/images/robot-loader.jpg',
    summary: 'A private local smartphone intercom and telecommunication exchange built using Asterisk PBX on Ubuntu, featuring SIP client extensions, voicemail routing, and local network calling.',
    tech: ['Ubuntu Server', 'Asterisk PBX', 'SIP Protocol', 'VoIP', 'Networking', 'Configuration Architecture'],
    specs: {
      'Server OS': 'Ubuntu Linux',
      'Telephony Engine': 'Asterisk PBX Software Suite',
      'Protocols': 'Session Initiation Protocol (SIP), RTP Audio Streams',
      'Configuration Files': 'sip.conf, extensions.conf, voicemail.conf',
      'Client Endpoints': 'Android/iOS SIP Softphones over Local WiFi'
    },
    problem: 'Campus and remote lab environments require reliable internal voice communication without incurring commercial cellular or cloud telephony subscription charges.',
    solution: 'Configured and deployed a local VoIP telephony server using Asterisk on Ubuntu Linux. Configured SIP accounts, dialplan routing rules, call forwarding, and voicemail boxes.',
    features: [
      'Dialplan routing with custom extension rules in extensions.conf',
      'Encrypted SIP registration and media stream negotiation',
      'Integrated voicemail storage and PIN-protected mailbox access',
      'Zero external telecom dependencies; operates on local LAN/WiFi',
      'Tested with multiple concurrent softphone client devices'
    ],
    github: 'https://github.com/Sagor-Sharif/Asterisk-PBX-Setup-with-Ubuntu'
  },
  {
    id: 'lucky-draw',
    title: 'WeMasterTrade Interactive Lucky Draw',
    subtitle: 'Canvas-based spinning wheel with winner history',
    category: 'web',
    categoryName: 'Interactive Web Applications',
    badge: 'Web App',
    image: 'assets/images/dotproject.jpg',
    summary: 'A high-performance browser-based spinning prize draw web application featuring dynamic participant entry management, physics deceleration easing, winner celebration, and exportable history.',
    tech: ['JavaScript', 'HTML5 Canvas', 'CSS3 Animations', 'Client State', 'Confetti FX'],
    specs: {
      'Rendering Core': 'HTML5 Canvas 2D Context',
      'Physics Engine': 'Custom Angular Deceleration Easing Algorithm',
      'State Handling': 'Local Storage Participant & Winner Persistence',
      'Features': 'Shuffle, Alphabetical Sort, Winner Removal, CSV Export',
      'Visual Effects': 'Multi-color Wedge Palette & Dynamic Confetti Layer'
    },
    problem: 'Community webinars and offline meetups need a transparent, engaging, and customizable raffle drawing tool that does not reload or require third-party logins.',
    solution: 'Created an event-driven JavaScript web app with custom Canvas arc rendering, keyboard shortcuts (Space to spin), animated winner dialog, and participant list management.',
    features: [
      'Smooth angular rotation with realistic deceleration physics',
      'Interactive editable participant textarea with instant wheel recalculation',
      'Shuffle and sort buttons for fair random distribution',
      'Automated confetti explosion and winner highlight modal',
      'Export and copy entries functionality for event organizers'
    ],
    github: 'https://github.com/Sagor-Sharif/Lucky-Draw-Wheel'
  }
];

// ---------------------------------------------------------------------------
// 2. DOM INITIALIZATION & EVENT BINDINGS
// ---------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  try {
    localStorage.removeItem('sagor_portfolio_theme');
    document.documentElement.removeAttribute('data-theme');
  } catch (e) {}

  initNavbar();
  renderProjectCards('all');
  initFilterTabs();
  initCaseStudyModal();
  initContactForm();
  initCopyEmail();
});

// ---------------------------------------------------------------------------
// 3. NAVBAR & SCROLL-SPY
// ---------------------------------------------------------------------------
function initNavbar() {
  const navbar = document.getElementById('mainNavbar');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

  // Sticky blur on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNavLink();
  });

  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // Active link scroll-spy
  function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }
}

// ---------------------------------------------------------------------------
// 4. PROJECT CARDS & FILTERING
// ---------------------------------------------------------------------------
function renderProjectCards(categoryFilter) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const filtered = categoryFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === categoryFilter);

  grid.innerHTML = '';

  filtered.forEach(project => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.id = `project-${project.id}`;

    const techTagsHtml = project.tech.slice(0, 4)
      .map(t => `<span class="project-tag">${t}</span>`)
      .join('');

    card.innerHTML = `
      <div class="project-card-header">
        <div class="project-meta-row">
          <span class="badge badge-amber">${project.categoryName}</span>
          <span class="badge badge-cyan">${project.badge}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
      </div>
      <div class="project-thumb">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <div class="project-thumb-overlay"></div>
      </div>
      <div class="project-body">
        <p class="project-desc">${project.summary}</p>
        <div class="project-tech-tags">
          ${techTagsHtml}
        </div>
        <div class="project-footer">
          <button class="btn btn-primary btn-sm view-case-study-btn" data-project-id="${project.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            Case Study
          </button>
          <div class="project-links">
            <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-icon-link" title="GitHub Repository">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  // Attach modal trigger listeners
  grid.querySelectorAll('.view-case-study-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-project-id');
      openCaseStudy(projId);
    });
  });
}

function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjectCards(cat);
    });
  });
}

// ---------------------------------------------------------------------------
// 5. CASE STUDY MODAL DIALOG
// ---------------------------------------------------------------------------
function initCaseStudyModal() {
  const modal = document.getElementById('caseStudyModal');
  const closeBtn = document.getElementById('closeModalBtn');

  if (!modal) return;

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.close();
    });
  }

  // Close when clicking on backdrop
  modal.addEventListener('click', (e) => {
    const dialogDimensions = modal.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      modal.close();
    }
  });
}

function openCaseStudy(projectId) {
  const project = PROJECTS_DATA.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('caseStudyModal');
  if (!modal) return;

  // Populate title & category
  document.getElementById('modalCategory').textContent = project.categoryName;
  document.getElementById('modalTitle').textContent = project.title;

  // Build specs rows
  let specsRows = '';
  for (const [key, val] of Object.entries(project.specs)) {
    specsRows += `<tr><th>${key}</th><td>${val}</td></tr>`;
  }

  // Build feature bullets
  const featuresHtml = project.features
    .map(f => `<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>${f}</li>`)
    .join('');

  // Build body
  const body = document.getElementById('modalBody');
  body.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="dialog-hero-image">
    
    <div class="dialog-section-block">
      <h4>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
        Executive Summary
      </h4>
      <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-muted);">${project.subtitle}. ${project.summary}</p>
    </div>

    <div class="dialog-section-block">
      <h4>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        Problem Statement
      </h4>
      <p style="line-height: 1.7; color: var(--text-muted);">${project.problem}</p>
    </div>

    <div class="dialog-section-block">
      <h4>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
        Engineering Implementation & Architecture
      </h4>
      <p style="line-height: 1.7; color: var(--text-muted); margin-bottom: 1.25rem;">${project.solution}</p>
      
      <table class="dialog-specs-table">
        <tbody>
          ${specsRows}
        </tbody>
      </table>
    </div>

    <div class="dialog-section-block">
      <h4>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
        Key Technical Capabilities & Outcomes
      </h4>
      <ul class="dialog-features-list">
        ${featuresHtml}
      </ul>
    </div>

    <div class="dialog-actions">
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        View Source Code on GitHub
      </a>
      <button class="btn btn-secondary" onclick="document.getElementById('caseStudyModal').close()">
        Close Window
      </button>
    </div>
  `;

  modal.showModal();
}

// ---------------------------------------------------------------------------
// 6. CONTACT FORM & TOAST NOTIFICATION
// ---------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const message = document.getElementById('senderMessage').value.trim();

    if (!name || !email || !message) {
      showToast('Please fill in all fields before sending.', 'error');
      return;
    }

    // Simulate sending
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = 'Transmitting Message...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      form.reset();
      showToast('Thank you, ' + name + '! Your message has been received.', 'success');
    }, 900);
  });
}

function initCopyEmail() {
  const copyBtn = document.getElementById('copyEmailBtn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'sagorsharif.cse@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Email copied to clipboard: ' + email, 'success');
    }).catch(() => {
      showToast('Contact: ' + email, 'info');
    });
  });
}

function showToast(message, type = 'success') {
  const toast = document.getElementById('toastNotification');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 4000);
}
