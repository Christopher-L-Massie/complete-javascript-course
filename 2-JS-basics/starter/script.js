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



































