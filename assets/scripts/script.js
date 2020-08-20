// variables
var timer;
var time;
var result;
var i = 0;
var headerDiv = document.getElementById("header");
var highScoreDiv = document.getElementById("highscore");
var startQuizDiv = document.getElementById("start");
var quizDiv = document.getElementById("quiz");
var resultDiv = document.getElementById("result");
var scoreDiv = document.getElementById("score");
var start = document.getElementById("startButton");
var viewScore = document.getElementById("header");
var back = document.getElementById("back");
var result = document.getElementById("correctResult");
var wrong = document.getElementById("wrongResult");
var question = document.createElement("h2");
var correctAnswer1 = document.createElement("button");
var wrongAnswer1 = document.createElement("button");
var wrongAnswer2 = document.createElement("button");
var wrongAnswer3 = document.createElement("button");

var quiz1 = { question: "Commonly used data types DO NOT include", answer: "alerts", wrong: ["string", "booleans", "numbers"] }
var quiz2 = { question: "The condition in an if/else statement is enclosed with _________.", answer: "parenthesis", wrong: ["quotes", "curly brackets", "square brackets"] }
var quiz3 = { question: "Arrays in JavaScript can be used to store _________.", answer: "all of the above", wrong: ["numbers and strings", "other arrays", "booleans"] };
var quiz = [quiz1,quiz2,quiz3];

//Event Listeners
start.addEventListener("click", startQuiz);
viewScore.addEventListener("click", showHighscores)
back.addEventListener("click", showHome)
correctAnswer1.addEventListener("click", correctResult);
wrongAnswer1.addEventListener("click", wrongResult);
wrongAnswer2.addEventListener("click", wrongResult);
wrongAnswer3.addEventListener("click", wrongResult)

//on Load conditions
highScoreDiv.style.display = "none";
headerDiv.style.display = "none";
quizDiv.style.display = "none";
resultDiv.style.display = "none";
scoreDiv.style.display = "none";

// Event Handlers
function startQuiz() {
    headerDiv.style.display = "flex";
    startQuizDiv.style.display = "none";
    quizDiv.style.display = "flex";
    resultDiv.style.display = "flex";
    // correct.style.display = "none";
    // wrong.style.display = "none";
    displayQuiz();
    timer = setInterval(myTimer, 1000);
    time = 200;//set quiz timer
}//show quiz div
function showHome() {
    headerDiv.style.display = "none";
    startQuizDiv.style.display = "flex";
    highScoreDiv.style.display = "none"
    resultDiv.style.display = "none";
}//show home div
function showHighscores() {
    headerDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    quizDiv.style.display = "none"
    resultDiv.style.display = "none";
    highScoreDiv.style.display = "block"
    time = 200;
    clearInterval(timer);
}//show highScore div
function myTimer() {
    if (time === -1) {
        clearInterval(timer);
    }
    else {
        document.getElementById("timer").innerHTML = `Time: ${time}`;
        time--;
    }

}
function displayQuiz() {
    if (i === quiz.length) {
        endQuiz();
    }
    else {
        resultDiv.style.display = "flex";
    result.innerHTML = "";
    // if (i === quiz.length) {
    //     i = 0;
    // }

        var rand = Math.floor(Math.random()) * 4;
        var answerArray = [correctAnswer1, wrongAnswer1, wrongAnswer2, wrongAnswer3];
    // debugger;
        correctAnswer1.innerHTML = `${quiz[i].answer}`;
        wrongAnswer1.innerHTML = `${quiz[i].wrong[0]}`;
        wrongAnswer2.innerHTML = `${quiz[i].wrong[1]}`;
        wrongAnswer3.innerHTML = `${quiz[i].wrong[2]}`;
        question.innerHTML = quiz[i].question;
        quizDiv.append(question);
        for (var x = answerArray.length - 1; x > 0; x--) {
            const j = Math.floor(Math.random() * x)
            const temp = answerArray[x]
            answerArray[x] = answerArray[j]
            answerArray[j] = temp
        }
        for (var x = 0; x < answerArray.length; x++){
            answerArray[x].innerHTML = `${x+1}. ${answerArray[x].innerHTML}`;
            quizDiv.appendChild(answerArray[x]);
        }
        // quizDiv.append(correctAnswer1);
        // quizDiv.append(wrongAnswer1);
        // quizDiv.append(wrongAnswer2);
        // quizDiv.append(wrongAnswer3);
        // for (var x = 0; x < quiz.wrong.length; x++){
        //     var
        // }
    }
    

}
function correctResult() {
    // debugger;
    // if (i === quiz.length ) {
    //     endQuiz();
    // }
    // else {
        result.innerHTML = "Correct!"
        i++;
        var timeout = setTimeout(displayQuiz, 1000);
    // }


}

function wrongResult() {
    // if (i === quiz.length ) {
    //     endQuiz();
    // }
    // else {
        result.innerHTML = "Wrong!";
    i++;
    time -= 10;
       var timeout=setTimeout(displayQuiz, 1000);
    // }
}

function endQuiz() {
    headerDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    quizDiv.style.display = "none";
    resultDiv.style.display = "none";
    scoreDiv.style.display = "flex";


}