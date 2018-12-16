/*****************************
* CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.
Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
*/

mark = {
    fullName: 'Mark',
    mass: 62,
    height: 1.73,
    calcBMI: function() {
        this.BMI = this.mass / this.height^2;
    }
};
john = {
    fullName: 'John',
    mass: 72,
    height: 1.73,
    calcBMI: function() {
        this.BMI = this.mass / this.height^2;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
    console.log(mark.fullName + '\'s BMI' + ' is greater.');
}else
if (john.BMI > mark.BMI) {
    console.log(john.fullName + '\'s BMI' + ' is greater.');
}else
if (mark.BMI === john.BMI) {
    console.log(mark.fullName + '\'s' + ' and ' + john.fullName + ' \'s BMI' + ' are equal.');
}
console.log('Mark\'s BMI: ' + mark.BMI, 'John\'s BMI: ' + john.BMI);



























