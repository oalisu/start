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


// spread in function calls

const nums = [4, 7, 1, -3, 9];
const maxNum = Math.max(...nums); 
const minNum = Math.min(...nums);
const combined = [...[1, 2, 3], ...[4, 5, 6]];

// spread to combine arrays 
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6]; 
const combinedArr = [...arr1, ...arr2];
// spread to copy arrays
const original = ['a', 'b', 'c'];
const copy = [...original];
// spread to combine objects
const obj1 = { x: 1, y: 2 };
const obj2 = { z: 3, w: 4 };
const combinedObj = { ...obj1, ...obj2 };
// spread to copy objects
const originalObj = { a: 10, b: 20 };
const copyObj = { ...originalObj };

// rest parameters 
const sum = (...nums) => {
  return nums.reduce((total, curr) => total + curr);
};

const greet = (greeting, ...names) => {
  return names.map(name => `${greeting}, ${name}!`);
};                

// destructuring arrays
const scores = [95, 82, 88, 76, 100];
const [topScore, secondScore, ...restScores] = scores;
