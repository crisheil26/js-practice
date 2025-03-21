const favoriteNumber = 6;
let userGuess = null;

while (userGuess !== favoriteNumber) {
    userGuess = parseInt(prompt("Guess my favorite number:"),10);

    if (userGuess < favoriteNumber) {
        console.log("Too low! Try again.");
    } else if (userGuess > favoriteNumber) {
        console.log("Too high! Try again.");
    } else if (userGuess === favoriteNumber) {
         console.log("Correct! You guessed my favorite number .");
    } else {
        console.log("Invalid input. Please enter a number .");
    }
}
