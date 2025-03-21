// Declare the favorite number
let favoriteNumber = 6;  

// Initialize user guess
let userGuess = prompt("Guess my favorite number:");

// Keep asking until the correct number is guessed
while (userGuess != favoriteNumber) {
    if (userGuess > favoriteNumber) {
        userGuess = prompt("Too high! Try again:");
    } else {
        userGuess = prompt("Too low! Try again:");
    }
}

// Correct guess message
console.log("Correct! My favorite number is 6.");

