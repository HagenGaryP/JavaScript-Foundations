
/* *************        Conceptual Overview         ********************

What happens to our code?

Focusing on just the browser in this course - When we write our JavaScript code and actually want to run it - What happens behind the scenes?

Where the JS is hosted, there is some kind of JS engine that takes the code and executes it.
In simplified terms, a JavaScript engine is a program that executes JavaScript code.
There are many different engines - Google's V8 engine, which is used in Google Chrome, SpiderMonkey, JavaScript Core, and many others.

1) The first thing that happens inside the engine is that the code enters a PARSER, which basically reads the code line by line, checking the syntax.
    A parser is a compiler or interpreter component that breaks data into smaller elements for easy translation into another language. A parser takes input in the form of a sequence of tokens or program instructions and usually builds a data structure in the form of a parse tree or an abstract syntax tree.

If there are mistakes, it will throw an error and stop the execution of the script. 

If everything is correct, the parser produces a data structure known as the ABSTRACT SYNTAX TREE, which is then translated into machine code.  Machine code is no longer JavaScript code, but instead is the set of instructions that will be exectued directly by the computer's processor.

There is much more going on behind the scenes, and different engines do things in a slightly different way. But this is enough for us to understand at this point.

*/


/***************************************************************************************************
 * 
 * Execution Contexts and the Execution Stack
 * 
****************************************************************************************************

Now let's focus on the order in which the code is run. 

All JavaScript code needs to run in an environment called execution contexts.

So you can imagine an execution context like a box or container, which stores variables,
and in which a piece of our code is evaluated and executed.

The Default Execution Context is always the GLOBAL CONTEXT - 
    for variables that are not in any function.
You can think of an execution context as an object - 
    Global context is associated with the global object.  In a browser, this is the window object.
    So everything declared in the global context is automatically attached to the window object in the browser.

    Declaring a variable called lastName or window.lastName is the exact same thing.  
    For example:
                lastName === window.lastName        // true

 The variable, lastName, is a property of the window object.  And properties are just variables attached to objects.
    
GLOBAL EXECUTION CONTEXT
    - Code that is NOT inside any function is executed.
    - Associated with the global object.
    - In the browser that's the window object.


What about code that IS inside functions?  Each time we call a function, it gets its own brand new execution context. */

// For example:

// not in any function - Global Execution Context here
var name = 'John';          // This variable is stored in a global object

function first() {      // This function declaration is also in a global context.

    var a = 'Hello!';   // stored in the execution context for THIS function, and not in global
    second();
    var x = a + name;
}

function second() {     // Also in global context.. so, still in the same execution context.

    var b = 'Hi!';
    third();
    var z = b + name;
}

function third() {      // In global context.. same execution context.

    var c = 'Hey!';
    var z = c + name;
}

first();        // Calling function - gets a new execution context.

/*************************       Execution Stack       ****************************
 * 
 *      Starts with Global Execution Context
 *
This includes the declaration of the following: 

var name = 'John';

function first()
function second()
function third()

***************        Function first()   Execution Context    ***********************

This new context is put on top of the current context, forming the EXECUTION STACK.
So, for the duration of this 'first' function call, the execution stack for that function becomes the active context in which the code is executed.

var a = 'Hello!'; gets stored in the execution context for THIS function, and not in global.

When second(); function is called, a new execution context will be created and put on top of the
    execution stack, making it the active context.

***************        Function second() Execution Context    ***********************

variable 'b' - gets stored inside the execution context for function second()

Then the function third() is called, which creates another new execution context and placed on top of the stack.

***************        Function third() Execution Context    ***********************

The two variable declarations are stored in the third() function's execution context, and so the
function gets "returned", meaning the function has completed its task.

When an execution context is completed, that context is removed from the top of the stack.

So, third()'s execution context is removed, making the context of the second() function, the currently active context.

***************        Function second() Execution Context    ***********************
var z = b + name;

The variable z gets stored in the currently active context - second() execution context.
Then function second() returns and pops off the execution stack.

This makes first() the active execution context once again...

***************        Function first()   Execution Context    ***********************

var x = a + name;    gets stored in this context. 

Then this function returns and is popped off the stack, making the global execution context the active context once again.

And so, all 3 functions have been executed, 3 execution contexts were created, and each of the
    function's respective execution contexts were popped off the stack when the functions returned.
*/



