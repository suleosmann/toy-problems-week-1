// Import the 'prompt-sync' module to get user input
const prompt = require('prompt-sync')();

// Asking for Salary input and converting it to an integer
const salary = parseInt(prompt('Enter your Monthly salary: '), 10);

// Asking for Contribution amount input and converting it to an integer
const contributionBenefit = parseInt(prompt('Enter your Contribution amount: '), 10);

// Asking for NHIF amount input and converting it to an integer
const nhif = parseInt(prompt('Enter your NHIF amount: '), 10);

// Asking for NSSF amount input and converting it to an integer
const nssf = parseInt(prompt('Enter your NSSF amount: '), 10);

// Fixed pension relief amount
const pensionRelief = 2400;

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
console.log(`Contribution Benefit: ${contributionBenefit}`);
console.log(`PAYE: ${taxAmount}`);
console.log(`Net Salary: ${netSalary}`);
