/*
    Vikas Kumar (@dzenvikas)
*/

/////////////////////
// let, const vs var

/**
 * let and const are block scoped
 * while var is function scoped. Preety straight-forward, right ?
 */
/*
/////////////////////
// a block
{
    // codes here
}

/////////////////////
// Blocks and IIFEs

var firstName = 'Vikas Kumar';



// ES6
{
    const a = 1;
    let b = 2;
}

// console.log(a+b);

//ES5
(function(){
    var c = 3;
})();

console.log(c);
*/


/////////////////////
// String literals
/*
let firstName = 'Vikas';    // Can be mutated
let lastName = 'Kumar';
const yearOfBirth = 1994;   // Can't be mutated

function calcAge(birthYear){
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
}

// // ES5
// console.log(
//     'This is ' + firstName + ' ' + lastName + 
//     '. He was born in ' + yearOfBirth +
//     '. Today, he is ' + calcAge(yearOfBirth) +
//     ' years old.'
//      );

// ES6
console.log(`This is ${firstName} ${lastName}.
He was born in ${yearOfBirth}.
Today, he is ${calcAge(yearOfBirth)} year old.`
)

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('V'));
console.log(n.endsWith('R'));
console.log(n.includes(' '));
console.log(n.includes('kum'));
console.log(`${firstName} `.repeat(4));
*/


/////////////////////
// Arrow Function
/*
const years = [1990, 1965, 1982, 1937];
const currentYear = new Date().getFullYear();

// ES5
var ages5 = years.map(function(el){
    return currentYear - el;
});

console.log(ages5);

// ES6
let ages6 = years.map(el => currentYear - el);
console.log(ages6);
*/

// Lexical 'this' keyword
/*
//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {
        //ES5
        // var self = this;
        // document.querySelector('.green').addEventListener('click', function(){
        //     var str = 'This is box number ' + self.position + ' and it is ' + self.color;
        //     alert(str);
        // });

        //ES6
        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box5.clickMe();
*/
/*
function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));
    console.log(arr);
}

//ES6
var friends = ['Bob', 'John', 'Mark'];

new Person('John').myFriends5(friends);

Person.prototype.myFriends5 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}

var friends = ['Bob', 'John', 'Mark'];

new Person('Mike').myFriends5(friends);
*/


/////////////////////
// Destructuring
/*
//ES5
var john = ['John', 20];
// var name = john[0];
// var age = john[1];


//ES6
const [name, age] = ['John', 20];
console.log(name, age);

const obj = {
    firstName: 'John',
    lastName: 'Doe'
};

const { firstName, lastName} = obj;
console.log(firstName, lastName);

const { firstName: a, lastName: b} = obj;
console.log(a, b);

function calcAgeRetirement(year) {
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1994);
console.log(age, retirement);
*/


/////////////////////
// Arrays
/*
const boxes = document.querySelectorAll('.box');
// console.log(boxes);

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
})

//ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/

//ES5
/*
for( var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}
*/
/*
//ES6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I got updated!'
}

//ES5
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur) {
    return cur >= 18;
})
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

//////////////
// Spread operator
/*
function addFourAges(a, b, c, d) {
    return a + b + c + d;
}
var sum1 = addFourAges(18,30,12,21);
console.log(sum1);

//ES5
var ages = [21, 12, 53, 45, 62];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);
console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMillar = ['Marry', 'Bob', 'Anna'];
const bigFamily = [...familySmith, 'Funny', ...familyMillar];
console.log(bigFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
console.log(all);

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/


//////////////
// Rest Parameters
/*
//ES5
function isFullAge5(){
    console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(cur) {
        console.log((2016 - cur) >= 18);
    })
}

isFullAge5(1987, 1759, 2019, 1421);


//ES6
/*
function isFullAge6(...years){ //rest parameters
    console.log(years);
    years.forEach(cur => console.log((2016 - cur >= 18)));

}
isFullAge6(1987, 1759, 2019, 1421);
*/
/*
function isFullAge6(limit, ...years){ //rest parameters
    console.log(years);
    years.forEach(cur => console.log((2016 - cur >= limit)));

}
isFullAge6(18, 1987, 1759, 2019, 1421);
*/


////////////////////////
//Default Parameters
/*
//ES5
function Person(firstName, lastName, yearOfBirth, nationality){
    lastName === undefined ? lastName = 'Kumar' : lastName = lastName;
    nationality === undefined ? nationality = 'Bharatiya' : nationality = nationality;
    this.firstName = firstName;
    this.lastName =  lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var vikas = new Person('Vikas', 'Kumar');
var emily = new Person('Emily', 1994, 'Diaz', 'spanish');
*/
/*
//ES6

function Person(firstName, lastName = 'Kumar', yearOfBirth, nationality = 'Bharatiya') {
    this.firstName = firstName;
    this.lastName =  lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var preeti = new Person('Preeti');
var preetam = new Person('Preetam', 'Das', 1697);
*/

////////////////
// Maps
// set(), get(), has(), delete()

/*
//ES6
const question = new Map();

question.set('question', 'What is the official name of the latest JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, '✅ Correct answer.');
question.set(false, '❌ Wrong, please try again.');
// console.log(question.size);  //get the size

console.log(question.get('question'));
for( let [key, value] of question.entries()) {  // returns in form of array and descontruct as key value pair
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}
const UserAns = parseInt(prompt('Enter the correct answer: '));
console.log(question.get(UserAns === question.get('correct')));
*/

////////////////////
// Classes
/*
//ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calcAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var vikas = new Person5('Vikas', 1947, 'CS Student');

//ES6

// class declaration
class Person6 {
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calcAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    //static class
    static greeting() {
        console.log('Namaste!');
    }
}
const modi = new Person6('Narendra Modi', 1955, 'Pradhan Mantri');
*/


//////////////////////////
// subclass

var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calcAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athelete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athelete5.prototype = Object.create(Person5.prototype);

Athelete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var johnAthelete5 = new Athelete5('John', 1990, 'Swimmer', 3, 10);

johnAthelete5.calcAge();
johnAthelete5.wonMedal();


//ES6

class Person6 {
    constructor (name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }
    calcAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athelete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthelete6 = new Athelete6('John', 1990, 'Swimmer', 3, 10);

























