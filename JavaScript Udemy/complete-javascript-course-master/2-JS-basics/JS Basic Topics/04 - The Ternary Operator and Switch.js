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