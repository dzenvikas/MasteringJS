/*
    Vikas Kumar (@dzenvikas)
*/

/////////////////////
// let, const vs var

/**
 * let and const are block scoped
 * while var is function scoped. Preety straight-forward, right ?
 */

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






















