/***************************************************************************
* 
*                       Misconceptions of `this`
*              
****************************************************************************

1 - THIS DOES NOT REFER TO THE FUNCTION ITSELF:

The initial assumption is that 'this' refers to the function itself. 
Grammatically speaking, it would make sense? 

Don't fall into the trap of interpreting 'this' literally, 'this' has no relation to its English counterpart.
*/
// Notice how `this` is used in the function

function whatIsThis() {
    console.log(this);
}

whatIsThis(); // Is the function `whatIsThis` logged to the console? What does `this` refer to?

/*
In the example, notice an object is logged.

The key takeaway from this example is the object logged is NOT the function object "whatIsThis", 
    which demonstrates 'this' does not refer to itself.


2 - THIS IS NOT A FUNCTION'S SCOPE:

NOTE: This rule applies to function declarations (not arrow functions)

It's common to think 'this' refers to a function's scope. 

'this' is determined by the execution context, or how a function is called. 
It has similarities to scope, but it is not possible for 'this' to refer to a function's scope.



