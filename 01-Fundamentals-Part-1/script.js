/*

////////////////////////////////////////////////////////////////////////
// Values and Variables
//A variable is a named reference to a value. That way an unpredictable value can be accessed through a predetermined name
//Conventions and rules to name variables: camelCase, , , no reserved JS keywords, , letters, underscore or dollar sign

////////////////////////////////////////////////////////////////////////
// Variable name conventions
let firstName = "Nicolas"; //The best way would be the convention of writing with camelCase
let jonas_matilda = "JM"; //The name can contain underscore
let $function = 27; //The name can contain the dollar sign

let person = "jonas"; //No uppercase at the beginning
let PI = 3.1415; //No reserved JS keywords or real constants
let myFirstJob = "Coder"; //No number at the beginning
let myCurrentJob = "Teacher"; //Name should be descriptive

let job1 = "programmer"; //May contain numbers
let job2 = "teacher"; //Not as descriptive
*/

/*
////////////////////////////////////////////////////////////////////////
// Data Types: Values can have different types depending on the value we want variables to hold
// Dynamic typing is a JS feature: We do not have to manually define the data type of the value stored in a variable. Instead, data types are determined automatically
// A value can be object or a primitive value
// 7 Primitive data types in JavaScript:
Number: floating point numbers (they always have decimals)
Strings: Sequence of characters, always goes between quotes
Boolean: Logical type values, either true or false, used most to take decisions with code
Undefined: Value taken by a variable that is not yet defined (declared variable but no value assigned)
Null: Means empty value
Symbol: Value that is unique and cannot be changed
BigInt: Larger integers than the Number type can hold

let javascriptIsFun = true;
console.log(javascriptIsFun); //true
console.log(typeof javascriptIsFun); //boolean
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); //string
let year;
console.log(year); //undefined
console.log(typeof year); //undefined
year = 1991;
console.log(typeof year); //number

console.log(typeof null); //object (It should return null but it is a JavaScript bug)
*/

/*
////////////////////////////////////////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);
*/

/*
////////////////////////////////////////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Jonas";
const lastName = "Schmedtmann";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/

/*
////////////////////////////////////////////////////////////////////////
// Operator Precedence
//We can check the following table of the operator precedence
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); //Precedence favors subtraction first, then "greater than >  "

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

////////////////////////////////////////////////////////////////////////
//  Coding Challenge #1

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

// GOOD LUCK 😀
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;


const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
console.log(BMIMark, BMIJohn, markHigherBMI);

*/

/*
////////////////////////////////////////////////////////////////////////
// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;
//In the following example, the calculation returns a number inside a string, works because of "type coercion"
const jonas =
  "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String
multiple
lines`);
*/
/*
////////////////////////////////////////////////////////////////////////
// Taking Decisions: if / else Statements
const age = 20;
const legalAge = 18;

if (age >= legalAge) {
  console.log("Sarah can start driving license 🚗");
} else if (legalAge - age === 1) {
  console.log(`Sarah is too young. Wait another year :)`);
} else if (legalAge - age < 1) {
  const ageMonths = (legalAge - age) * 10;
  console.log(`Sarah is too young. Wait another ${ageMonths} months :)`);
} else {
  const yearsLeft = legalAge - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
//console.log(century);

*/

/*
////////////////////////////////////////////////////////////////////////
// Coding Challenge #2

// Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

// 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// HINT: Use an if/else statement 😉

// GOOD LUCK 😀
//MY SOLUTION
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else if (BMIJohn > BMIMark) {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is equal to Marks's (${BMIMark})!`);
}

//Jonas Schmedtmann Solution
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`);
}
*/

/*
////////////////////////////////////////////////////////////////////////
// Type Conversion and Coercion

// Type conversion (or typecasting) means transfer of data from one data type to another
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type coercion is the automatic or implicit conversion of values from one data type to another (such as strings to numbers). Is similar to -Type Conversion- because they both convert values from one data type to another with one key difference — type conversion- is mostly explicit whereas type coercion can it's implicit by JavaScript
console.log("I am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log("23" / "2");

let n = "1" + 1; // '11'
n = n - 1;
console.log(n);

*/

/* 
////////////////////////////////////////////////////////////////////////
// Truthy and Falsy Values
//In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/
/* 
////////////////////////////////////////////////////////////////////////
// Equality Operators: == vs. ===
const age = "18";
//Strict equality operator
//The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator (==), the strict equality operator always considers operands of different types to be different.
if (age === 18) console.log("You just became an adult :D (strict)");
//Loose equality operator allows type coercion so 18 == "18" it's true
if (age == 18) console.log("You just became an adult :D (loose)");

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  // 22 === 23 -> FALSE
  console.log("Cool! 23 is an amzaing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");
*/
/*
////////////////////////////////////////////////////////////////////////
// Logical Operators
//AND true when all are true
//OR  true when only one is true
//NOT inverts true/false
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); //true
console.log(hasDriversLicense || hasGoodVision); //false
console.log(!hasDriversLicense); //false

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!"); //She is able to drive
} else {
  console.log("Someone else should drive...");
}
*/
/*
////////////////////////////////////
// Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

/*
function average(a, b, c) {
  return (a + b + c) / 3;
}
const scoreDolphins = average(96, 108, 89);
const scoreKoalas = average(88, 91, 110);

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy");
}

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}
*/

/*
////////////////////////////////////////////////////////////////////////
// The switch Statement: The switch statement evaluates an expression, matching the expression's value against a series of case clauses, and executes statements after the first case clause with a matching value, until a break statement is encountered. The default clause of a switch statement will be jumped to if no case matches the expression's value.
const day = "friday";

switch (day) {
  case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
    console.log("Day Off");
    break;
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
    console.log("Prepare theory videos");
    break;
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}
*/
/* 
////////////////////////////////////////////////////////////////////////
//JavaScript expects statements and expression in different places
//Statements: Is a line of code commanding a task, it doesn't produce a value by itself
//Expressions: A piece of code that produces a value

//Expression examples:
3 + 4;
1991;
true && false && !false;

//Statement example
if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Jonas";
console.log(`I'm ${2037 - 1991} years old ${me}`);

*/

/*
////////////////////////////////////
// The Conditional (Ternary) Operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.

const age = 23;
//Conditional (Ternary) operator example:
const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink); //wine

//If/Else statement equivalent to previous example:
let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2); //wine

//The conditional ternary operator works well to take quick decisions and can be used as an expression inside template literals because creates a value
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`); //I like to drink wine 🍷
*/

////////////////////////////////////
// Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/
/*
//MY SOLUTION
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
); //The bill was 430, the tip was 86, and the total value 516

//Jonas Solution
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );
*/
