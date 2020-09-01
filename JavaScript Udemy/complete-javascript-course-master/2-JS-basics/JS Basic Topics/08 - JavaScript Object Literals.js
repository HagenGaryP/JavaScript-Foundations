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

