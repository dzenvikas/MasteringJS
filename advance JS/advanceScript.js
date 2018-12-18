
// Function constructor
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};

// function constructor
var Person = function(name, yearOfBirth, job){
    this.name = name,
    this.yearOfBirth = yearOfBirth,
    this.job = job
};

Person.prototype.calcAge = function calcAge() {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

// instance of constructor
var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calcAge();
jane.calcAge();
console.log(jane);
*/

// Primitives vs objects
/*
var a = 23;
var b = a; // reference to b
a = 46;
console.log(a);
console.log(b);

var obj1 = {
    name: 'John',
    age: 26
}
var obj2 = obj1; // reference to obj1
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);


// Functions
var age = 27; // primitive
var obj = {
    name: 'Vikas',
    city: 'Dhanbad'
}

function change(a, b) {
    a = 30;
    b.city = 'Ayodhya'
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/


/*************************
 * Function returning function
*/ 
/*
function interviewQuestion(job) {
    if (job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject do you teach, ' + name + ' ?');
        }
    } else {
        return function(name) {
            console.log('Hello' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');


teacherQuestion('John');
designerQuestion('Jane');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Vivek');
*/

/*************************
 * IIFE
*/ 
/*
function game() {
    var score = Math.random*10;
    console.log(score >= 5);
}
game();


(function(){
    var score = Math.random*10;
    console.log(score >= 5);
})();

(function(goodLuck){
    var score = Math.random*10;
    console.log(score >= 5);
})(5);
*/


/*************************
 * Closure
*/ 

function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1994);
retirementGermany(1994);
retirementIceland(1994);

//retirement(66)(1990);

function interviewQuestion(job) {
    return function(name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is ?');
        } else if (job === 'designer') {
            console.log('What subject do you teach, ' + name + ' ?');
        } else {
            console.log('Hello ' + name + ', what do you do ?');
        }
    }
}

interviewQuestion('teacher')('John');


























