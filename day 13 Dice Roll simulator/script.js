const dieEl = document.getElementById('dice');
const resultEl = document.getElementById('result');
const rollBtn = document.getElementById('rollBtn');
const rollAgainBtn = document.getElementById('rollAgainBtn');

// Unicode dice faces ⚀ (U+2680) to ⚅ (U+2685)
const faces = ['\u2680','\u2681','\u2682','\u2683','\u2684','\u2685'];

function rollOnce() {
  const n = Math.floor(Math.random() * 6); // 0..5
  dieEl.textContent = faces[n];
  resultEl.textContent = `You rolled a ${n + 1}!`;
  // add quick animation
  dieEl.classList.remove('roll');
  void dieEl.offsetWidth; // force reflow
  dieEl.classList.add('roll');
  return n + 1;
}

rollBtn.addEventListener('click', () => {
  rollOnce();
});

rollAgainBtn.addEventListener('click', async () => {
  resultEl.textContent = 'Rolling 10 times…';
  for (let i = 0; i < 10; i++) {
    rollOnce();
    // small delay for animation effect
    await new Promise(r => setTimeout(r, 180));
  }
  resultEl.textContent = 'Done — try again!';
});
