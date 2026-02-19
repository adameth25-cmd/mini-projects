let lastDecision = null;

document.getElementById("budgetForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let budget = Number(document.getElementById("budget").value);
  let price = Number(document.getElementById("price").value);
  let savings = Number(document.getElementById("savings").value) || 0;

  let resultBox = document.getElementById("result");
  let currentDecision;

  if (budget + savings >= price) {
    currentDecision = "affordable";
  } else {
    currentDecision = "not affordable";
  }

  // UPDATES IF DECISION IS CHANGED
  if (currentDecision !== lastDecision) {
    if (currentDecision === "affordable") {
      resultBox.textContent = "You can afford it!";
      resultBox.style.color = "green";
    } else {
      resultBox.textContent = "Not enough budget.";
      resultBox.style.color = "red";
    }
    lastDecision = currentDecision; // WILL UPDATE THIS FOR STORED DECISION
  } else {
    // DEFFERENTIATES WHEN DECISION IS STILL THE SAME OR LOOK LIKE
    resultBox.textContent = `Still ${currentDecision}.`;
    resultBox.style.color = "#555";
  }
});
