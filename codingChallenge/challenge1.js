
/*****************************
* CODING CHALLENGE 1
*/

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 
*/

// var massMark = alert('Enter mass(kg) of Mark:');
// var massJohn = alert('Enter mass(kg) of John:');
// var heightMark = alert('Enter height(meters) of Mark:');
// var heightJohn = alert('Enter height(meters) of John:');
var massMark = 62;
var massJohn = 72;
var heightMark = 1.73;
var heightJohn = 1.73;

BMIMark = massMark / heightMark^2;
BMIJohn = massJohn / heightJohn^2;
console.log(BMIMark, BMIJohn);
console.log('Is Mark\'s BMI higher than John\'s?', BMIMark > BMIJohn);