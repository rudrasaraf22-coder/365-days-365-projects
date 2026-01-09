document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bmiForm');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultArea = document.getElementById('resultArea');
    const bmiValueEl = document.getElementById('bmiValue');
    const bmiStatusEl = document.getElementById('bmiStatus');
    const bmiDescEl = document.getElementById('bmiDescription');
    const gaugeMarker = document.getElementById('gaugeMarker');
    const errorMsg = document.getElementById('errorMsg');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateBMI();
    });

    function calculateBMI() {
        // Reset previous error
        errorMsg.style.opacity = '0';
        
        // Get values
        const heightCm = parseFloat(heightInput.value);
        const weightKg = parseFloat(weightInput.value);

        // Validation
        if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
            showError('Please enter valid positive numbers for both fields.');
            return;
        }

        // Calculate: BMI = kg / (m^2)
        const heightM = heightCm / 100;
        const bmi = weightKg / (heightM * heightM);
        const bmiRounded = bmi.toFixed(1);

        // Determine Category
        const categoryData = getBMICategory(bmi);

        // Update UI
        updateResultUI(bmiRounded, categoryData);
    }

    function getBMICategory(bmi) {
        if (bmi < 18.5) {
            return {
                status: 'Underweight',
                color: '#4299e1', // Blue
                desc: 'You are underweight. Consider consulting a nutritionist to plan a healthy diet.',
                percentage: Math.max((bmi / 18.5) * 25, 0) // Map to gauge approx
            };
        } else if (bmi >= 18.5 && bmi < 24.9) {
            return {
                status: 'Normal Weight',
                color: '#48bb78', // Green
                desc: 'Great job! You have a healthy body weight. Keep it up!',
                percentage: 25 + ((bmi - 18.5) / (24.9 - 18.5)) * 25
            };
        } else if (bmi >= 25 && bmi < 29.9) {
            return {
                status: 'Overweight',
                color: '#ecc94b', // Yellow/Orange
                desc: 'You are slightly overweight. Regular exercise could help improve your health.',
                percentage: 50 + ((bmi - 25) / (29.9 - 25)) * 25
            };
        } else {
            return {
                status: 'Obese',
                color: '#f56565', // Red
                desc: 'Your health may be at risk. It is recommended to seek advice from a healthcare specialist.',
                percentage: Math.min(75 + ((bmi - 30) / 15) * 25, 100)
            };
        }
    }

    function updateResultUI(bmi, data) {
        // Update Text
        bmiValueEl.textContent = bmi;
        bmiStatusEl.textContent = data.status;
        bmiStatusEl.style.backgroundColor = data.color;
        bmiDescEl.textContent = data.desc;

        // Update Gauge Marker Position
        // Clamp percentage between 2% and 98% so marker stays visible
        const visualPercent = Math.max(Math.min(data.percentage, 98), 2);
        gaugeMarker.style.left = `${visualPercent}%`;

        // Reveal Result Area
        resultArea.classList.remove('hidden');
        // Small timeout to allow display:block to apply before opacity transition
        setTimeout(() => {
            resultArea.classList.add('visible');
        }, 10);
    }

    function showError(message) {
        errorMsg.textContent = message;
        errorMsg.style.opacity = '1';
        resultArea.classList.remove('visible');
        resultArea.classList.add('hidden');
    }
});
