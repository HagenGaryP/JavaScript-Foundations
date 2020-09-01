/**************************************************************************************************
*
*                                    OBJECT SYNTAX
*
*************************************************************************************************** 


**************      ACCESSING KEY/VALUE PAIRS       ***********

dot-notation is used to access the properties of an object. 

Picture a dictionary, the dictionary is an object and every word in the dictionary is 
a property ( or key) that also has a corresponding definition (value).
*/

// using dot-notation to create a property and to access a property on the object.

const coffee = {}

// dot-notation is used to define properties and values

coffee.iced = true;
coffee.milk = false;
coffee.size = 'venti';

// dot-notation is used to access the value assigned to a property
console.log(coffee)
console.log(`coffee.iced value:  ${coffee.iced}`);


/*
When using dot-notation, keep in mind the name of the property needs to be a valid variable name. 

The exception to this rule is to use bracket notation to define properties.



************    BRACKET NOTATION    *********

Bracket notation is used to create properties on an object. 

The object property name can be any valid JavaScript string or anything that can be converted 
or evaluated to a string (even an empty string with no space is a valid property name). 
*/

const one = () => {
    return 'one';
}

const twoStr = 'two';
const numbers = {}

numbers[one()] = 1; // the one function returns the string 'one'
numbers[twoStr] = 2; // twoStr evaluates to the string 'two'
numbers['three'] = 3;

console.log(numbers);




// ************   STANDARD VS SHORTHAND PROPERTIES    ************

// Here is an example of initializing an object with property names and values assigned to variables.

// standard
let one = 1;
let two = 2;
let three = 3;

// Standard Property Syntax

const numbers = {
    one: one,
    two: two,
    three: three
}
console.log(numbers); // Object {one: 1, three: 3, two: 2}



// Shorthand Property Syntax:

let one = 1;
let two = 2;
let three = 3;

// ***** Shorthand Property Syntax: Do you notice the difference? *****
const numbers = {
    one,
    two,
    three
}

console.log(numbers); // Object {one: 1, three: 3, two: 2}

/*
Notice, when assigning properties and values, if the variable name is the desired property name (same identifier), 
you don't have to include the colon syntax separating the name of the property and value.
*/

// When defining a method you can use shorthand method function definition syntax, e.g.

const dailyCalendar = {
    getTimeAndDate: function getTimeAndDate() {
        // note: new Date creates a new date object, if you are not familiar with Date objects, that is okay!
        return (new Date()).toLocaleString();
    }
}

// Shorthand Method Definition Syntax

const dailyCalendarMethodShorthand = {
    getTimeAndDate() {
        return (new Date()).toLocaleString();
    }
}

console.log(dailyCalendarMethodShorthand);
