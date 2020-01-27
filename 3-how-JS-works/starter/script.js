///////////////////////////////////////
// Lecture: Hoisting
/*
calculateAge(1990);

//functions
function calculateAge(year) {
    console.log(2020- year);
}

//won't work here
//retirement(1995);
var retirement = function(year) {
    console.log(65 - (2020 - year));
}

retirement(1995);

//variables
console.log(age);
var age = 23;
console.log(age);

function foo(){
    console.log(age);
    var age = 65;
    console.log(age);
}
foo();
console.log(age);

//scoping chain
//lexically
*/
/*

var a = 'Hello!';
first();

function first(){
    var b = 'Hi!';
    second();
    
    function second(){
    var c = 'Hey!';
    console.log(a + b + c);
    }
    
}

*/









///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword

//console.log(this);

calculateAge(1985);


//in a regular function call the this variable attaches to the global object (this refering to the global object)
function calculateAge(year) {
    console.log(2020 - year);
    console.log(this);
}

//in a method call from within an object the this variable points the object that it is contained in rather then the global object
var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2020 - this.yearOfBirth);
        
        //technically this is a regular function call so 'this' points to global object, not the created object
        /*
        function innerFunction(){
            console.log(this);
        }
        innerFunction();
        */
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

//function borrowing
mike.calculateAge = john.calculateAge;
mike.calculateAge();




























































