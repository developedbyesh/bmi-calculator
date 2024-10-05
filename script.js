const weightInput = document.getElementById('weight');
const heightInput = document.getElementById('height');
const calculateBMIButton = document.getElementById('calculateBMI');
const bmiResult = document.getElementById('bmiResult');
const bmiFeedback = document.getElementById('bmiFeedback');

function calculateBMI() {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value);
  if (isNaN(weight) || isNaN(height) || height <= 0 || weight <= 0) {
    alert('Please enter valid numbers for height and weight');
    return;
  }
  const bmi = weight / (height * height);
  bmiResult.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
  if (bmi < 18.5) {
    bmiFeedback.textContent = 'You are underweight';
    bmiFeedback.className = 'underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiFeedback.textContent = 'You have a normal weight';
    bmiFeedback.className = 'normal';
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiFeedback.textContent = 'You are overweight';
    bmiFeedback.className = 'overweight';
  } else {
    bmiFeedback.textContent = 'You are obese';
    bmiFeedback.className = 'obese';
  }
}

calculateBMIButton.addEventListener('click', calculateBMI);
