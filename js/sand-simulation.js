/**
 * sand-simulation.js
 * Interactive Digital Sand Hourglass simulation representing Sagor Sharif's
 * Arduino + MPU6050 + Dual 8x8 RGB LED Matrix Project.
 */

(function () {
  const canvas = document.getElementById('sandCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const flipBtn = document.getElementById('flipSandBtn');
  const resetBtn = document.getElementById('resetSandBtn');
  const housing = document.querySelector('.matrix-display-housing');
  const countdownEl = document.getElementById('sandCountdown');
  const presetBtns = document.querySelectorAll('.preset-btn');

  // Matrix Configuration
  const COLS = 8;
  const ROWS_TOP = 8;
  const ROWS_BOTTOM = 8;
  const TOTAL_ROWS = 16;
  const CELL_SIZE = 18;
  const CELL_GAP = 5;
  const NECK_GAP = 14;

  const CANVAS_WIDTH = COLS * CELL_SIZE + (COLS - 1) * CELL_GAP;
  const CANVAS_HEIGHT = TOTAL_ROWS * CELL_SIZE + (TOTAL_ROWS - 2) * CELL_GAP + NECK_GAP;

  canvas.width = CANVAS_WIDTH * window.devicePixelRatio;
  canvas.height = CANVAS_HEIGHT * window.devicePixelRatio;
  canvas.style.width = `${CANVAS_WIDTH}px`;
  canvas.style.height = `${CANVAS_HEIGHT}px`;
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

  // State: grid[r][c] = 0 (empty) or 1 (sand particle)
  let grid = Array(TOTAL_ROWS).fill(null).map(() => Array(COLS).fill(0));
  let isFlipped = false;
  let timerDuration = 30; // seconds
  let remainingSeconds = 30;
  let timerInterval = null;
  let tickCounter = 0;
  let flowRate = 8; // ticks per grain dropped

  function initSand() {
    grid = Array(TOTAL_ROWS).fill(null).map(() => Array(COLS).fill(0));

    // Fill top matrix completely (64 grains)
    for (let r = 0; r < ROWS_TOP; r++) {
      for (let c = 0; c < COLS; c++) {
        grid[r][c] = 1;
      }
    }

    remainingSeconds = timerDuration;
    updateReadout();
  }

  function updateReadout() {
    if (countdownEl) {
      const mins = Math.floor(remainingSeconds / 60).toString().padStart(2, '0');
      const secs = (remainingSeconds % 60).toString().padStart(2, '0');
      countdownEl.textContent = `T-MINUS: ${mins}:${secs} | ACTIVE SENSORS: OK`;
    }
  }

  // Physics update step
  function updatePhysics() {
    tickCounter++;

    // 1. Move grains inside top matrix toward center neck (r: 7, c: 3 or 4)
    if (tickCounter % flowRate === 0) {
      // Find candidate grain in top matrix to drop
      let dropped = false;

      // Look at bottom row of top matrix near neck
      for (let c of [3, 4, 2, 5, 1, 6, 0, 7]) {
        if (grid[7][c] === 1 && grid[8][3] === 0) {
          grid[7][c] = 0;
          grid[8][3] = 1; // enters bottom matrix neck
          dropped = true;
          break;
        }
      }

      // If no grain at the neck, cascade grains downward in top matrix
      if (!dropped) {
        for (let r = 6; r >= 0; r--) {
          for (let c = 0; c < COLS; c++) {
            if (grid[r][c] === 1) {
              if (grid[r + 1][c] === 0) {
                grid[r + 1][c] = 1;
                grid[r][c] = 0;
              } else if (c > 0 && grid[r + 1][c - 1] === 0) {
                grid[r + 1][c - 1] = 1;
                grid[r][c] = 0;
              } else if (c < COLS - 1 && grid[r + 1][c + 1] === 0) {
                grid[r + 1][c + 1] = 1;
                grid[r][c] = 0;
              }
            }
          }
        }
      }
    }

    // 2. Settle grains inside bottom matrix (falling sand cellular automaton)
    for (let r = TOTAL_ROWS - 2; r >= 8; r--) {
      for (let c = 0; c < COLS; c++) {
        if (grid[r][c] === 1) {
          // Direct down
          if (grid[r + 1][c] === 0) {
            grid[r + 1][c] = 1;
            grid[r][c] = 0;
          }
          // Diagonal left or right randomly for natural pyramid spreading
          else {
            const preferLeft = Math.random() > 0.5;
            const dir1 = preferLeft ? -1 : 1;
            const dir2 = preferLeft ? 1 : -1;

            if (c + dir1 >= 0 && c + dir1 < COLS && grid[r + 1][c + dir1] === 0) {
              grid[r + 1][c + dir1] = 1;
              grid[r][c] = 0;
            } else if (c + dir2 >= 0 && c + dir2 < COLS && grid[r + 1][c + dir2] === 0) {
              grid[r + 1][c + dir2] = 1;
              grid[r][c] = 0;
            }
          }
        }
      }
    }
  }

  // Draw the two 8x8 LED displays
  function draw() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    for (let r = 0; r < TOTAL_ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        const isTopMatrix = r < ROWS_TOP;
        const x = c * (CELL_SIZE + CELL_GAP);
        const y = isTopMatrix
          ? r * (CELL_SIZE + CELL_GAP)
          : ROWS_TOP * (CELL_SIZE + CELL_GAP) + NECK_GAP + (r - ROWS_TOP) * (CELL_SIZE + CELL_GAP);

        const isFilled = grid[r][c] === 1;

        // Draw LED housing socket
        ctx.beginPath();
        ctx.roundRect(x, y, CELL_SIZE, CELL_SIZE, 3);
        ctx.fillStyle = isFilled
          ? (isTopMatrix ? '#f59e0b' : '#00f2fe')
          : 'rgba(255, 255, 255, 0.04)';
        ctx.fill();

        // If lit, draw glowing diode center
        if (isFilled) {
          ctx.beginPath();
          ctx.roundRect(x + 2, y + 2, CELL_SIZE - 4, CELL_SIZE - 4, 2);
          ctx.fillStyle = isTopMatrix ? '#fbbf24' : '#67e8f9';
          ctx.fill();

          // Soft bloom
          ctx.shadowColor = isTopMatrix ? 'rgba(245, 158, 11, 0.7)' : 'rgba(0, 242, 254, 0.7)';
          ctx.shadowBlur = 6;
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // Draw neck line indicators
    const neckY = ROWS_TOP * (CELL_SIZE + CELL_GAP) + NECK_GAP / 2 - 1;
    ctx.beginPath();
    ctx.moveTo(CANVAS_WIDTH * 0.35, neckY);
    ctx.lineTo(CANVAS_WIDTH * 0.65, neckY);
    ctx.strokeStyle = 'rgba(0, 242, 254, 0.3)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  function loop() {
    updatePhysics();
    draw();
    requestAnimationFrame(loop);
  }

  function flipHourglass() {
    isFlipped = !isFlipped;
    if (housing) {
      housing.classList.toggle('flipping');
    }

    // Flip grid state top-to-bottom
    setTimeout(() => {
      const newGrid = Array(TOTAL_ROWS).fill(null).map(() => Array(COLS).fill(0));
      for (let r = 0; r < TOTAL_ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          newGrid[TOTAL_ROWS - 1 - r][c] = grid[r][c];
        }
      }
      grid = newGrid;
      remainingSeconds = timerDuration;
      updateReadout();
    }, 300);
  }

  // Timer logic
  function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
      if (remainingSeconds > 0) {
        remainingSeconds--;
        updateReadout();
      }
    }, 1000);
  }

  // Preset button listeners
  presetBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      presetBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const secs = parseInt(btn.dataset.seconds, 10) || 30;
      timerDuration = secs;
      // Adjust sand flow speed relative to duration
      flowRate = Math.max(2, Math.round(secs / 4));
      initSand();
    });
  });

  if (flipBtn) flipBtn.addEventListener('click', flipHourglass);
  if (resetBtn) resetBtn.addEventListener('click', initSand);

  // Initialize
  initSand();
  startTimer();
  loop();
})();
