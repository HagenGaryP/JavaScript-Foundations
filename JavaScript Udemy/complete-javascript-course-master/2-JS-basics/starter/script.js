/**********************************************
* Variables and data types


var firstName = 'Gary';
console.log(firstName);

var lastName = 'Hagen';
var age = 9000;

var fullAge = true;
console.log(fullAge);

var job;    // job is not defined
console.log(job); // This will print 'undefined'

job = 'Teacher';
console.log(job);

/**********************************************
 * Variable mutation and type coercion
 

 var firstName = 'Gary';
 var age = 9000;

 console.log(firstName + ' ' + age); // type coercion

 // Type Coercion - JavaScript automatically converts
 //                 types from one to another as needed.

 var job, isMarried;  // cleaner to assign multiple variables on one line
 job = 'teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' 
    + job + '. Is he married? ' + isMarried);


// Variable Mutation

age = 'nine thousand';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old '
    + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

/*

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

/*********************************************************
 * 
 * If / else statements
 * 
*********************************************************/
/*
var firstName = 'John';
var civilStatus = 'single';

//if (civilStatus === 'married') {
//    console.log(firstName + ' is married.');
//} else {
//    console.log(firstName + ' is single.');
//}


var isMarried = false;

if (isMarried === true) {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is single.');
}
*/

/***********************************************************
 * 
 * Boolean Logic
 * 
***********************************************************

* AND (&&)      -->     true if ALL are true
* OR (||)       -->     true if ONE is true
* NOT (!)       -->     inverts true/false value


                        var A
                ----------------------------
                |  AND  |  TRUE  |  FALSE  |
                ----------------------------
    var B       | TRUE  |  TRUE  |  FALSE  |
                ----------------------------
                | FALSE | FALSE  |  FALSE  |
                ----------------------------

                
                              var A
                ----------------------------
                |  OR   |  TRUE  |  FALSE  |
                ----------------------------
    var B       | TRUE  |  TRUE  |  TRUE   |
                ----------------------------
                | FALSE |  TRUE  |  FALSE  |
                ----------------------------

var age = 16;

age >= 20;      // false
age < 30;       // true
!(age < 30);    // false

age >= 20 && age < 30;  // false
age >= 20 || age < 30;  // true


*/

/*
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {  // between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else {
    console.log(firstName + ' is a man.');
}
*/

/*********************************************************
 *
 * The Ternary Operator and Switch
 *
*********************************************************/

/* Ternary Operator (?) - The conditional ternary operator in JavaScript assigns a value to a variable 
            based on some condition and is the only JavaScript operator that takes three operands.


The ternary operator is a substitute for an if statement in which both the if and else clauses assign 
        different values to the same field, like so:

if (condition)
result = 'something';
else
result = 'somethingelse';

The ternary operator shortens this if/else statement into a single statement:

result = (condition) ? 'something' : 'somethingelse';
*/

/*

var firstName = 'John';
var age = 14;

age >= 21 ? console.log(firstName + ' drinks beer.'): console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);
*/

/*          // the alternative way of writing the same code that our Ternary operator is accomplishing
if (age >= 21) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}*/


// The switch statement    -    comparing cases with swtich, instead of using if/else statement
/*
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':  // can havve multiple case names for the same code block
    case 'professor':
        console.log(firstName + ' teaches kids how to code.');
        break;  // must use break statement, otherwise it will keep evaluating next cases.
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case ' designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:        // the default case, if no other case applies.  Essentially the "else" 
        console.log(firstName + ' does something else.');       
}

// using switch to get same result as the code used in our Boolean logic example.

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}
// (2nd) switch example - we have logical boolean expressions that will be true or false.
// So, for example, if one case is true.. all the other cases are false.

// The first switch example is the more usual case for using the switch statement;
//      where you have a string that we want to compare with some variable.
*/


/*********************************************************
 *
 * Truthy and Falsy values and equality operators
 *
*********************************************************/

