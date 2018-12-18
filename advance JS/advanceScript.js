
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




















