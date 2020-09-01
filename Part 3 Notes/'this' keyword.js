/************************************************************************
*
*                           The 'this' keyword 
*
*************************************************************************

A function's this keyword behaves a little differently in JavaScript compared to other languages. 
It also has some differences between strict mode and non-strict mode.

Strict mode makes several changes to normal JavaScript semantics:
    1) Eliminates some JavaScript silent errors by changing them to throw errors.
    2) Fixes mistakes that make it difficult for JavaScript engines to perform optimizations:
        strict mode code can sometimes be made to run faster than identical code that's not strict mode.
    3) Prohibits some syntax likely to be defined in future versions of ECMAScript.


In most cases, the value of this is determined by how a function is called (runtime binding). 

It can't be set by assignment during execution, and it may be different each time the function is called. 

ES5 introduced the bind() method to set the value of a function's this regardless of how it's called, 
and ES2015 introduced arrow functions which don't provide their own this binding 
(it retains the this value of the enclosing lexical context).

********************
The 'this' VALUE
******************** 

A property of an execution context (global, function or eval) that, in non–strict mode, 
    is always a reference to an object and in strict mode can be any value.

Global context:

In the global execution context (outside of any function), 
'this' refers to the global object whether in strict mode or not.

Note: You can always easily get the global object using the global 'globalThis' property, 
    regardless of the current context in which your code is running.
*/
// globalThis
function canMakeHTTPRequest() {
    return typeof globalThis.XMLHttpRequest === 'function';
}

console.log(canMakeHTTPRequest());
// expected output (in a browser): true

/*
Function context:
Inside a function, the value of 'this' depends on how the function is called.

    Simple call (function context):
    Since the following code is not in strict mode, and because the value of 'this' is not set 
    by the call, 'this' will default to the global object, which is 'window' in a browser.

    In strict mode, however, if the value of 'this' is not set when entering an execution context, 
    it remains as 'undefined', as shown in the following example: */
function f2() {
    'use strict'; // see strict mode
    return this;
}

f2() === undefined; // true
/*
'this' should be undefined, because f2 was called directly and not as a method or property of an object 
(e.g. window.f2()).  This feature wasn't implemented in some browsers when they first started to 
support strict mode. As a result, they incorrectly returned the 'window' object.


**********************************************************************************************
To set the value of this to a particular value when calling a function, use call(), or apply()
**********************************************************************************************

Function.prototype.call():
The call() method calls a function with a given this value and arguments provided individually.

Note: While the syntax of this function is almost identical to that of apply(), 
    the fundamental difference is that call() accepts an argument list, 
    while apply() accepts a single array of arguments.

Syntax: function.call(thisArg, arg1, arg2, ...)
The parameters are optional, but "thisArg" is the value of 'this' provided for the call to a function.
The parameters after the FIRST, 'thisArg', are arguments passed in the function call.

as in the following examples:        */

// Example 1:

// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = { a: 'Custom' };

// This property is set on the global object
var a = 'Global';

function whatsThis() {
    return this.a;  // The value of 'this' is dependent on how the function is called
}

whatsThis();          // 'Global'
whatsThis.call(obj);  // 'Custom'
whatsThis.apply(obj); // 'Custom'



// Example 2:

function add(c, d) {
    return this.a + this.b + c + d;
}
var o = { a: 1, b: 3 };

// The first parameter is the object to use as 'this', 
// subsequent parameters are passed as arguments in the function call
add.call(o, 5, 7); // 16

// The first parameter is the object to use as 'this', 
// the second is an array whose members are used as the arguments in the function call
add.apply(o, [10, 20]); // 34


/*
Note that in non–strict mode, with call and apply, if the value passed as this is not an object, 
an attempt will be made to convert it to an object using the internal ToObject operation.
So if the value passed is a primitive like 7 or 'foo', it will be converted to an Object using 
the related constructor, so the primitive number 7 is converted to an object as if by new Number(7) 
and the string 'foo' to an object as if by new String('foo'), e.g.*/

function bar() {
    console.log(Object.prototype.toString.call(this));
}

bar.call(7);     // [object Number]
bar.call('foo'); // [object String]


/*
*********************************************
The bind method:    Function.prototype.bind()
*********************************************

Calling "f.bind(someObject)" creates a new function with the same body and scope as 'f',
but where 'this' occurs in the original function, in the new function it is permanently bound
to the first argument of 'bind', regardless of how the function is being used. */

function f() {
    return this.a;
}

