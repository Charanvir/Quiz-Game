var highScoreValue = document.querySelector("#highScore");
var clearHighScoreButton = document.querySelector("#clearButton");


var newHighScore = function () {
    var score = localStorage.getItem("highScore");
    var initials = localStorage.getItem("highScoreName");
    if (score === null && initials === null) {
        highScoreValue.innerHTML = "No Current High Score";

    } else {
        highScoreValue.innerHTML = initials + "-" + score;
    }
}




function clearHighScore() {
    highScoreValue.textContent = "HIGH SCORE UP FOR THE TAKING!!!";
    localStorage.removeItem("highScore");
    localStorage.removeItem("highScoreName");
}


clearHighScoreButton.addEventListener("click", function () {
    clearHighScore();
});

newHighScore();