let maximum = parseInt(prompt("Enter the maximum number:"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number:"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess:");
let attempts = 1; 

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  guess = parseInt(guess);

  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess:");
    attempts++;
  } else if (guess < targetNum) {
    guess = prompt("Too low! Enter a new guess:");
    attempts++;
  } else {
    guess = prompt("Invalid input. Please enter a number or 'q' to quit:");
  }
}

  if (guess === "q") {
    console.log("You quit the game.");
  } else {
    console.log(`Congrats! You guessed the number correctly!`);
    console.log(`You guessed ${attempts} times. Try again!`);
  }