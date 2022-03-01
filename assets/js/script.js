var startingTime = 75;
var startButton = document.querySelector(".start");
var timerEl = document.querySelector(".timeDisplay");

startButton.addEventListener("click", function () {
    var timeFunction = setInterval(countdown, 1000);

    function countdown() {
        timerEl.innerHTML = `Time: ${startingTime}`;
        startingTime--;
        if (startingTime < 0) {
            clearInterval(timeFunction);
        }
    }
})
