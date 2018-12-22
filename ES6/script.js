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
















