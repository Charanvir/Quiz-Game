var startingTime = 75;
var startButton = document.querySelector(".start");
var timerEl = document.querySelector(".timeDisplay");
var questionsEl = document.querySelector(".title");



var quiz = [
    {
        question1: "To save data into localStorage, it must be in what format?",
        choice1: "Object",
        choice2: "Array",
        choice3: "String",
        choice4: "Boolean",
        answer: "String"
    },
    {
        question2: "Which of the following methods will convert an JavaScript object into a string?",
        choice1: "JSON.stringify()",
        choice2: "JSON.parse()",
        choice3: "JSON.makeString",
        choice4: "JSON.convertToString",
        answer: "JSON.stringify()"
    },
    {
        question3: "Which of the following is used in JavaScript to represent logical OR?",
        choice1: "&&",
        choice2: "||",
        choice3: "!",
        choice4: "|&",
        answer: "||"
    },
    {
        question4: "Which of the following will turn a line of code into a comment in JavaScript?",
        choice1: "//",
        choice2: "<%",
        choice3: "~~",
        choice4: "<&",
        answer: "//"
    },
    {
        question5: "Which of the following will create a template literal in JavaScript",
        choice1: "~~",
        choice2: "()",
        choice3: "<>",
        choice4: "``",
        answer: "``"
    },

]



function addQuestion() {
    questionsEl.innerText = quiz[0].question1;
    questionsEl.classList.add("question");
    questionsEl.classList.remove("title");
}




startButton.addEventListener("click", function () {
    var timeFunction = setInterval(countdown, 1000);

    function countdown() {
        timerEl.innerHTML = `Time: ${startingTime}`;
        startingTime--;
        if (startingTime < 0) {
            clearInterval(timeFunction);
            alert("TIME IS UP! GAME OVER!");
        }
    }

    addQuestion();
})

