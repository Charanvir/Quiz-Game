var highScoreValue = document.querySelector("#highScore");
var clearHighScoreButton = document.querySelector("#clearButton");


function clearHighScore() {
    highScoreValue.textContent = "HIGH SCORE UP FOR THE TAKING!!!";
}


clearHighScoreButton.addEventListener("click", function () {
    clearHighScore();
});