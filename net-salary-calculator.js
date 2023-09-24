// Import the 'prompt-sync' module to get user input
const prompt = require('prompt-sync')();

//Get user inputs for monthly salary and contribution amount
const salary = parseInt(prompt('Enter your Monthly salary: '), 10);
const contributionBenefit = parseInt(prompt('Enter your Contribution amount: '), 10);

// Define fixed values for pension relief and NSSF rate
const PENSION_RELIEF = 2400;
const NSSF_RATE = 0.06;

//Calculate NSSF contribution
const nssf = Math.floor(salary * NSSF_RATE);

//Define NHIF rate thresholds
const NHIF_RATES = [
  { threshold: 5999, rate: 150 },
  { threshold: 8000, rate: 400 },
  { threshold: 11999, rate: 500 },
  { threshold: 14999, rate: 600 },
  { threshold: 19999, rate: 750 },
  { threshold: 24999, rate: 850 },
  { threshold: 29999, rate: 900 },
  { threshold: 34999, rate: 950 },
  { threshold: 39999, rate: 1000 },
  { threshold: 44999, rate: 1100 },
  { threshold: 49999, rate: 1200 },
  { threshold: 59999, rate: 1300 },
  { threshold: 69999, rate: 1400 },
  { threshold: 79999, rate: 1500 },
  { threshold: 89999, rate: 1600 },
];

//Determine NHIF contribution based on salary
let nhif = 1700; // Default value for high salaries
for (const rateInfo of NHIF_RATES) {
  if (salary <= rateInfo.threshold) {
    nhif = rateInfo.rate;
    break;
  }
}

//Calculate total benefits including NHIF, NSSF, and contribution benefits
const totalBenefits = nhif + nssf + PENSION_RELIEF + contributionBenefit;

//Calculate taxable salary by subtracting benefits from the salary
const taxableSalary = salary - totalBenefits;

//Declare variables for tax amount and net salary
let taxAmount;
let netSalary;

//Calculate tax amount based on taxable salary range
if (taxableSalary <= 24000) {
  taxAmount = taxableSalary * 0.1;
} else if (taxableSalary <= 32333) {
  taxAmount = taxableSalary * 0.25;
} else if (taxableSalary <= 500000) {
  taxAmount = taxableSalary * 0.3;
} else if (taxableSalary <= 800000) {
  taxAmount = taxableSalary * 0.325;
} else {
  taxAmount = taxableSalary * 0.35;
}

//Calculate net salary by subtracting tax amount from taxable salary
netSalary = taxableSalary - taxAmount;

//Print the results
console.log(`Gross Salary: ${salary}`);
console.log(`Pension Relief: ${PENSION_RELIEF}`);
console.log(`NSSF: ${nssf}`);
console.log(`NHIF: ${nhif}`);
console.log(`Contribution Benefit: ${contributionBenefit}`);
console.log(`PAYE: ${taxAmount}`);
console.log(`Net Salary: ${netSalary}`);
