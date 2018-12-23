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


//ES5
/*
for( var i = 0; i < boxesArr5.length; i++) {
    if (boxesArr5[i].className === 'box blue') {
        continue;
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}
*/

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