/* falsy values: undefined, null, 0, '', NaN

A falsy value is a value that is considered false when encountered in a Boolean context.

JavaScript uses Type Conversion to coerce any value to a Boolean in contexts that require it,
     such as conditionals and loops.

There are 7 falsy values in JavaScript.

This means that when JavaScript is expecting a boolean and it is given one of the values below,
     it will always evaluate to “falsy”.

--------------------------------------------------------------------------------------------------
false	        The keyword false
--------------------------------------------------------------------------------------------------
0	            The number zero
--------------------------------------------------------------------------------------------------
0n              BigInt, when used as a boolean, follows the same rule as a Number. 0n is falsy.
--------------------------------------------------------------------------------------------------
"", '', ``      This is an empty string (the length of the string is zero). 
                Strings in JavaScript can be defined with double quotes "", single quotes '', 
                    or Template literals ``.
--------------------------------------------------------------------------------------------------
null	        null - the absence of any value
--------------------------------------------------------------------------------------------------
undefined	    undefined - the primitive value
--------------------------------------------------------------------------------------------------
NaN	            NaN - not a number
--------------------------------------------------------------------------------------------------



// truthy values:  NOT falsy values

var height;

height = 23;    // WITHOUT THIS, THE VARIABLE IS UNDEFINED.

//height = 0;     // Zero is a falsy value, so this causes else statement to return falsy's conditional

if (height || height === 0) {   // by including the OR height === 0, we allow conditional to be met.
    console.log('Variable is defined.');
} else {
    console.log('Variable has NOT been defined.');  // returned whenever var is a FALSY value.
}

// Equality operators using type coercion 
//      - which means that the data types of both variables do not have to match.

if (height == '23') {  // using (==) operator does type coercion,
                        // converting the string of '23' to the number 23
    console.log('The == operator does type coercion!');
}

console.log(23 == '23');        // true - due to TYPE COERCION

console.log(23 === '23');       // false - STRICT EQUALITY OPERATOR; 23 != '23'

// Using the strict equality operator, the triple equal (===), is best practice in order 
//      to avoid unexpected situations and bugs.  

// Can use (===) all times that you don't want to allow for type coercion.
*/



/*********************************************************
 *
 * Coding challenge 2
 *
**********************************************************

John and Mike both play besketball on different teams.  In the last 3 games, John's team 
    scored 89, 120, and 103 points.  While Mike's team scored 116, 94, and 123 points.

1. Calculate the average score for each team.
2. Decide which team has higher average score and print winner to console. (include score)
3. Then, change the scores to show different winners.  Take tie scores into consideration.

4. (Bonus): Mary also plays basketball, and her team scored 97, 134, and 105 points.
            Repeat steps 1-3 for Mary.  Hint: You will need the && operator.
*/

//var johnScore1, johnScore2, johnScore3, mikeScore1, mikeScore2, mikeScore3;
//var maryScore1, maryScore2, maryScore3; // bonus  
/*                  
        // brute force coding... so ugly, even I didn't use it
johnScore1 = 89;
johnScore2 = 120;
johnScore3 = 103;
mikeScore1 = 116;
mikeScore2 = 94;
mikeScore3 = 123;
maryScore1 = 97;  // 97
maryScore2 = 134; // 134
maryScore3 = 105; // 105
var johnAvg, mikeAvg, maryAvg;
johnAvg = (johnScore1 + johnScore2 + johnScore3) / 3
mikeAvg = (mikeScore1 + mikeScore2 + mikeScore3) / 3
maryAvg = (maryScore1 + maryScore2 + maryScore3) / 3
*/

// finding sum using .reduce on the array - 
/*
var arrSum = arr => arr.reduce((a, b) => a + b, 0); // sums paramaters, starting at zero
console.log(arrSum([89, 120, 103]));
console.log(arrSum([116, 94, 123]));
console.log(arrSum([97, 134, 105]));
*/

