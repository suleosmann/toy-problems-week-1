// Import the 'prompt-sync' module to get user input
const prompt = require('prompt-sync')();
// Asking for Inputs
const salary = parseInt(prompt('Enter your Monthly salary: '), 10);

const contributionBenefit = parseInt(prompt('Enter your Contribution amount: '), 10);


// Fixed pension relief amount
const pensionRelief = 2400;

//Calculate nssf
const nssf = Math.floor(salary * 0.06)

let nhif;

//Calculating NHIF Contribution

if (salary <= 5999){
    nhif = 150;
}
else if(salary >=6000 & salary <= 7999){
    nhif = 300;
}
else if(salary >=8000 & salary <= 11999){
    nhif = 400;
}
else if(salary >=12000 & salary <= 14999){
    nhif = 500;
}
else if(salary >=15000 & salary <= 19999){
    nhif = 600;
}
else if(salary >=20000 & salary <= 24999){
    nhif = 750;
}
else if(salary >=25000 & salary <= 29999){
    nhif = 850;
}
else if(salary >=30000 & salary <= 34999){
    nhif = 900;
}
else if(salary >=35000 & salary <= 39999){
    nhif = 950;
}
else if(salary >=40000 & salary <= 44999){
    nhif = 1000;
}
else if(salary >=45000 & salary <= 49999){
    nhif = 1100;
}
else if(salary >=50000 & salary <= 59999){
    nhif = 1200;
}
else if(salary >=60000 & salary <= 69999){
    nhif = 1300;
}
else if(salary >=70000 & salary <= 79999){
    nhif = 1400;
}
else if(salary >=80000 & salary <= 89999){
    nhif = 1500;
}
else if(salary >=90000 & salary <= 99999){
    nhif = 1600;
}
else{
    nhif = 1700;
}

// Calculate total benefits including NHIF, NSSF, and contribution benefits
const benefits = nhif + nssf + pensionRelief + contributionBenefit;

// Calculate taxable salary by subtracting benefits from the salary
const taxableSalary = salary - benefits;

// Declare variables for tax amount and net salary
let taxAmount;
let netSalary;


// Calculate tax and net salary based on taxable salary range
if (taxableSalary <= 24000) {
    taxAmount = taxableSalary * 0.1;
    netSalary = taxableSalary - taxAmount;
}
else if (taxableSalary > 24000 && taxableSalary <= 32333) {
    taxAmount = taxableSalary * 0.25;
    netSalary = taxableSalary - taxAmount;
}
else if (taxableSalary > 32333 && taxableSalary <= 500000) {
    taxAmount = taxableSalary * 0.3;
    netSalary = taxableSalary - taxAmount;
}
else if (taxableSalary > 500000 && taxableSalary <= 800000) {
    taxAmount = taxableSalary * 0.325;
    netSalary = taxableSalary - taxAmount;
}
else {
    taxAmount = taxableSalary * 0.35;
    netSalary = taxableSalary - taxAmount;
}

// Print the results
console.log(`Gross Salary: ${salary}`);
console.log(`Pension Relief: ${pensionRelief}`);
console.log(`NSSF: ${nssf}`);
console.log(`NHIF: ${nhif}`);
console.log(`Contribution Benefit: ${contributionBenefit}`);
console.log(`PAYE: ${taxAmount}`);
console.log(`Net Salary: ${netSalary}`);
