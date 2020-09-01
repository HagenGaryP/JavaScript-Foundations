/*
What is Scope?  

The "Scope" of a variablle determines where it is accessible in your program based off
of where it was created.

Scope determines the accessibility of identifiers (e.g., variables) and values in
a SPECIFIC SECTION OF SOURCE CODE DURING RUNTIME (determines what your program has access to).

Identifier (e.g., variable) name resolution depends on the LOCATION IN THE SOURCE CODE where
the named variable or function (the identifiers) is defined.

Scopes are in a hierarchy, so that child scopes have access to parent scopes, but not vice versa.

The term "scope" is a general programming term used across multiple languages (not just JS)
to describe the LEXICAL ENVIRONMENT, which is a more "technical" definition of scope in JS.

*/

// Scope answers the question "who has access to what?"  e.g.,

var global = 'global';
let scope = 'scope';

function functionScope() {
    var myScope = 'myScope';
    console.log(myScope);
    console.log(global); // are global and "scope" variables accessible in the function?
    console.log(scope);
}

functionScope();

// block code
{
    let block = 'block';
    let scope = 'scope';
    console.log(global);
}

// is the 'block' variable accessible outside of the block statement (the code inside the { } )
console.log(block);


// It is important to learn the scoping rules of the 'var' keyword compared to 'let' and 'const'.




/*****************************      Different types of scope        ****************************

*******************
1) Global Scope - 
*******************

Contains the variables and functions that are not defined within another function or block.
Every variable, function, etc... defined in the GLOBAL SCOPE is accessible by anything in your program.

Every type of scope supports a nesting hierarchy structure where the GLOBAL SCOPE IS ALWAYS THE "PARENT"
(TOP LEVEL) SCOPE to function and block scopes (children).  

Every "scope" in the hierarchy (scope chain) has access to the "Global Scope".


It is considered bad practice to "polute" the global scope and depend on identifiers defined in the
global scope.  
A polluted global scope can introduce namespace collisions, make your code less reusable, and can lead 
to bad programming habits, such as functions that are reliant on variables in the global scope.
*/

// Here's an example of variables defined in the global scope

// Global Scope
var the = 'the';
const global = 'global';
let scope = 'scope';

console.log(`${the} ${global} ${scope}`);



/**********************
    2) Function Scope
***********************

Variables defined within a function's code block are scoped to the function (the function's code block)
and only accessible within the function.
*/

// Here's an example:

/* GLOBAL SCOPE */

const definedInGlobalScope = 'global'

function rubberDuck() {
    /* FUNCTION SCOPE */
    var rubber = 'function';
    let duck = 'scope';


    console.log(`within the function scope, rubber: ${rubber}, duck: ${duck}`);
    console.log(`the function scope is nested within the global (parent) scope and has access to the definedInGlobalScope variable: ${definedInGlobalScope}`);

}

rubberDuck(); // the rubber and duck variables are accessible within the function's code block

console.log(rubber, duck); // A Reference Error is thrown because rubber and duck are not defined or accessible in the global scope

/*
The variables 'rubber' and 'duck' are contained within the 'rubberDuck' function's scope and unavailable to the global scope.

It is common to use the terminology LOCAL SCOPE when describing the variables contained within a function or block,
e.g., "The 'rubber' and 'duck' variables are defined in the local scope of the 'rubberDuck' function."

The 'rubberDuck' scope is nested within the global scope.  A child or "nested" scope can look outside of its "local" scope
until it finds the identifier referenced or it reaches the top level scope (the global scope) and the identifier isn't found.
*/


/**********************
    3) Block Scope
***********************

Block scope is a new addition to JS, introduced in ES2015, and is a common feature in many other programming languages.


Block scope is created when variables are declared with 'let' or 'const' within a block statement, e.g.
*/

// 'let' and 'const' statements within a block create block scope
{
    const ninja = 'ninja';
    let turtle = 'turtle'

    console.log(`INSIDE the block scope: ninja: ${ninja}, turtle: ${turtle}`);
}

console.log(`OUTSIDE of the block scope (global scope): ninja: ${ninja}, turtle: ${turtle}`); 
// Reference Error - ninja and turtle are only accessible within the block statement

// Initializing ninja and turtle within the block creates a block scope. 
// The variables are defined locally to the block scope and are not accessible to the block's outer scope (the global scope). 


//////////////      THE 'VAR' KEYWORD       //////////////

// The behavior changes when the var keyword is used to initialize variables, e.g.

// var statements do not create block scope
{
    var ninja = 'ninja';
    var turtle = 'turtle'

    console.log(`INSIDE the block statement: ninja: ${ninja}, turtle: ${turtle}`);
}

console.log(`OUTSIDE of the block statement: ninja: ${ninja}, turtle: ${turtle}`); 
// ninja and turtle are accessible in the block and outside, the key difference is initializing variables with `var`