/*
// finding average value using .reduce on the array

const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length

var johnAvg = arrAvg([89, 120, 103]);
var mikeAvg = arrAvg([116, 94, 123]);
var maryAvg = arrAvg([97, 134, 105]);


console.log("John's team had an average score of " + johnAvg); // original Avg = 104
console.log("Mike's team had an average score of " + mikeAvg); // original Avg = 111
console.log("Mary's team had an average score of " + maryAvg); // original Avg = 112 (winner)


if ((johnAvg > mikeAvg) && (johnAvg > maryAvg)) {
    console.log("John's team wins, with an average score of " + johnAvg);
} else if ((mikeAvg > johnAvg) && (mikeAvg > maryAvg)) {
    console.log("Mike's team wins, with an average score of " + mikeAvg);
} else if ((maryAvg > johnAvg) && (maryAvg > mikeAvg)) {
    console.log("Mary's team wins, with an average score of " + maryAvg);
} else if ((johnAvg > maryAvg) && (johnAvg == mikeAvg)) {
    console.log("There was a tie between John and Mike's team, with an average score of " + johnAvg);
} else if ((johnAvg > mikeAvg) && (johnAvg == maryAvg)) {
    console.log("There was a tie between John and Mary's team, with an average score of " + johnAvg);
} else if ((maryAvg > johnAvg) && (maryAvg == mikeAvg)) {
    console.log("There was a tie between John and Mike's team, with an average score of " + maryAvg);
}

*/



/**************************************************************
 * 
 * Coding Challenge 2: SOLUTIONS (from the lecturer)
 * 
***************************************************************


var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

/* this is the code for those who did not do the bonus with Mary's team.
if (scoreJohn > scoreMike) {
    console.log("John's team wins with " + scoreJohn + " points.");
} else if (scoreMike > scoreJohn) {
    console.log("Mike's team wins with " + scoreJohn + " points.");
} else {
    console.log('There is a draw.');
} */
/*
if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log("John's team wins with " + scoreJohn + " points.");
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log("Mike's team wins with " + scoreMike + " points.");
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log("Mary's team wins with " + scoreMary + " points.");
} else {
    console.log('There is a draw.');
} */



/**************************************************************
 *
 * Functions
 *
***************************************************************


function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(Year, firstName) {
    var age = calculateAge(Year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

*/

/**************************************************************
 *
 * Function Statement and Expressions
 *
***************************************************************

// Function Declaration
function whatDoYouDo(job, firstName) {
}
*/

/*

// Function Expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':                                   // returns value and finishes function
            return firstName + ' teaches kids how to code'; // Don't need to use 'break'
        case 'driver':
            return firstName + ' drives a cab.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does soemthing else...';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/**************************************************************
 *
 * Arrays
 *
***************************************************************

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);    // less common way of defining an array.

console.log(names[0]);  // accesses element zero of the array - 'John'
console.log(names.length);  // returns the length of the array

// Mutate array data
names[1] = 'Ben';   // changing the element in index [1] to "Ben"

names[names.length] = 'Mary';   // adding as the last element in an array.

console.log(names);     // returns ["John", "Ben", "Jane", "Mary"]

// Different Data Types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); // adds element to the end of the array.

john.unshift('Mr.'); // adds to the beginning of the array.

john.pop();     // removes the last element of array

john.shift();   // removes first element of array

console.log(john);

console.log(john.indexOf(1990)); // indexOf returns the position of passed in value in the array
                                // if the value isn't present in the array, returns -1
// .indexOf() is useful for testing whether a value is in an arraay.

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer.' : 'John IS a designer';
                                            // ternary operator
console.log(isDesigner);
*/


