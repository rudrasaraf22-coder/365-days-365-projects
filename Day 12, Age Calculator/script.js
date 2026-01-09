// Age Calculator — script.js
(function(){
  const dobInput = document.getElementById('dob');
  const calcBtn = document.getElementById('calc-btn');
  const clearBtn = document.getElementById('clear-btn');
  const resultSection = document.getElementById('result');
  const yearsEl = document.getElementById('years');
  const monthsEl = document.getElementById('months');
  const daysEl = document.getElementById('days');
  const notesEl = document.getElementById('notes');

  function showResult({years, months, days}, note = '') {
    yearsEl.textContent = years;
    monthsEl.textContent = months;
    daysEl.textContent = days;
    notesEl.textContent = note;
    resultSection.classList.remove('hidden');
  }

  function showError(message) {
    // simple inline error handling via notes
    yearsEl.textContent = '—';
    monthsEl.textContent = '—';
    daysEl.textContent = '—';
    notesEl.textContent = message;
    resultSection.classList.remove('hidden');
  }

  function clearResult(){
    resultSection.classList.add('hidden');
    yearsEl.textContent = '—';
    monthsEl.textContent = '—';
    daysEl.textContent = '—';
    notesEl.textContent = '';
  }

  function calculateAgeFromDOB(dobValue) {
    if (!dobValue) return { error: 'Please enter your date of birth.' };

    const birth = new Date(dobValue);
    const today = new Date();

    // normalize times to avoid timezone quirks
    birth.setHours(0,0,0,0);
    today.setHours(0,0,0,0);

    if (isNaN(birth.getTime())) return { error: 'Invalid date.' };
    if (birth > today) return { error: 'Date of birth cannot be in the future.' };

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      // borrow days from previous month
      const prevMonthLastDay = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += prevMonthLastDay;
      months -= 1;
    }

    if (months < 0) {
      months += 12;
      years -= 1;
    }

    return { years, months, days };
  }

  calcBtn.addEventListener('click', () => {
    const dob = dobInput.value;
    const res = calculateAgeFromDOB(dob);
    if (res.error) {
      showError(res.error);
    } else {
      showResult(res, `Calculated on ${new Date().toLocaleDateString()}`);
    }
  });

  // allow Enter to calculate when focused on the date input
  dobInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      calcBtn.click();
    }
  });

  clearBtn.addEventListener('click', () => {
    dobInput.value = '';
    clearResult();
    dobInput.focus();
  });

  // optional: calculate live when date is changed
  dobInput.addEventListener('change', () => {
    // small UX: auto-calc on change
    calcBtn.click();
  });
})();
