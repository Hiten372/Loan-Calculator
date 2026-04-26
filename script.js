document.addEventListener("DOMContentLoaded", function () {
  //summary of the loan

  const monthlyPayment = document.getElementById("monthly");
  const totalPayment = document.getElementById("total");
  const totalInterestPayment = document.getElementById("totalInterest");

  // calculate the loan
  function calculateLoan() {
    const amount = parseFloat(document.getElementById("amount").value);
    const interest =
      parseFloat(document.getElementById("interest").value) / 100 / 12;
    const years = parseFloat(document.getElementById("years").value) * 12;
    if (isNaN(amount) || isNaN(interest) || isNaN(years)) {
      alert("Please enter valid numbers for all fields.");
      return;
    }
    // Calculate monthly payment using the formula: M = P[r(1+r)^n]/[(1+r)^n-1]
    const x = Math.pow(1 + interest, years);
    const monthly = (amount * x * interest) / (x - 1);
    // Display results if monthly payment is a finite number
    if (isFinite(monthly)) {
      monthlyPayment.textContent = monthly.toFixed(2);
      totalPayment.textContent = (monthly * years).toFixed(2);
      totalInterestPayment.textContent = (monthly * years - amount).toFixed(2);
    }
  }
  document
    .getElementById("calculateBtn")
    .addEventListener("click", calculateLoan);
});
