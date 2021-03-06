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

/*
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
*/

/*********
* Function Statements and Expressions
*/

//Function declaration
//function whatDoYouDo(job, firstName){}

/*
// Function expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives an uber in town.';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else.'
    }
}

console.log(whatDoYouDo('teacher','John'));
console.log(whatDoYouDo('designer','Jane'));
console.log(whatDoYouDo('retired','Mark'));
*/

/**********
* Arrays
**************/

/*

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types

var john = ['John','Smith',1998,'designer',false];

john.push('blue'); //push adds to the end
john.unshift('Mr.') //unshift adds to the beggining
console.log(john);


john.pop(); //pop removes from the end

john.shift(); //shift removes from the beggining
console.log(john);

console.log(john.indexOf(1998));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

*/

/****
* Coding Challenge 3
***/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the watier a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) containing all three tips(one for each bill)
2) containing all three final paid amounts (bill + tip).

(NOTe: to calculate 20% of a value, simply multiply it with .2)

*/

/*
function calculateTip(bill){
    if (bill < 50){
        return bill * .2;
    } else if ((bill >= 50) && (bill <= 200)){
        return bill * .15;
    } else if (bill > 200){
        return bill * .5;
    } else {
        return bill;
    }
}

var billOne = 124;
var billTwo = 48;
var billThree = 268;
var tips = [calculateTip(billOne),calculateTip(billTwo),calculateTip(billThree)];
var paid = [(calculateTip(billOne)+billOne),(calculateTip(billTwo)+billTwo),(calculateTip(billThree)+billThree)];

console.log(tips);
console.log(paid);
*/

/*********************
* Objects and properties
********/

/*
// Object literal syntax
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john);
console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object() syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/********************
* Objects and methods
********************/

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear){
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/**********
* Coding Challenge 4
*************/

/*
Let's remember the first coding challenge where mark and john compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass /(height * height). (mass in kg and height in meter).

Good Luck
*/

/*
var mark = {
    fullName: 'Mark Rogers',
    mass: 1111,
    height: 11,
    calcBMI: function(){
        this.BMI = this.mass/(this.height * this.height);
        return this.BMI;
    }
}

var john = {
    fullName: 'John Smith',
    mass: 11111,
    height: 11,
    calcBMI: function(){
        this.BMI = this.mass/(this.height * this.height);
        return this.BMI;
    }
}



if (mark.calcBMI() > john.calcBMI()){
    console.log(mark.fullName + ' has the biggest BMI.' + mark.BMI);
} else if (john.calcBMI() > mark.calcBMI()){
    console.log(john.fullName + ' has the biggest BMI. ' + john.BMI);
} else {
    console.log('They have the same BMI.');
}
*/

/**************
* Loops and iteration
***********/

/*

for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to console, i++
// and so on...
// i = 10, 1 < 10 FALSE, exit loop!

var john = ['John','Smith',1998,'designer',false, 'blue'];

for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}




// while loop
var i = 0
while (i < john.length){
    console.log(john[i]);
    i++;
}

*/
/*

//continue and break statements
var john = ['John','Smith',1998,'designer',false, 'blue'];

for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// looping backwards


for (var i = john.length - 1; i => 0; i--){
    console.log(john[i]);
}

*/

/***********************
* CODING CHALLENGE 5
************/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/

/*

var john = {
    bills: [11,1,268,1,1],
    tips: [],
    paid: [],
    calcTip: function(){
        for (var i = 0; i < john.bills.length; i++){
            var bill = john.bills[i];
            var tip;
            if (bill < 50){
                tip = bill * .2;
            } else if (bill >= 50 && bill < 200){
                tip = bill * .15;
            } else {
                tip = bill * .1;
            }
            john.tips.push(tip);
            john.paid.push((tip+bill));
        }
    }
}

john.calcTip();
console.log(john.tips);
console.log(john.paid);

var mark = {
    bills: [77,375,110,45],
    tips: [],
    paid: [],
    calcTip: function(){
        for (var i = 0; i < mark.bills.length; i++){
            var bill = mark.bills[i];
            var tip;
            if (bill < 100){
                tip = bill * .2;
            } else if (bill >= 100 && bill < 300){
                tip = bill * .15;
            } else {
                tip = bill * .1;
            }
            mark.tips.push(tip);
            mark.paid.push((tip+bill));
        }
    }
}

mark.calcTip();

function calcTipAverage(tips){
    var sum = 0;
    for (var i = 0; i < tips.length; i++){
         sum += tips[i];
         }
    return sum/tips.length;
}

var johnTipAverage = calcTipAverage(john.tips);
var markTipAverage = calcTipAverage(mark.tips);

console.log(johnTipAverage);
console.log(markTipAverage);

if (johnTipAverage > markTipAverage){
    console.log('John has a higher Tip average with an average tip of ' + johnTipAverage);
} else if (markTipAverage > johnTipAverage){
    console.log('Mark has a higher Tip average with an average tip of ' + markTipAverage);
} else {
    console.log('They have the same Tip average.');
}

*/
























































































































