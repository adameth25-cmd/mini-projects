document.getElementById("startBtn").addEventListener("click", () => {
  let score = 0;

  let sleep = Number(prompt("How many hours do you sleep per day?"));
  if (sleep >= 4) score++;

  let music = prompt("Do you enjoy music? (yes/no)").toLowerCase();
  if (music === "yes") score++;

  let tired = prompt("Do you get tired? (yes/no)").toLowerCase();
  if (tired === "yes") score++;

  let resultBox = document.getElementById("result");

  if (score >= 3) {
    resultBox.textContent = "You are definitely human!";
    resultBox.style.color = "green";
  } else if (score >= 1) {
    resultBox.textContent = "Half human, half robot!";
    resultBox.style.color = "orange";
  } else {
    resultBox.textContent = "Robot detected!";
    resultBox.style.color = "red";
  } 
});
