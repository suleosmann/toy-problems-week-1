const prompt = require('prompt-sync')();

let speedLimit = 70;
let demeritPoints = 0;
let outPut;

// Asking for input
const speedInputStr = prompt('Enter your speed: ');
const speedInput = parseInt(speedInputStr, 10);
let speedOverLimit = speedInput - speedLimit;

//speed below limit
if (speedInput < speedLimit) {
    outPut = "OK"
} 
// Suspend the license
else if (speedOverLimit >= 60) {
    outPut = "License suspended"
} 
// calculating the points
else {
    demeritPoints = Math.floor(speedOverLimit / 5);
    outPut = `Points Deducted: ${demeritPoints}`
}

console.log(outPut);
