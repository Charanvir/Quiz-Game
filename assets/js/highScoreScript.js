var highScoreValue = document.querySelector("#highScore");
var clearHighScoreButton = document.querySelector("#clearButton");


var newHighScore = function () {
    var score = localStorage.getItem("highScore");
    if (score === null) {
        highScoreValue.innerHTML = "No Current High Score";

    } else {
        highScoreValue.innerHTML = score;
    }
}




function clearHighScore() {
    highScoreValue.textContent = "HIGH SCORE UP FOR THE TAKING!!!";
    localStorage.removeItem("highScore");
}


clearHighScoreButton.addEventListener("click", function () {
    clearHighScore();
});

newHighScore();