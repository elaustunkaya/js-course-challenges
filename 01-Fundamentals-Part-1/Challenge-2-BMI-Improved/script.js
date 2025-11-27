/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print a nice output to console, saying who has the higher BMI. The message is either "Mrk's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example:"Mark's BMI (28.3) is higher than John's (23.9)!"
*/

// Challenge 1
const heightMark = 1.69;
const weightMark = 78;

const heightJohn = 1.95;
const weightJohn = 92;

const markBMI = weightMark / (heightMark ** 2);
const johnBMI = weightJohn / (heightJohn ** 2);
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);

// Challenge 2
if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