/***************************************************************************************************
 *
 * Execution Contexts in Detail: Creation and Execution Phases and Hoisting
 *
****************************************************************************************************

we can associate an execution context with an object, having three properties:

1) the VARIABLE OBJECT (VO), which will contain function arguments, inner variable declarations,
as well as function declarations.

2) the SCOPE CHAIN, which contains the current variable objects, as well as the variable objects of all its parents.

3) The "this" variable


To recap, when a function is called, a new execution context is created
    and placed on top of the execution stack.  

This is happening in two phases: The Creation phase and the execution phase.

    1) The Creation Phase:
        a) Creation of the Variable Object (VO)
        b) Creation of the scope chain
        c) Determines and sets value for the 'this' variable

    2) The Execution Phase:
        The code of the function that generated the current execution context is ran.
        This code is then read line by line, and all the variables are defined.
        If it's a global context, then it's a global code that is executed.   


**********      The Creation of the Variable Object         ********

The argument object is created, containing all the arguments that were passed into the function.

The code is scanned for FUNCTION DECLARATIONS: for each function, a property is created
    in the Variable Object, POINTING TO THE FUNCTION.  Meaning, all the functions will be stored
    inside the VO, even before the code starts executing.

Lastly, the code is scanned for VARIABLE DECLARATIONS: for each variable, a property is created
    in the Variable Object and set to undefined.


*************           HOISTING            *************
        
Hoisting - is a term used for when the code is scanned for function AND variable declarations.

Functions and variables are hoisted in JavaScript, which means they are avaiable for use before
    the execution phase actually starts, but they are hoisted in different ways.

    Functions are already defined before the execution phase starts.

    Variables are set as undefined, and only defined in the execution phase.

Conceptually, for example, a strict definition of hoisting suggests that variable and function 
declarations are physically moved to the top of your code, but this is not in fact what happens. 
Instead, the variable and function declarations are put into memory during the compile phase, but 
stay exactly where you typed them in your code.

One of the advantages of JavaScript putting function declarations into memory before it executes any
code segment is that it allows you to use a function before you declare it in your code.

Hoisting works well with other data types and variables. The variables can be initialized and used before they are declared.

JavaScript only hoists declarations, not initializations. If a variable is declared and initialized after using it, the value will be undefined. For example:

console.log(num); // Returns undefined
var num;
num = 6;

If you declare the variable after it is used, but initialize it beforehand, it will return the value:

num = 6;
console.log(num); // returns 6
var num;



/***************************************************************************************************
 *
 * Hoisting in Practice
 *
****************************************************************************************************
// start by writing a simple function, which we've used before.

// calling the function before declaring it.

calculateAge(1990);         // returns 29, even though it's called before being declared

function calculateAge(year) {
    console.log(2019 - year); 
}


// using function expressions - Hoisting will not work.  Must call function after its expression.

//retirement(1950);       // can't be called before

var retirement = function(year) {
    console.log(65- (2019 - year));
}
retirement(1990);
// Hoisting with functions only works for function declarations, NOT function expressions.


// Variables    -   what happens when we try to use the variable before it is declared?

console.log(age);   // undefined
var age = 23;
console.log(age);

// variables that don't have a value yet will have the data type 'undefined'


function foo() {
    var age = 65;
    console.log(age);   // prints 65, since age = 65 is locally defined inside function foo()
}

foo();
console.log(age);       // globally defined as 23




/***************************************************************************************************
 *
 * Scoping and the Scope Chain
 *
****************************************************************************************************

Scoping answers the question, "where can we access a certain variable?"

Each new function creates a scope: 
    the space/environment in which the variable it defiens is accessible.

In many other programming languages, a scope is also created by "if", "for", or "while" blocks.
This is NOT the case in JavaScript.

In JS, the only way to create a new scope is to write a new function.  But JS has Lexical scoping.

LEXICAL SCOPING: a function that is lexically within another function, or where something is written
                    in the code, gets access to the scope of the outer function (parent function).

hahaaaa

*/
// First scoping example

