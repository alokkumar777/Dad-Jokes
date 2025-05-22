const scoreCard = document.getElementById("score-card");
const playerOneScore = document.querySelector(".left-score");
const playerTwoScore = document.querySelector(".right-score");
const playerOneBtn = document.getElementById("btn1");
const playerTwoBtn = document.getElementById("btn2");
const resetBtn = document.getElementById("btn3");
const gameOf = document.getElementById("my-select");

let countPlayerOne = 0;
let countPlayerTwo = 0;

function updateGameStatus() {
  const selectedGameScore = parseInt(gameOf.value);
  if (
    selectedGameScore == countPlayerOne ||
    selectedGameScore == countPlayerTwo
  ) {
    playerOneBtn.setAttribute("disabled", "true");
    playerTwoBtn.setAttribute("disabled", "true");
    if (countPlayerOne > countPlayerTwo) {
      playerOneScore.classList.add("text-success");
      playerTwoScore.classList.add("text-danger");
    } else {
      playerOneScore.classList.add("text-danger");
      playerTwoScore.classList.add("text-success");
    }
  }
}

playerOneBtn.addEventListener("click", () => {
  countPlayerOne++;
  playerOneScore.innerHTML = countPlayerOne;
  updateGameStatus();
});

playerTwoBtn.addEventListener("click", () => {
  countPlayerTwo++;
  playerTwoScore.innerHTML = countPlayerTwo;
  updateGameStatus();
});

resetBtn.addEventListener("click", () => {
  countPlayerOne = 0;
  countPlayerTwo = 0;
  playerOneScore.innerHTML = 0;
  playerTwoScore.innerHTML = 0;
  gameOf.value = "select nothing";
  playerOneBtn.removeAttribute("disabled");
  playerTwoBtn.removeAttribute("disabled");
  playerOneScore.classList.remove("text-success", "text-danger");
  playerTwoScore.classList.remove("text-success", "text-danger");
});
