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







































