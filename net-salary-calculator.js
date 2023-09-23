const prompt = require('prompt-sync')();
//Asking for Salary input
const salary = parseInt(prompt('Enter your Monthly salary: '), 10);
const contributionBenefit = parseInt(prompt('Enter your Contribution amount: '), 10);

const nhif = parseInt(prompt('Enter your NHIF amount: '), 10);
const nssf = parseInt(prompt('Enter your NSSF amount: '), 10);
const pensionRelief = 2400;
const benifits = nhif + nssf+ pensionRelief+contributionBenefit;
const taxableSalary = salary - benifits;
let taxAmount;
let netSalary;
//calculating the net salary
if(taxableSalary <=24000){
    taxAmount = taxableSalary*0.1;
    netSalary = taxableSalary - taxAmount;
}
else if(taxableSalary > 24000 && taxableSalary <= 32333){
    taxAmount = taxableSalary*0.25;
    netSalary = taxableSalary - taxAmount;
}
else if(taxableSalary > 32333 && taxableSalary <= 500000){
    taxAmount = taxableSalary*0.3;
    netSalary = taxableSalary - taxAmount;
}
else if(taxableSalary > 50000 && taxableSalary <= 800000){
    taxAmount = taxableSalary*0.325;
    netSalary = taxableSalary - taxAmount;
}
else{
    taxAmount = taxableSalary*0.35;
    netSalary = taxableSalary - taxAmount;
}
console.log(`Gross Salary ${salary}`)
console.log(`Pension Relief: ${pensionRelief}`)
console.log(`Contribution Benefit: ${contributionBenefit}`)
console.log(`PAYE: ${taxAmount}`)
console.log(`Net Salary ${netSalary}`)
