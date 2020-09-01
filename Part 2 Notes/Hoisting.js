/*
Hoisting

Hoisting represents that all variable and function declarations are moved to the top of 
    your program before the program executes.

*/

// So far, this is the order in which we've been writing our code.
function financialDistrict() {
    console.log("let's go to the seaport!");
}

var fidi = 'fidi';

financialDistrict();

console.log(fidi);
/*
Output: let's go to the seaport!
        fidi
*/


// Now what if we moved our function invoke and console.log(fidi) to the top?

financialDistrict(); // functions can be called before their code block - HOISTING

console.log(fidi); // undefined - using a variable before it's declared.

function financialDistrict() {
    console.log("let's go to the seaport!");
    console.log("this function executed?");
}

var fidi = 'fidi';

/*
Output: let's go to the seaport!
        this function executed?
        undefined
*/



//  The Temporal Deadzone  (TDZ)
/*
You can NOT use any variables declared with 'let' or 'const' before 
    they are initialized in your program.  

The code is still actually hoisted, but when using 'let' or 'const' those variables/functions
    are placed inside an area called the Temporal Dead Zone.

Therefore, if you want to use a variable defined with 'let' or 'const', you will have to
    use them after they are declared and initialized.
*/

// redefining with const and let keywords instead of var

financialDistrict(); // the function being invoked is declared with const, needs to be after fnc

console.log(fidi); // must be after declaration

const financialDistrict = function financialDistrict() {
    console.log("let's go to the seaport!");
    console.log("this function executed?");
}

let fidi = 'fidi';

/*
Output: Uncaught ReferenceError: financialDistrict is not defined
*/
