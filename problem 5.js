// Declare an empty array to store favorite colors
let favoriteColors = [];

// Loop to collect three favorite colors from the user
for (let i = 0; i < 3; i++) {
    let color = prompt(`Enter your favorite color #${i + 1}:`);
    favoriteColors.push(color);
}

// Log the final array of favorite colors
console.log("Your favorite colors are:", favoriteColors);
