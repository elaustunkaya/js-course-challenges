/*
Mark and John are trying to compare their BMI, which is calculated using the formula:
BMI = weight / height ** 2 = weight / (height * height)
( weight in kg and height in meter).

Your tasks:
1. Store Mark's and John's weight and height in variables
2. Calculate both their BMIs using the formula
3. Create a Boolean variable 'markHigherBMI' cntaining information about whether Mark has a higher BMI than John.

Test data:
Data 1 : Mark weights 78kg and is 1.69m tall. John weights 92 kg and is 1.95m tall.
Data 2 : Mark weights 95kg and is 1.88m tall. John weights 85 kg and is 1.76m tall.
*/

const heightMark = 1.69;
const weightMark = 78;

const heightJohn = 1.95;
const weightJohn = 92;

const markBMI = weightMark / heightMark ** 2; // Since the exponentiation executes from right to left, I didn't put the heightMark ** 2 in parentheses
const johnBMI = weightJohn / heightJohn ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);