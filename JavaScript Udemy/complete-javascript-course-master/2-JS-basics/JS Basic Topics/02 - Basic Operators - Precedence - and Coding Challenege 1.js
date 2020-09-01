/******************************************************
 * 
 *  Basic Operators
 * 
*******************************************************

// the beginner's way of declairing multiple variables
 var year = 2019

 var yearJohn = year - 28;
 var yearMark = year - 33;
 

// Declaring multiple varibles on one line.  (same thing as above)
var now, ageJohn, ageMark;

now = 2019;
ageJohn = now - 28;
ageMark = now - 33;

console.log(ageJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical Operators

var johnOlder = ageJohn > ageMark;

console.log(johnOlder);

// typeof operator

console.log(typeof johnOlder);                      // boolean
console.log(typeof ageJohn);                        // number
console.log(typeof 'Mark is older than John');      // string
var x;
console.log(typeof x);                              // undefined

/******************************************************
 * 
 * Operator Precedence (continuation from last lecture)
 * 
 ******************************************************
 

var now, yearJohn, fullAge;

now = 2019;
fullAge = 18;
yearJohn = 1989;

var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

/*******************************************************
 * 
 * Coding Challenge 1
 * 
 * 
 * Mark and John are trying to compare their BMI (Body Mass Index), Which is calculated
 * using the formula: BMI = mass / height^2 = mass / (height * height).  
 * (mass in kg, height in meters).
 * 
 * 1. Store Mark and John's mass and height in variables.
 * 2. Calculate both their BMIs.
 * 3. Create a boolean variable containing information about whether Mark has a higher BMI
 *      than John.
 * 4. Print a string to the console containing the variable from step 3. 
 *      (something like - "Is Mark's BMI higher than John's?  true").
  
 

var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;

massMark = 99;
massJohn = 110;
heightMark = 1.7;
heightJohn = 2.1;

bmiMark = massMark / (heightMark * heightMark);
bmiJohn = massJohn / (heightJohn * heightJohn);

console.log("Mark's BMI is " + bmiMark);
console.log("John's BMI is " + bmiJohn);

var isMarkGreater = bmiMark > bmiJohn;

if (bmiMark > bmiJohn) {
    console.log("\nMark's BMI is higher than John's: " + isMarkGreater);
} else {
    console.log("\nJohn's BMI is higher than Mark's: " + isMarkGreater);
}


*/