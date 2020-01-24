/************************
* Variables and data types
***************************/

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;

console.log(firstName,lastName,'is',age + '.');
console.log(fullAge);

var fullName = firstName + ' ' + lastName;

console.log(fullName);

console.log(fullName,'is',age+'.');

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

/* |||Variable Naming Rules|||
-cannot start a variable name with a number
-'_' AND '$' can be the first character
-generally use a letter though as first character
-name variables usefully
-cannot use reserved keywords(Delete, if, else, etc.)
-use camelCase notation when naming
-|BELOW WILL NOT WORK|
-var 3years = 3;
*/

/**************************************
* Variable mutation and type coercion *
***************************************/

/*
var firstName = 'John';
var age = 28;


//Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

//javascript and change types on the fly for you :) how kind of the developers.

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName + ' ' + lastName);
*/

/*******************
* Basic Operators  *
********************/


/*
var now, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

//Math Operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;


console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof now);
console.log(typeof ageJohn);
console.log(typeof 'Hello world!');
var x;
console.log(typeof x);
*/

/**********************
* Operator precedence *
***********************/

/*
var now = 2020;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
// assignments work from right-to-left
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x = x * 2;
x *= 2;
console.log(x);
x += 10;
console.log(x);

//same thing
x = x + 1;
x += 1;
x++;
console.log(x);
x--;
console.log(x);
*/

/*********************
* CODING CHALLENGE 1 *
**********************/

/*Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass/height^2 = mass / (height height).
(mass in kg and height in meter).
BMI = mass / (height * height)

1. Store Mark's and John's mass and height in variables
2. calculate both their BMIs
3. Create a boolean variable contraining information about whether mark has a higher BMI than John.
4. Print a String to the console contraining the variable from step 3. (Something like "is Mark's BMI higher than John's? true").

*/

/*
var massJohn = 92;
var heightJohn = 1.95;

var massMark = 78;
var heightMark = 1.69;

var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);

//test
console.log(bmiJohn,bmiMark);

var isMarkBMIHigherThanJohn = bmiMark > bmiJohn;

//example of escaping the end of string using \
console.log('is Mark\'s BMI higher than John\'s?', isMarkBMIHigherThanJohn);
*/

/****************
* If / else statements
***************/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;

if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massJohn = 92;
var heightJohn = 1.95;

var massMark = 78;
var heightMark = 1.69;

var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);

if (bmiMark > bmiJohn) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
*/


//test
//console.log(bmiJohn,bmiMark);

//var isMarkBMIHigherThanJohn = bmiMark > bmiJohn;

//example of escaping the end of string using \
//console.log('is Mark\'s BMI higher than John\'s?', isMarkBMIHigherThanJohn);

/*************************
* Boolean logic
***************/

/*
AND (&&)
OR  (||)
NOT (!)

*/

/*
var firstName = 'John';
var age = 16;

if (age < 13){
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // between 13 and 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/*********************************************
* The Ternary Operator and Switch Statements *
*********************************************/

/*

var firstName = 'John';
var age = 12;


//Ternary Operator

age >= 18 ? console.log(firstName + ' drinks beer.'):console.log(firstName + ' drinks juice.')

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

*/

/*
//if statement comparison
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/

// Switch Statement

/* 

var job = 'instructor';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}

age = 19;
switch (true){
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

*/

//above and below codes function the same way!

/*
var firstName = 'John';
var age = 16;

if (age < 13){
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // between 13 and 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/***********************
* Truthy and Falsy values and equality operators
***********************/

// falsy values: undefinded, null, 0, ''(empty string), NaN(not a number)
// truthy values: NOT falsy values

/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined.');
}

// Equality operators
//best practice to use ==== rather than ==
if (height == '23'){
    console.log('The == operator does type coercion!');
}
*/

/********************
* CODING CHALLENGE 2
*********************/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89,
120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console.
also include the average score inthe output.
3. Then change the scores to show different winners.
Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball and her team scored 97, 134, 105 points. like before, log the average winner to the console. HINT: you will need the && operator to make the decision. If you can't solve thie one, just watch the solution it's not problem!
5.like before, change the scores to generate different winners, keeping in mind there might be draws.
*/

/*
var averageJohn = (89 + 120 + 103) / 3;
var averageMike = (116 + 94 + 123) / 3;
var averageMary = (97 + 134 + 105) / 3;
console.log(averageJohn, averageMike, averageMary);

if (averageJohn > averageMike && averageJohn > averageMary){
    console.log('John is the winner with an average of:' + averageJohn);
} else if (averageMike > averageJohn && averageMike > averageMary){
    console.log('Mike is the winner with an average of:' + averageMike);
} else if (averageMary > averageJohn && averageMary > averageMike){
    console.log('Mary is the winner with an average of:' + averageMary);
} else {
    console.log('There is a tie!');
}
*/

/****
* Functions
****/

function calculateAge(birthYear){
    var year = 2018;
    return year - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn);


function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
    
    return retirement;  
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');




















































