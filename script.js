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


