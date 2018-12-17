
// Function constructor

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




























