var quiz = [
    {
        question: "1. To save data into localStorage, it must be in what format?",
        options: [
            "Object",
            "Array",
            "String",
            "Boolean"
        ],
        answer: "String"
    },
    {
        question: "2. Which of the following methods will convert an JavaScript object into a string?",
        options: [
            "JSON.stringify()",
            "JSON.parse()",
            "JSON.makeString",
            "JSON.convertToString",
        ],
        answer: "JSON.stringify()"
    },
    {
        question: "3. Which of the following is used in JavaScript to represent logical OR?",
        options: [
            "&&",
            "||",
            "!",
            "|&"
        ],
        answer: "||"
    },
    {
        question: "4. Which of the following will turn a line of code into a comment in JavaScript?",
        options: [
            "//",
            "<%",
            "~~",
            "<&"
        ],
        answer: "//"
    },
    {
        question: "5. Which of the following will create a template literal in JavaScript",
        options: [
            "~~",
            "()",
            "<>",
            "``"
        ],
        answer: "``"
    },
    {
        question: "6. Which of the following notations will not make a function",
        options: [
            "var functionName = function (){}",
            "function functionName (){}",
            "var functionName = ()=>{}",
            "functionName()"
        ],
        answer: "functionName()"
    }
];

var startingTime = 75;
var mainContentEl = document.querySelector(".mainContent");
var startButton = document.querySelector(".start");
var timerEl = document.querySelector(".timeDisplay");
var titlesEl = document.querySelector(".title");
var headerSectionEl = document.querySelector(".header");
var quizSectionEl = document.querySelector(".quiz");
var questionSectionEl = document.querySelector(".questions");
var optionsSectionEl = document.querySelector(".options");
var highScoreSectionEl = document.querySelector(".highScoreSection");
var highScoreDisplay = document.querySelector(".highScore");
var question = document.getElementById("question");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var feedBack = document.getElementById("feedBack");


var startGame = startButton.addEventListener("click", function () {
    var timeFunction = setInterval(countdown, 1000);
    i = 0;

    function countdown() {
        timerEl.innerHTML = `Time: ${startingTime}`;
        startingTime--;
        if (startingTime < 0) {
            clearInterval(timeFunction);
            alert("TIME IS UP! GAME OVER!");
            backToHomePage();
            startingTime = 0;
            timerEl.innerHTML = `Time: ${startingTime}`;
        } else if (i > 5) {
            clearInterval(timeFunction);
            alert(`Game Over. Your Score was ${startingTime + 1}`);
            displayHighScore();
            saveScore();
            return console.log(startingTime + 1);
        }
    }
    addQuestion();
});

function backToHomePage() {
    mainContentEl.classList.remove("hidden")
    quizSectionEl.classList.add("hidden");
    feedBack.classList.add("hidden");
    startButton.classList.add("hidden");
};

function addQuestion() {
    mainContentEl.classList.add("hidden")
    questionSectionEl.classList.remove("hidden");
    question.innerText = quiz[i].question
    addOptions();
};

function addOptions() {
    optionsSectionEl.classList.remove("hidden");
    option1.innerText = quiz[i].options[0];
    option2.innerText = quiz[i].options[1];
    option3.innerText = quiz[i].options[2];
    option4.innerText = quiz[i].options[3];
};

optionsSectionEl.addEventListener("click", (event) => {
    var isCorrect = event.target.innerText === quiz[i].answer;
    if (!isCorrect) {
        feedBack.innerText = "Incorrect"
        startingTime = startingTime - 15;
        i++;
        addQuestion();
    } else {
        feedBack.innerText = "Correct"
        i++;
        addQuestion();
    }
})

function displayHighScore() {
    highScoreSectionEl.classList.remove("hidden");
    quizSectionEl.classList.add("hidden");
    feedBack.classList.add("hidden");
    startButton.classList.add("hidden");
    headerSectionEl.classList.add("hidden");
    highScoreDisplay.innerHTML = "Your Score is: " + (startingTime + 1);
}

var saveScore = () => {
    localStorage.setItem("highScore", startingTime + 1);
}


var initials = document.querySelector("#highScoreInitials");
var playerName = document.querySelector("input[name=initials]");

initials.addEventListener("click", saveInitials);

function saveInitials(event) {
    if (playerName.value == "" || playerName.value === null) {
        event.preventDefault();
        alert("Please enter your initials")
    } else {
        var saveInitials = () => {
            console.log(playerName.value)
            localStorage.setItem("highScoreName", playerName.value);
        };
        saveInitials();
    }
};