/**************************************************************
 *
 * Coding Challenge 3
 *
***************************************************************

John and his family went on a holiday and went to 3 different restaurants.  The bills were 
$124, $48, and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He wants to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips ( one for each bill).
2) Containing all three final paid amounts (bill + tip).


function tipCalculator(bill) {
    var percentage;      

    if (bill <= 50) {
        percentage = .2;
    } else if (bill > 50 && bill <= 200) {
        percentage = .15;        
    } else if (bill > 200) {
        percentage = .1;
    }
    return percentage * bill;

}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
var total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, total);
*/


/**************************************************************
 *
 * JavaScript Object Literals
 *
***************************************************************
*/

/* Easiest way of creating a new object is with 'object literals'

A JavaScript object literal is a comma-separated list of name-value pairs wrapped in curly braces. Object literals encapsulate data, enclosing it in a tidy package. This minimizes the use of global variables which can cause problems when combining code.

The following demonstrates an example object literal:

var myObject = {
    sProp: 'some string value',
    numProp: 2,
    bProp: false
};

Object literal property values can be of any data type, including array literals, functions, and nested object literals. 
Here is another object literal example with these property types:

var Swapper = {
    // an array literal
    images: ["smile.gif", "grim.gif", "frown.gif", "bomb.gif"],
    pos: { // nested object literal
        x: 40,
        y: 300
    },
    onSwap: function() { // function
        // code here
    }
};

Object literals are defined using the following syntax rules:

A colon separates property name from value.
A comma separates each name-value pair from the next.
There should be no comma after the last name-value pair.




/**************************************************************
 *
 * Objects and Properties
 *
***************************************************************


// Object Literal - initializing an object
var john = {            // created an object called john
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
//console.log(john);    // This will access the object called john, listing everything from above


// can use the "dot notation" --> objectName.keyName    to access and mutate/change data.

console.log(john.firstName); // To read the value of the key "firstName", use the . (.firstName)

// can use brackets to retreive an element.
console.log(john['lastName']);      // must call upon the key name as a string, with quotes

// can also set a variable equal to an object's key name to retrieve a value
var x = 'birthYear';    // key name is 'birthyear'
console.log(john[x]);   // calling object's key name to retrieve its value - 1990


// to mutate the data
john.job = 'designer';      // changed job from teacher to designer
john['isMarried'] = true;   // changed isMarried to true
console.log(john);


// another way of initializing an object

// new Object() syntax
var jane = new Object();    // creates an empty object called jane, which can be filled afterwards
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith'; // 
console.log(jane);
*/


/**************************************************************
 *
 * Objects and Methods
 *
***************************************************************

In the previous lecture, we learned that an object can hold different types of data, including arrays and even other objects.

However, we can also attach functions to objects.  And these functions are then called METHODS.

// using object from last lecture, we want to add a function, which will be called a method, to this john object in order to calculate the age of john.
var john = {            
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {      // created a function/method inside object to return birthyear
        return 2019 - this.birthYear;   // using return
    }
};
// calling the function -->      objectName.functionName(value)
//console.log(john.calcAge(1990));

// using the 'this' keyword
//console.log(john.calcAge());    // function uses 'this' keyword, which passes 'this'.birthyear value

// if we wanted to store the result right in the john object.
/*      can be done by declaring variable, setting it equal to object's method call,
            then setting the object's key (john.age) equal to the RESULT of fcn/method call (age)
var age = john.calcAge();
john.age = age;
console.log(john.age); */

// the above can be done in one line, as followed:
//john.age = john.calcAge();

/*
// using 'this' keyword instead of return in function.  
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function (birthYear) {   // created a function/method inside object to return birthyear
        this.age = 2019 - this.birthYear;
    }
};

john.calcAge();         //calling the object's function (which is a method)
console.log(john);
*/


