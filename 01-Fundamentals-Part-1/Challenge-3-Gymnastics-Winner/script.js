/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below (The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.)

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console (print to the console:
"Dolphins win the trophy" if Dolphins win, or
"Koalas win the trophy" if Koalas win, or
"Both win the trophy" if their average scores are equal.). Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. 

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy
Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

const dolphinsS1 = 96;
const dolphinsS2 = 108;
const dolphinsS3 = 89;

const koalasS1 = 88;
const koalasS2 = 91;
const koalasS3 = 110;

const scoreDolphins = (dolphinsS1 + dolphinsS2 + dolphinsS3) / 3;
const scoreKoalas = (koalasS1 + koalasS2 + koalasS3) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas){
    console.log('Dolphins win the trophy 🏆!');
} else if (scoreDolphins < scoreKoalas) {
    console.log('Koalas win the trophy 🏆!');
} else if (scoreDolphins === scoreKoalas) { 
    console.log('Both win the trophy 🏆!');
}

/*
// Bonus 1
const dolphinsS1 = 97;
const dolphinsS2 = 112;
const dolphinsS3 = 101;

const koalasS1 = 109;
const koalasS2 = 95;
const koalasS3 = 110;

const scoreDolphins = (dolphinsS1 + dolphinsS2 + dolphinsS3) / 3;
const scoreKoalas = (koalasS1 + koalasS2 + koalasS3) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolphins win the trophy 🏆!');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆!');
} else if (scoreDolphins === scoreKoalas) { 
    console.log('Both win the trophy 🏆!');
}
*/
/*
// Bonus 2
const dolphinsS1 = 97;
const dolphinsS2 = 112;
const dolphinsS3 = 101;

const koalasS1 = 109;
const koalasS2 = 95;
const koalasS3 = 106;

const scoreDolphins = (dolphinsS1 + dolphinsS2 + dolphinsS3) / 3;
const scoreKoalas = (koalasS1 + koalasS2 + koalasS3) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
    console.log('Dolphins win the trophy 🏆!');
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆!');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) { 
    console.log('Both win the trophy 🏆!');
} else {
    console.log('No one wins the trophy');
}
*/