var g = f.bind({ a: 'azerty' });
console.log(g()); // azerty

var h = g.bind({ a: 'yoo' }); // bind only works once!
console.log(h()); // azerty

var o = { a: 37, f: f, g: g, h: h };
console.log(o.a, o.f(), o.g(), o.h()); // 37,37, azerty, azerty


/*

**************************************
        Arrow functions
***************************************

In 'arrow functions', 'this' retains the value of the enclosing lexical context's 'this'. 
In global code, it will be set to the global object:
*/

var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true
/*
Note: 
if this arg is passed to call, bind, or apply on invocation of an arrow function it will be ignored.
You can still prepend arguments to the call, but the first argument(thisArg) should be set to null.
*/
// Call as a method of an object
var obj = { func: foo };
console.log(obj.func() === globalObject); // true

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
foo = foo.bind(obj);
console.log(foo() === globalObject); // true
/*
No matter what, "foo's" 'this' is set to what it was when it was created 
(in the example above, the global object). 

The same applies to arrow functions created inside other functions: 
their 'this' remains that of the enclosing lexical context. 




*************************************************
            What-is-this-intro (scott's code)
*************************************************

Seeing how the 'this' keyword can change based on how we use it.

If we look at the diagram for the function execution context, notice 2 main things are created:
1) the Function Lexical Environment (function scope).
2) the 'this' context.

*/

function whatIsThis() {
    console.log(this);
}
// invoking as a normal function with ()
whatIsThis();  // binds 'this' to window object.

// invoking a function with the 'new' operator, considers it to be a constructor function.
new whatIsThis;  // the 'this' keyword is bound to a completely different (empty) object.



// When a function is a method - IMPLICIT BINDING RULE

const obj = {};
// create the property 'whatIsThis' on obj, and assign it to our 'whatIsThis' function
obj.whatIsThis = whatIsThis;  // now obj.whatIsThis is a method

// invoking by calling method on obj
obj.whatIsThis(); // binds 'this' to the object (obj) and it has the 'whatIsThis' method
// expected output:  {whatIsThis: f}

// when we call the function as a method on an object, it references the object we called the method on.


// invoking function using the .call() method

whatIsThis.call({hello: 'world'});  // 'this' references the object that we passed into .call()
// binds the 'this' keyword to the first arg passed in, which was the object {hello: 'world'}



/***************************************************************************
*
* Call - Site & Execution Context
*
****************************************************************************

    It's been mentioned that the value of this is not static, it can change, and it can refer to 
many different values...we did not mention WHY this happens.
The most important concept to determine 'this' is to check the call site​ of the function that uses 'this'.

When you invoke or call a function, the function creates its own.
The execution context is a record of information of code executing such as where it's called 
    (where the code is on the call stack), how the function was invoked, its Scope Chain, the value of this, and more!

JavaScript has 4 different ways you can invoke a function:

    1) Function Invocation: alert("TGIF!");
2) Method Invocation: [].push("Fullstack", "Academy");
3) Constructor Function Invocation: new Date();
4) Indirect Invocation: Object.prototype.toString.call([]);

The way the function is called determines what value "this" is assigned.
*/


/***************************************************************************
*
*               Rule 1 - Default Binding Rule
*
****************************************************************************

By default, the “this” keyword references the global object for the current runtime environment
    (Node.js, Web Browser, etc).

Here is a code snippet demonstrating the default value / global reference rule:
*/
this;


/***************************************************************************
*
*               Rule 2 - Implicit Binding Rule
*
****************************************************************************

The "Implicit Binding Rule" describes the case where a method references the 'this' keyword. 
When a method uses the 'this' keyword, 'this' references the object the method is called on. 

This can be identified by locating the 'dot' operator, 
    the OBJECT the method is called on is left of the 'dot' operator, 
    the METHOD is to the right of the 'dot'.
*/

const pizza = {
    toppings: ['Cheese', 'Ham'],
    getToppings: function () {
        return "Toppings: - " + this.toppings;
    }
}
console.log(pizza.getToppings())


// 
function whatIsThis() {
    console.log(this);
}


// Whenever you use shorthand method syntax, you will always assign a function declaration
//  to that property.  it does not assign an arrow function, bc of arrow fn's 'this' behavior.

const calculator = {        // object literal
    total: 0,
    add(number) {         // add() method using shorthand method syntax.
        this.total = this.total + number;
    },
    getTotal() {        // just accesses the total, but needs to RETURN the value.
        return this.total;
    }
}
// implicit binding rule - 
console.log(calculator.getTotal());  // output: 0  -  'this' references object it's called on. (calculator)