/*
var a = 'Hello!';       // everything is included in the global scope [VO global]
first();

function first() {
    var b = 'Hi!';                  // start of first() scope [vo1] + [VO global]
    second();

    function second() {
        var c = 'Hey!';             // second() scope [VO2] + [VO1] + [VO global]
        console.log(a + b + c);     // second() scope [VO2] + [VO1] + [VO global]
    }    // end of first() scope [vo1] + [VO global]
}
// the above scoping example code prints "Hello!Hi!Hey!" to the console.

This works because of the scoping chain.  Due to the scoping chain, the second() function
    has access to the variables of the first() function and the global scope's variables.
The reason for that is because the second() function is written INSIDE of the first(),
    which in turn, is written inside of the global scope, and is why we call it lexical scoping.

A scope has access to the scope of the function in which it sits lexically.

When a variable is being used, it checks its local scope first, if its definition isn't found
    it will look to its parent scope, or even the global scope.

This only works in the one direction, from inner scope to the outer (parent) scope, to global.

So, Locally scoped variables are not visible to their parent scopes.


A CLOSURE is the combination of a function bundled together (enclosed) with references to its 
surrounding state (the lexical environment). In other words, a closure gives you access to an outer 
function’s scope from an inner function. In JavaScript, closures are created every time a function is 
created, at function creation time.

*************       Execution Stack vs Scope Chain      **************

Execution Stack is the order in which functions are called: global -> first() -> second() -> etc..
    For each call, a new execution context is put on top of the stack.

The Scope Chain is the order in which functions are written lexically.

*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';     // global - first(), second(), and third() will have access to this
first();

function first() {
    var b = 'Hi!';      // first() and second() scope access - second() is INSIDE of first()
    second();

    function second() {
        var c = 'Hey!';     // only second() scope has access - parent can't access children
        third()
    }
}

function third() {      // thrid() scope has access to var 'a' and 'd' only
    var d = 'John';
    console.log(a + b + c + d);     // error:'b' and 'c' are not defined within this scope
}

The global scope contains var a = 'Hello!', as well as the first() and third() functions.
Then the scope of the first() function contains the second().

So, the execution stack is the order in which these functions are called, where as the
    Scope chain the order in which functions are written in the code.

Which means that the order in which functions are called does NOT determine the scope of 
    the variables within these functions.  Instead, what determines the scope of variables
    is where the functions are written.

Since the third() function is not in the scope of the second() function, it cannot access
    variables 'b' and 'c', because they are not defined within the third() function's scope.
    But third() can access its own variable 'd', as well as the global var a = 'Hello!'


So, it is execution contexts that store the scope chain of each function in the Variable Object(VO)
    but they do not have an effect on the scope chain itself.
*/


/***************************************************************************************************
 *
 * The 'this' Keyword
 *
****************************************************************************************************

The last stop of thee creation phase is determining and setting the value of the 'this' keyword/var

The 'this' is a variable that every execution context gets, stored in the execution context object.

In a regular function call, the 'this' keyword points at the global object, (window object, in browser).

In a method call (a function that is attached to an object), the 'this' variable points to the 
    object that is calling the method.

The 'this' keyword is NOT assigned a value until a function where it is defined is actually called.

Even though it appears that the 'this' variable refers to the object where it is defined,
it technically is only assigned a value as soon as an object calls a method.

Should make sense, since the 'this' keyword is attached to an execution context, which is only
created as soon as the function is invoked/called.



//console.log(this);      // returns the "Window" object.

calculateAge(1990);

function calculateAge(year) {
    console.log(2019 - year);       // returns 29
    console.log(this);              // returns window object since 'this' is attached to global object
}


var john = {                        // object
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {      // the method - function attached to object 'john'

        console.log(this);          // 'this' variable is now the 'john' object.

        console.log(2019 - this.yearOfBirth);   // this.yearOfBirth === john.yearOfBirth -> 29


        function innerFunction() {  // not a method, but a function written inside of method

            console.log(this);  // 'this' var inside innerFunction() attached to default global object
        }
        innerFunction();
    }
}

john.calculateAge();

// creating another object to use calculateAge on using METHOD BORROWING
var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge; // treating function as a variable, not calling fuction with ()
// then actually call the function.
mike.calculateAge();    // calls the function (method) borrowed from the john object. 

/*
The above shows how the 'this' variable is only assigned a value when the object calls the method.

The 'this' variable is attached to the john object, but when we call the same method from a 
completely different object, the mike object, the 'this' variable becomes attached to mike object.

*/

