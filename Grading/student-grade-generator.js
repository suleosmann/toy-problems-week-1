const prompt = require('prompt-sync')();

// Asking the user to enter their grade
const gradeStr = prompt('Enter your grade: ');

// Converting the string to an integer
const grade = parseInt(gradeStr, 10);

// naming yourGrade using because i am going to change with each grading
let yourGrade;

//finding the grades
function studentGrading(grade){
    if(grade > 79){
        yourGrade = "A";
    }
    else if(grade >= 60 && grade <= 79){
        yourGrade = "B";
    }
    else if(grade >= 49 && grade <=59){
        yourGrade = "C";
    }
    else if(grade >= 40 && grade <= 49){
        yourGrade = "C";
    }
    else{
        yourGrade = "D";
    }
    return yourGrade
}
const newgrade = studentGrading(grade)
//printing out the users grade
console.log(`Your grade is: ${newgrade}`)