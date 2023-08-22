const question = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// changing stored string data to integer
let score = JSON.parse(localStorage.getItem("score"));
const correctAns = num1 * num2;

if (!score) {
  score = 0;
}
if (score < 0) {
  score = 0;
}
scoreEl.innerText = `score: ${score}`;
question.innerText = `What is ${num1} multiplied by ${num2} ?`;

// addEventListener to handle the submit click
formEl.addEventListener("submit", () => {
  const userAnswer = +inputEl.value;
  if (userAnswer === correctAns) {
    score++;
    updateLocalStorage();
  } else {
    score--;
    updateLocalStorage();
  }
});

// Storing in Local Storage
// local storage cant store integer so we use stringify to change it to string
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
