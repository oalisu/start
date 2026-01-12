// let maximum = parseInt(prompt("Enter the maximum number:"));
// while (!maximum) {
//   maximum = parseInt(prompt("Enter a valid number:"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let guess = prompt("Enter your first guess:");
// let attempts = 1; 

// while (parseInt(guess) !== targetNum) {
//   if (guess === "q") break;
//   guess = parseInt(guess);

//   if (guess > targetNum) {
//     guess = prompt("Too high! Enter a new guess:");
//     attempts++;
//   } else if (guess < targetNum) {
//     guess = prompt("Too low! Enter a new guess:");
//     attempts++;
//   } else {
//     guess = prompt("Invalid input. Please enter a number or 'q' to quit:");
//   }
// }

//   if (guess === "q") {
//     console.log("You quit the game.");
//   } else {
//     console.log(`Congrats! You guessed the number correctly!`);
//     console.log(`You guessed ${attempts} times. Try again!`);
//   }


// arrow functions

const add = (x, y) => x + y;
const square = x => x * x;
const rollDie = () => Math.floor(Math.random() * 6) + 1;

// arrow functions implicit return

const isEven = num => num % 2 === 0;
const firstChar = string => string[0];
const capitalize = string => string.toUpperCase();
const addTwoNums = (a, b) => a + b;

// setTimeout and setInterval

setTimeout(() => {
  console.log("This message is shown after 3 seconds");
}, 3000); 

const intervalId = setInterval(() => {
  console.log("This message is shown every 2 seconds");
}, 2000);

// To stop the interval after 10 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Interval cleared");
}, 10000);

// filter method

const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
const greaterThanThree = numbers.filter(num => num > 3);  
const startsWithA = ["apple", "banana", "avocado", "cherry"].filter(fruit => fruit[0] === 'a');


// some and every methods - Define a function called allEvens that accepts a single array of numbers.  If the array contains all even numbers, return true.  Otherwise, return false.

const allEvens = arr => arr.every(num => num % 2 === 0);

