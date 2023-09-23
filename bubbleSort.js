const prompt = require('prompt-sync')();

const input = prompt('Enter Numbers separated by commas: ');
const arr = input.split(',').map(Number); // Convert input values to numbers

function descending(arr) {
  return arr.sort((a, b) => b - a); // Sort in descending order
}

const newArr = descending(arr);

console.log(newArr);
