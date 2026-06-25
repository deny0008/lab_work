var playAgain = true;

while (playAgain) {

    var randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Random Number:", randomNumber);

    var attempts = 0;
    var maxAttempts = 10;
    var win = false;

    while (attempts < maxAttempts) {

        var guess = prompt(
            "Guess a number between 1 and 100\nAttempt " + (attempts + 1) + "/" + maxAttempts
        );
        if (guess === null) {
            alert("Game Cancelled!");
            break;
        }

        guess = Number(guess);

        if (isNaN(guess)) {
            alert("Please enter a valid number!");
            continue;
        }

        if (guess < 1 || guess > 100) {
            alert("Number must be between 1 and 100!");
            continue;
        }

        attempts++;

        if (guess > randomNumber) {
            alert("Too High!");
        }
        else if (guess < randomNumber) {
            alert("Too Low!");
        }
        else {
            alert("Congratulations! You Win!");
            alert("Total Attempts: " + attempts);
            win = true;
            break;
        }
    }

    if (!win && attempts === maxAttempts) {
        alert("Game Over!");
        alert("Correct Number was: " + randomNumber);
    }

    playAgain = confirm("Do you want to Play Again?");
}

alert("Thank You For Playing!");