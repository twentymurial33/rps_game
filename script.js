function computerPlay() {
  let rpsChoices = ["Rock", "Paper", "Scissors"];
  let computerChoice = rpsChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function playRound(playerChoice, computerChoice) {
  let score;
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    score = 1;
  } else {
    score = -1;
  }
  return score;
}

function showResult(score, playerChoice, computerChoice) {
  let resultDiv = document.getElementById("result");
  switch (score) {
    case -1:
      resultDiv.innerText = `You Lose!`;
      break;
    case 0:
      resultDiv.innerText = `It's a Draw!`;
      break;
    case 1:
      resultDiv.innerText = `You Win!`;
      break;
  }
  let playerScore = document.getElementById("player-score");
  playerScore.innerText = `${Number(playerScore.innerText) + score}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice = computerPlay();
  const score = playRound(playerChoice.value, computerChoice);
  showResult(score, playerChoice.value, computerChoice);
}

function playGame() {
  let rpsButtons = document.querySelectorAll(".rpsButton");
  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton);
  });
  let endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame();
}

function endGame() {
  let playerScore = document.getElementById("player-score");
  let result = document.getElementById("result");
  playerScore.innerText = "";
  hands.innerText = "";
  result.innerText = "";
}

playGame();