/*************************************************************************************
 *
 *                                  Coding Challenge 4
 *
 *************************************************************************************
 
 From coding challenge 1
 Mark and John are trying to compare their BMI (Body Mass Index), Which is calculated
 using the formula: BMI = mass / height^2 = mass / (height * height).
 (mass in kg, height in meters).

 Now, we want to implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height.
2. Add a method to each object to calculate the BMI and save it to the object, and return it from the method.
3. At the end, log to the console who has the highest BMI, including the full name and respective BMI.
(Don't forget they might have the same BMI)


var mark = {
    fullName: 'Marky Mark',
    mass: 88,
    height: 1.75,
    calcBMI: function (mass, height) {
        this.bmi = this.mass / (this.height*this.height);
    }
}

var john = {
    fullName: 'Johnny Banana',
    mass: 98,
    height: 1.85,
    calcBMI: function (mass, height) {
        this.bmi = this.mass / (this.height * this.height);
    }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(mark.fullName + " has the higher BMI at: " + mark.bmi);
} else if (john.bmi > mark.bmi) {
    console.log(john.fullName + " has the higher BMI at: " + john.bmi);
} else {
    console.log(mark.fullName + ' and ' + john.fullName + ' have the same BMI: ' + mark.bmi);
}


// The lecture's solution is almost exactly like this, so no need to copy it here.
*/


/**************************************************************
 *
 * Loops and Iteration
 *
***************************************************************
Like the if/else statement, loops are another form of the control structures
*/

// for loop -->     for (initial value of counter variable; condition; counter update)
/*
for (var i = 1; i < 11; i++) {
    console.log(i);
} */
/*
var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// while loop - declare counter variable outside of while loop, add counter update inside loop.

var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}


// continue and break statements

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// using typeof to check if element is a string, and print that string to console.
for (var i = 0; i < john.length; i++) {   
    if (typeof john[i] !== 'string') continue;  // can be written on a single line of the if statement
    console.log(john[i]);
}

// break - exits the loop
for (var i = 0; i < john.length; i++) {  // loop ends once it encounters something that isn't a string
    if (typeof john[i] !== 'string') {
        break;
    } 
    console.log(john[i]);
}
*/

/***************     mini-Challenege - Iterating backwards through a loop   ********************

Loop through the john array in the opposite direction.  Starting from the end ('blue')


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = john.length - 1; i >= 0; i--) {    
    console.log(john[i]);
}*/




/*************************************************************************************
 *
 *                                  Coding Challenge 5
 *
 *************************************************************************************

John and his family went to 5 different restaurants...
The bills were: $124, $48, $268, $180, and $42.

He wants to tip 20% when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:

1. Create an object with an array for the bill values.
2. Add a method to calculate the tip.
3. Method should include a loop to iterate over all the paid bills and do the tip calculations.
4. As an output: create a new array containing all tips, create an array containing final paid amount.
(Hint: Start with two empty arrays [] as properties and then fill them up in the loop)

// My solution

var john = {
    bill: [124, 48, 268, 180, 42],
    tips: [],
    total: [],
    calcTip: function (bill) {
        for (var i = 0; i < this.bill.length; i++) {            

            if (this.bill[i] < 50) {
                this.tips.push(((this.bill[i])* .2));
                this.total.push(this.bill[i] + ((this.bill[i]) * .2))
            } else if (this.bill[i] >= 50 && this.bill[i] <= 200) {
                this.tips.push(((this.bill[i]) * .15));
                this.total.push(this.bill[i] + ((this.bill[i]) * .15))
            } else if (this.bill[i] > 200) {
                this.tips.push(((this.bill[i]) * .1));
                this.total.push(this.bill[i] + ((this.bill[i]) * .1))
            }
            
        }

    }
}

john.calcTip();

************************************************************************************************



// Lecturer's Solution  - Much cleaner due to decalring variables for % and this.bills[i]

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules in challenge
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill< 200) {
                percentage = .15;
            } else {
                percentage = .1
            }

            // add results to corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + (bill * percentage);

        }
    }
}

john.calcTips();
console.log(john);
*/


for (var i = 0; i < 10; i++) {
    console.log(i);
}
