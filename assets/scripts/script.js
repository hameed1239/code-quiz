// variables
var timer;
var time;
var headerDiv = document.getElementById("header");
var highScoreDiv = document.getElementById("highscore");
var startQuizDiv = document.getElementById("start");
var quizDiv = document.getElementById("quiz");
var start = document.getElementById("startButton");
var viewScore = document.getElementById("header");
var back = document.getElementById("back");
var quiz1 = { question: "Commonly used data types DO NOT include", answer: "alerts", wrong: ["string", "booleans", "numbers"] }
var quiz2 = { question: "The condition in an if/else statement is enclosed with _________.", answer: "parenthesis", wrong: ["quotes", "curly brackets", "square brackets"] }
var quiz3 = { question: "Arrays in JavaScript can be used to store _________.", answer: "all of the above", wrong: ["numbers and strings", "other arrays", "booleans"] };
var quiz = [quiz1,quiz2];

//Event Listeners
start.addEventListener("click", startQuiz);
viewScore.addEventListener("click", showHighscores)
back.addEventListener("click", showHome)

//on Load conditions
highScoreDiv.style.display = "none";
headerDiv.style.display = "none";
quizDiv.style.display = "none";

// Event Handlers
function startQuiz() {
    headerDiv.style.display = "flex";
    startQuizDiv.style.display = "none";
    quizDiv.style.display = "flex";
    timer = setInterval(myTimer, 1000);
    time = 20;
}
function showHome() {
    headerDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    highScoreDiv.style.display = "none"
}
function showHighscores() {
    headerDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    quizDiv.style.display = "none"
    highScoreDiv.style.display = "block"
    time = 20;
    clearInterval(timer);
}
function myTimer() {
    if (time === -1) {
        clearInterval(timer);
    }
    else {
        document.getElementById("timer").innerHTML = `Time: ${time}`;
        time--;    
    }
    
}