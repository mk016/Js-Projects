const form = document.querySelector('form');
/* form summation 2 types 
    1. get
    2. post
    */


form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = 'Please provide a valid height.';
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = 'Please provide a valid weight.';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // Show the result
    results.innerHTML = `<span>BMI: ${bmi}</span>`;

    // BMI Weight Guide
    if (bmi < 18.6) {
      results.innerHTML=('Underweight');// i use results.innerHTML for printing result
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML =('Normal Range');
    } else {
      results.innerHTML =('Overweight');
    }
  }
});
