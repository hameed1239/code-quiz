var timer;
var time = 200;
var headerDiv = document.getElementById("header");
var highScoreDiv = document.getElementById("highscore");
var startQuizDiv = document.getElementById("start");
var quizDiv = document.getElementById("quiz");
var start = document.getElementById("startButton");
var quiz1 = { question: "Commonly used data types DO NOT include", answer: "alerts", wrong: ["string", "booleans", "numbers"] }
var quiz2 = { question: "The condition in an if/else statement is enclosed with _________.", answer: "parenthesis", wrong: ["quotes", "curly brackets", "square brackets"] }
var quiz = [quiz1,quiz2];
start.addEventListener("click", startQuiz);
highScoreDiv.style.display = "none";
headerDiv.style.display = "none";
function startQuiz() {
    headerDiv.style.display = "flex";
    startQuizDiv.style.display = "none";
    timer = setInterval(myTimer, 1000);
}
function myTimer() {
    if (time === 0) {
        clearInterval(timer);
    }
    else {
        document.getElementById("timer").innerHTML = `Time: ${time}`;
        time--;    
    }
    
}