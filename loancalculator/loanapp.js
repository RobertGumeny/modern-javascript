document.getElementById('loan-form').addEventListener('submit', function (e) {
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

function calculateResults() {
  console.log('Calculating...');
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.innerText = monthly.toFixed(2);
    totalPayment.innerText = (monthly * calculatedPayments).toFixed(2);
    totalInterest.innerText = (
      monthly * calculatedPayments -
      principal
    ).toFixed(2);

    document.getElementById('results').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
  } else {
    showError('Please make sure all fields are filled out!');
  }
}

function showError(error) {
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'none';
  const errorMessage = document.createElement('li');

  const messageDisplay = document.getElementById('error-message');

  errorMessage.className = 'collection-item red lighten-2 alert';

  errorMessage.appendChild(document.createTextNode(error));
  messageDisplay.style.display = 'block';
  messageDisplay.appendChild(errorMessage);

  setTimeout(clearError, 3000);
}

function clearError() {
  document.getElementById('error-message').style.display = 'none';
  document.querySelector('.alert').remove();
}
