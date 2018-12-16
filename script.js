/*************************
 * Variables and Data types
*/ 
/*
var firstName = 'Vivek';
console.log(firstName);

var lastName = 'Kumar';
var age = 28;

var fullAge = true;
// console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//Variable naming rules
var _3years = 3;
var JohnMark = 'John and Mark';
// var if = 23; // reserved keyword
*/


/*************************
 * Variable mutation and type coercion
*/ 

// Type coercion
/*
var firstName = 'John';
var age = 28;
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(
    firstName + ' is a ' + age + ' year old ' + job + 
    '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(
    firstName + ' is a ' + age + ' year old ' + job + 
    '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/


/*************************
 * Basic Operators
*/ 
/*
var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// Typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*************************
 * Operator precedence
*/ 
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

var ageJohn = now -yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y =(3+ 5) * 4 - 6;
console.log(x, y);

// More operators
// x = x *2;
x *= 2;
console.log(x);
x += 10;
console.log(x);
// x = x + 1;
// x += 1;
// x++;
// console.log(x);
x--;
console.log(x);
*/


/*************************
 * IF / else statement
*/ 
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' will hopefully marry soon.');
}
*/
/*
var isMarried = false;
if (isMarried) {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' will hopefully marry soon.');
}
*/


/*************************
 * The Ternary Operator and Switch Statements
*/ 
/*
// Ternary operator
var firstName = 'John';
var age = 18;

age >= 18 ? console.log(firstName + ' drinks buttermilk.')
    : console.log(firstName + ' drinks milk.');

var drink = age >= 18 ? 'buttermilk' : 'milk.';
console.log(drink);


// Switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + 'drives an Uber.');
        break;
    case 'designer':
        console.log(firstName + ' desings beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.');
}


switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 18:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 18:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
*/

/*************************
 * Truthy and Falsy values and Equality operator
*/ 
// falsy values: undefined, null, '', 0, NaN
// truthy values: NOT falsy values
/*
var height;

var height = 23;

if(height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined.');
}

// Equality operators
if (height == '23') { // type coercion
    console.log('The == operator does type coercion!');
}
if (height !== '23') { // NO type coercion
    console.log('The === operator does NOT type coercion!');
}
*/


/*************************
 * Functions
*/ 
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' retired ' + -retirement + ' years ago.');
    }
}
yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/


/*************************
 * Function statements and expressions
*/ 

//function declaration
// function whatDoYouDo(job, firstName);
/*
//function expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a Truck.';
        case 'designer':
            return firstName + ' designs a beautiful website.';
        default:
            return firstName + ' does something else.';
    }
};

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/


/*************************
 * Arrays
*/ 
/*
// Init new array;
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary'; // adding to array
console.log(names);

// with Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.'); // insert at start of array

console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);


console.log(john.indexOf(1990)); //returns index of element

var isDesinger = john.indexOf('designer') === -1 ? 'John is NOT a desinger.' : 'John is a desinger.';
console.log(isDesinger);
*/

/*************************
 * Objects and properties
*/ 

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};


console.log(john);
console.log(john.lastName);
var x = 'birthYear';
console.log(john[x]);


var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);



