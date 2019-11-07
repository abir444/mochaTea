var user_selection = document.getElementById("user-selection");

var bot_selection = document.getElementById("bot-selection");

var pScore = document.getElementById("Uscore");
var cScore = document.getElementById("Bscore");

var playerScore = 0;
var comScore = 0;

function botSelection() {
  let x = Math.floor(Math.random() * 3);
  console.log(x);
  bot_selection.innerHTML = ["rock", "paper", "scessors"][x];
  return ["rock", "paper", "scessors"][x];
}

function rock() {
  let user = "rock";
  user_selection.innerHTML = "Player : " + user;
  let bot = botSelection();
  bot_selection.innerHTML = "coumputer :" + bot;
  compare(user, bot);
}

function paper() {
  let user = "paper";
  user_selection.innerHTML = "Player : " + user;
  let bot = botSelection();
  bot_selection.innerHTML = "coumputer :" + bot;
  compare(user, bot);
}

function scissors() {
  let user = "scessors";
  user_selection.innerHTML = "Player : " + user;
  let bot = botSelection();
  bot_selection.innerHTML = "coumputer :" + bot;
  compare(user, bot);
}

function compare(x1, y) {
  if (x1 === y) {
    pScore.innerHTML = "Player : " + playerScore;
    cScore.innerHTML = "coumputer :" + comScore;
    //alert("Toss again");
  } else if (x1 === "rock") {
    if (y === "paper") {
      comScore++;
      pScore.innerHTML = "Player : " + playerScore;
      cScore.innerHTML = "coumputer :" + comScore;
    } else {
      playerScore++;
      pScore.innerHTML = "Player : " + playerScore;
      cScore.innerHTML = "coumputer :" + comScore;
    }
  } else if (x1 === "paper") {
    if (y === "scessors") {
      comScore++;
      pScore.innerHTML = "Player : " + playerScore;
      cScore.innerHTML = "coumputer :" + comScore;
    } else {
      playerScore++;
      pScore.innerHTML = "Player : " + playerScore;
      cScore.innerHTML = "coumputer :" + comScore;
    }
  } else if (x1 === "scessors") {
    if (y === "rock") {
      comScore++;
      pScore.innerHTML = "Player : " + playerScore;
      cScore.innerHTML = "coumputer :" + comScore;
    } else {
      playerScore++;
      pScore.innerHTML = "Player : " + playerScore;
      cScore.innerHTML = "coumputer :" + comScore;
    }
  }
}

module.exports = {
  rock,
  paper,
  scissors,
  botSelection
}