console.log(calculator.add(5)); // implicit, because 'add' is called on a context object, calculator.
// The calculator object will be the output: {total: 0, add: f, getTotal: f}

console.log(calculator.getTotal()); // output: 5    - 'total' property was updated to 5.




// what if we create another function called getTotal in global scope, and used it in the object literal 

function whatIsThis() {
    console.log(this);
}

const getTotal = function() {   // function declaration in global scope
    return this.total;
}

const calculator = {        // object literal
    total: 0,
    add(number) {         // shorthand method syntax.

        console.log(this); // output: undefined
        this.total = this.total + number;
    },
    getTotal: getTotal   
}
// 'this' still references "calculator", the context obj it's called on
console.log(calculator.getTotal()); // output: 0

console.log(calculator.add(5)); // output: the calculator object again
        // the console.log(this);  output: undefined

// just calling getTotal() without calculator as context obj 
console.log(getTotal());    // implicit binding rule does NOT apply here.
// defaults to the default binding rule.  output: undefined



// what if we have a nested object?

function whatIsThis() {
    console.log(this);
}

const getTotal = function () {   // function declaration in global scope
    return this.total;
}

const calculator = {        // object literal
    total: 0,
    add(number) {         // shorthand method syntax.

        console.log(this); // output: undefined
        this.total = this.total + number;
    },
    getTotal: getTotal,
    nestedObject: {
        getTotal: getTotal
    }
}

console.log(calculator.nestedObject); // output: {getTotal: f}
// notice the object has a getTotal method attached to it


// getTotal() has more than one context object, so which does it use here?
console.log(calculator.nestedObject.getTotal()); // undefined

/* 
It's always the context object it is called DIRECTLY ON, 'nestedObject'
So, the value returned is undefined, bc the nestedObject doesn't have a total property.
*/




/***************************************************************************
*
*               Rule 3 - Explicit Binding Rule
*
****************************************************************************

The "Explicit Binding Rule" describes the scenario when '.call', '.apply', or '.bind' is used.

*/

function whatIsThis(one, two, three) {
    console.log(this);
}
// .call() - called on a function and invokes the function
// first argument passed in is assigned as the context of 'this' within the function it's called on
whatIsThis.call({name: 'scott'});


function iceCreamOrder(size, container, topping) {
    console.log(
        `The name on the order is: ${this.first} ${this.last}.  
        They want a ${size} ${container} with ${topping}!`
    );
}

const customerName = {first: 'Bilbo', last: 'Baggins'};
// set the 'this' context of iceCreamOrder to customerName
iceCreamOrder.call(customerName, 'large', 'cone', 'sprinkles'); 

// .call's first arg is what you set the 'this' context to
// every arg after first is an arg passed into the function it's being called on, "iceCreamOrder".



// Refactor the same code used with .call and instead, use the '.apply' method.
// first arg is the 'thisArg', takes in the other arguments as an array.

function whatIsThis(one, two, three) {
    console.log(this);
}
// .apply() - called on a function and invokes the function
// first argument passed in is assigned as the context of 'this' within the function it's called on
whatIsThis.apply({ name: 'scott' });


function iceCreamOrder(size, container, topping) {
    console.log(
        `The name on the order is: ${this.first} ${this.last}.  
        They want a ${size} ${container} with ${topping}!`
    );
}
const customerName = { first: 'Bilbo', last: 'Baggins' };

const iceCreamOrderArguments = ['large', 'cone', 'sprinkles'];

iceCreamOrder.apply(customerName, iceCreamOrderArguments); 

// The above does the same as the call method, but requires an array arg that holds the func's args



// Using the '.apply' method -

// Ex: using apply for its feature of being able to pass an array that holds all the arguments,
//      so they can be passed individually to the 'Math.max()' function.

const numbers = [5, 4, 10, 12, 22, 200];
// console.log(Math.max()); // to get Math.max() to give us the max in 'numbers' array,
// We would have to create a loop that passes every individual argument to Math.max()


// **INSTEAD** we can use the '.apply'
console.log(Math.max.apply(null, numbers)); // output: 200

// 'null' is passed in as the 'thisArg' since we aren't using the context object.


// using the spread operator to pass in all the arguments into a func individually.

console.log(Math.max(...numbers));  // output: 200