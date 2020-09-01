
/*********************************************************************
* 
*          Imperative vs Declarative
* 
**********************************************************************

(Haven't taken notes on this section yet)

 */


/*********************************************************************
*
*          Pure Functions
*
**********************************************************************

A pure function is a function that given the same input (an argument) 
    produces the same output and does not have any observable side effects.


A pure function has nothing to do with the type of syntax used to make the function,
instead it has to do with HOW YOU DEFINE the function, and its behavior.



*/

// given the same input, a pure function will produce the same output.

const square = (num) => {
    return num * num;
}

console.log(square(5));  // output: 25    

// it works, but is it a pure function?  Test that by running multiple times.
console.log(square(5));  // output: 25  
console.log(square(5));  // output: 25  
console.log(square(5));  // output: 25  
console.log(square(5));  // output: 25  
console.log(square(5));  // output: 25  

/*
notice we're getting the same exact output when given the same input.
so, this is a pure function.

One of the benefits of a pure function is that they are predictable; we know that
when we pass in a specific value there will always be the same return value.

the square function's dependencies are only contained within its own scope.
This makes pure functions very "portable".
Since they are not dependent on their external environment, they can be copy/pasted.



Pure functions are independent and should not manipulate or depend on outside state or scope in a program.

Here are a few benefits of pure functions:

    - they are predictable.
    - since they are independent (they don't use values in their surrounding environment), 
        they are easy to reuse in your program.
    - pure functions simplify state management (calling a pure function will not affect the state of other components 
        of a program because pure functions have no side effects).
    - it is easy to test pure functions since they are predictable (consider the .toBe and .toEqual, it's easier 
        to pair these matches with a predictable return value)
*/




/*
                            SIDE EFFECTS

A function is considered to have "side effects" if it manipulates the state of the program or has 
    an observable effect on the program. 
    
Here is a short list of side effects (there are plenty more!):

    - re-assigning a new value to a variable.
    - mutating an object

*/

// observe side effects, by introducing a side-effect to our program.  
// Here we use the square function again, but create another variable defined outside scope.

let number = 10;   // number is in global scope

const square = (num) => {
    number++;
    return num * num;
}

// view the side effect:  Even though the function is still acting like it's pure, 'number' changes.

console.log(number);    // output: 10 
console.log(square(5));  // output: 25 
console.log(number);    // output: 11 

// pure functions should not have this behavior; using something from its external environment.


// another example of a side effect

const myObj = {};           // 1) originally an empty object.

const decorator = (obj) => {
    obj.a = 'a';            // 3) Once func is called, a property is being added onto that object. (side effect)
}

decorator(myObj);           // 2) Then we call the 'decorator' function, and pass in 'myObj'

console.log(myObj);


/*

Side effects and impure functions are inevitable in any program. 


The Functional Programming paradigm enforces the idea to try and use pure functions as often as possible 
until an impure function is necessary. Let's review a few key points of this section:

    - A function has side effects if it changes external state (such as values in its parent scope).

    - Impure functions are inevitable and aren't intrinsically bad, but they can lead to complexity 
        (such as evaluating the pitfalls of their side effects).

    - A pure function has no observable side effects and given the same input; it will provide the same output.

    - Side Effects = a change observed (somewhere) outside the scope of the function

*/


/*********************************************************************
*
*          Higher Order and First Class Functions
*
**********************************************************************

Functions in JavaScript are considered to be "first-class"; 

The characteristic of first-class functions is that they are treated like an object, 
    boolean, string, number, etc.. ***** they are treated as a value. *****

This means they can be:

    - returned from a function.

    - passed as an argument to a function.

    - assigned as a variable, as a method, or stored in an array.



ASSIGNMENTS:

Functions, just like objects (since functions are special types of objects) 
can be assigned to a variable or attached as a method on an object.


*/

// Function Expression
const firstClass = () => {
    return 'I am a first-class Function!';
}

// method
const obj = {
    firstClass() {      // function is being used a method - but it's being used a value
        return 'I am a first-class function';
    }
}

// the shorthand syntax covers up the assignment expression, e.g.

const obj = {
    firstClass: function () {
        return 'I am a first class function';
    }
}






// How to store functions in arrays

const red = () => {
    return 'red';
}

// shorthand syntax with arrow func, one liners dont need {} or return bc it's implicit.
const blue = () => 'blue';

const arrayOfFunctions = [red, blue];

console.log(arrayOfFunctions); // can see the functions are being stored in arr as a value.

// accessing index zero of array, 'red', which is a function
console.log(arrayOfFunctions[0]());     // notice parentheses, (), meaning red() is being invoked.




// HIGHER ORDER FUNCTIONS - A function that returns a function. (also a characteristic of first-class functions).
//                          We already used higher order functions when we created closure.

// Code example

// stranger is a function
const stranger = () => {
    // things is the value the stranger function returns
    return function things() {
        return "stranger things";
    }
};
// console.log(stranger()); would return the 'things' function in console. 

const funcReturned = stranger();

console.log(funcReturned); // this is the things function
console.log(funcReturned()); // the `things` function return value

/*******************************************************************************************
 * IMPORTANT CONCEPT: What happens when setting a variable to a function call?
********************************************************************************************
When setting a variable to a function and invoking with (),
     that variable is set to what that function (stranger()) returns.
*/

/*
We can have similar behavior if we were to eliminate the variable the "things" function is 
    assigned and invoke things immediately after it is returned.
*/
// stranger is a function
const stranger = () => {
    // things is the value the stranger function returns
    return function things() {
        return "stranger things";
    }
};

stranger()(); // double parentheses
/*
The first set parentheses invoke the "stranger" function and the "things" function is returned.
The second set of parentheses invokes the "things" function and gives its return value.
*/


/*********************************************************************
*
*          FUNCTIONS AS ARGUMENTS
*
**********************************************************************

A function can be passed as an argument. 

Let's use the "red", "green", and "blue" functions from earlier and pass them 
    to the "push" method to populate an array.
*/

const arrayOfFunctions = [];

const blue = () => {
    return 'blue';
};

// the idea here is that we are passing the function as an argument to a method (which is a function).

arrayOfFunctions.push(blue);  // The function 'blue' is passed as an arg




function goodMorning() {
    return "Top of the morning to ya";
}

const greeter = (funcArg, name) => {
    return `${funcArg()}, ${name}`;     // the function being passed in as an argument is INVOKED HERE.
}

console.log(greeter(goodMorning, 'Scott'));

// funcArg represents the function you want to pass in to the greeter function as an argument.
// Here that is the goodMorning function, but it could be another function we defined as well.

