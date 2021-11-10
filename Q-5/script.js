var readlineSync = require('readline-sync');

let highestMark = 0;
let name = '';
let averageMarks = '';

for(let i=0; i<5; i++){

  let studentName = readlineSync.question("Enter the student name?\n");
let unitTestMarks = Number(readlineSync.question("Enter the marks obtained in unit test.."));
let prefinalMarks = Number(readlineSync.question("Enter the marks obtained in prefinalMarks.."));
let finalMarks = Number(readlineSync.question("Enter the marks obtained in finals.."));

let totalMarks = unitTestMarks+prefinalMarks+finalMarks;
let averageMarks = totalMarks/3;
console.log(totalMarks);
console.log(averageMarks);

if(totalMarks>highestMark){
  highestMark = totalMarks;
  name = studentName
}

}


console.log("highestMark got by"+ name +" is"+highestMark);