// Get the form element
var form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Check if the height and weight fields are empty
  if (document.getElementById('height').value === '') {
    alert('Please enter your height');
    return;
  }

  if (document.getElementById('weight').value === '') {
    alert('Please enter your weight');
    return;
  }

  // Get the height and weight values from the form
  var height = parseFloat(document.getElementById('height').value);
  var weight = parseFloat(document.getElementById('weight').value);

  // Calculate the BMI
  var bmi = weight / ((height / 100) * (height / 100));

  // Round the BMI to two decimal places
  bmi = bmi.toFixed(2);

  // Display the BMI and status
  document.getElementById('bmi').textContent = bmi;
  if (bmi < 18.5) {
    document.getElementById('status').textContent = 'Underweight';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById('status').textContent = 'Normal';
  } else if (bmi >= 25 && bmi <= 29.9) {
    document.getElementById('status').textContent = 'Overweight';
  } else {
    document.getElementById('status').textContent = 'Obese';
  }

  // Show the result
  document.querySelector('.result').style.display = 'block';
});
