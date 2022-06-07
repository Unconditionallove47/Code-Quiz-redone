//MAKE SURE YOU HAVE OPTIONS AND PROMPTS SET UP PROPERLY
var highscoreBtn = document.querySelector(".highscores");

var startBtn = document.querySelector(".start");

var timerA = document.querySelector("#timer");

var scoreList = document.querySelector("#scoreList");

var quizQuestion = document.querySelector("#question");

var quizPrompts = document.querySelector("#qb");

var option1 = document.createElement("li");

var option2 = document.createElement("li");

var option3 = document.createElement("li");

var option4 = document.createElement("li");

var choices = document.querySelector("#choices");
//HS AND LB NOT WORKING
var highscores = [];
var leaderboard = [];
var correctAnswer = [];

//PSEUDO CODE BELOW
//text below quiz main menu explained what to do
//when start button is clicked, start button diapears and quiz question pops up
//timer starts when first quiz question pops up
//WHen answer is chosen, it is checked and wrong(time is deducted) or correct is displayed at the bottom
//After answer is chosen, next question set is displayed on screen
//after final question score screen is displayed(prompt for user initials)
//store final score
//after initials are entered, high scores are displayed
//remember button for clear high score
//high score button is available during game in corner
//time countdown in corner**
//Go back button resets page
//timer needs work on question right and wrong
//have dedicated div and p tags for questions and answers that is updated by JS(leave divs and p tags empty in html)
//iterator vairable to keep track of current array location
//when moving to next question increment variable index

var questionsArray = [
  {
    question: "What year New Mexico become a state?",
    options: ["1995", "1915", "1950", "1912"],
  },
  {
    question: "What is the population of New Mexico",
    options: ["2.097M", "35m", "300k", "One single man and woman"],
  },
  {
    question: "What is the highest point in new Mexico",
    options: ["Durango", "Albuquerque", "Carlsbad Caverns", "Wheeler Park"],
  },
  {
    question: "Where is New Mexico located?",
    options: ["Southwest US", "East coast", "Below Idaho", "Direct Center"],
  },
  {
    question: "What is New Mexico's flag symbol",
    options: ["Sun", "A Circle and lines", "Zia", "Pentagram"],
  },
];
var answers = ["1912", "2.097M", "Wheeler Park", "Southwest US", "Zia"];
var timeLeft = " ";
let i = 0;
var currentScore = "";

function nextUp() {
  if (i < 5) {
    quizQuestion.textContent = questionsArray[i].question;
    quizPrompts.setAttribute("style", "display:flex");
    quizQuestion.setAttribute("style", "display:block");
    quizQuestion.textContent = questionsArray[i].question;
    option1.textContent = questionsArray[i].options[0];
    option2.textContent = questionsArray[i].options[1];
    option3.textContent = questionsArray[i].options[2];
    option4.textContent = questionsArray[i].options[3];
    choices.append(option1);
    choices.append(option2);
    choices.append(option3);
    choices.append(option4);

  } else {
    var playerScore = prompt("Input initials!");
    var userScore = JSON.parse(localStorage.getItem("Top Scores"))|| [];
    if (playerScore.length != 2) {
      alert("First and last initials only!");
      nextUp();
    } else {
      userScore.push(playerScore);
      localStorage.setItem("Top Scores", JSON.stringify(userScore));
    }
    Score = timeLeft + 1;
    // localStorage.setItem("Top Scores",currentScore)
    console.log(currentScore)
    clearInterval(timeInterval)
    highscores.push(Score);
  }
}
var timeInterval = " ";
function timerCount() {
  timeInterval = setInterval(function () {
    if (timeLeft > 1) {

      timerA.textContent = timeLeft + " seconds remaining";

      timeLeft--;

    } else if (timeLeft === 1) {

      timerA.textContent = timeLeft + " second remaining";

      timeLeft--;

    } else if (timeLeft === 0) {

      timerA.textContent = timeLeft + " seconds remaining";

      timeLeft--;

    } else {
      timerA.textContent = "";

      clearInterval(timeInterval);
      

      confirm("Nice try! Wanna play again?");
    }
  }, 1000);
}
function countdown() {
  timerCount();
  timeLeft = 150;
  startBtn.setAttribute("style", "display:none");
  nextUp();
}

startBtn.addEventListener("click", countdown);

choices.addEventListener("click", function (event) {
  var userInput = event.target.innerHTML;
  if (userInput === answers[i]) {
    i++;
    nextUp();
  } else if (userInput !== answers[i]) {
    timeLeft = timeLeft - 10;
  }
});
//NEEDS REWORKING
highscoreBtn.addEventListener("click", function () {
  console.log("clicked");
  leaderboard = JSON.parse(localStorage.getItem("Top Scores")) || [];
  alert(leaderboard);
});
