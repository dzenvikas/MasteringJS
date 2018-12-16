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





