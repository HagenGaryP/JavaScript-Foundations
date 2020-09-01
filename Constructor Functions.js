
/**************************************************************************************************
*
*                                    CONSTRUCTOR FUNCTIONS
*
***************************************************************************************************

Overview

Constructor functions achieve the same goal as factory functions, 
they create and return an object (an 'instance'). 
Constructor functions use different syntax compared to factory functions.
*/

// Here is an example of a constructor function:

function Person(name) {
    this.age = 0;
    this.name = name;
}

var instanceObj = new Person('Sam');

console.log(instanceObj);


/*
Constructor functions are ordinary functions invoked with the new operator and return an object ‘instance'.



Let's make a few observations about the Person constructor function:

    1) The first letter is capitalized. It is a convention throughout the JS community to use a capital letter 
        to identify a constructor function. Even though the constructor will work regardless if the first 
        letter is capitalized it makes it easy to identify a constructor function and the intent when 
        reading a programs source code.

    2) What is the new operator?

    3) The this keyword is used. We will cover the this keyword's role when used in a constructor function 
        in an upcoming lesson, but make a note of it. When a function is invoked with the new operator, 
        the context of this references the object created by the constructor function.

    4) Where is the return keyword?

    5) Can we set the [[Prototype]] of the instance returned from the constructor function?
*/



/********************       `new` Operator & `this` Keyword Binding Rule    ********************

When the new operator is used to invoke a function, it creates an object 
and returns the object implicitly from the function. 

The object is "implicitly" returned meaning the return keyword isn't necessary.
*/

// Example
function myFunc() { }
const obj = new myFunc;
console.log(obj); // {}

/*
On the second line of the code snippet above, the expression new myFunc doesn't use a 
set of parenthesis to invoke the myFunc function. 

This is because the new operator is responsible for invoking myFunc. 

If myFunc had parameters defined in its definition, parentheses would be required so arguments 
could be passed to the function, but the new operator is still responsible for invoking myFunc.




A new object is created with a custom [[Prototype]] (internal prototype).

The new object binds to the this keyword context within the function.

It returns the new object from the function (unless the function already returns an object).



In the code snippet above, an empty object literal is assigned to obj. 

As long as another object isn't returned from the function invoked with the new operator, 
an object literal is implicitly returned. 

In the example, myFunc is technically a constructor function based on its definition, 
a constructor is any function invoked with the new operator. 

As mentioned in the overview section, it is convention to name constructor functions with 
a capital letter (the first letter), but it will work regardless of its font case.
*/

// What value is assigned to the chewbacca variable below?

const Wookie = function (name) {
    const wookieInstance = { name };
    return wookieInstance;
}

const chewbacca = new Wookie('chewbacca');
console.log(chewbacca);
/*
Chewbacca Explanation:

Wookie is a function that returns an object. 
When Wookie is invoked with the new operator, it is considered a constructor function (since it is called with new). 
The new operator creates an object and implicitly returns the object it creates as long as the constructor function 
doesn't return another object. 

The Wookie function returns another object (wookieInstance), this is why the object {name: "chewbacca"} is assigned 
to the chewbacca variable. The object the new operator creates was created, but it isn't the object returned.



How can you change the Wookie function so it implicitly returns the object created when the new keyword invokes Wookie?



###this Binding (New Binding Rule)

How can we add custom properties to the object created by the new operator? We need a reference to the object the new operator creates.

When the new operator invokes a constructor function, the this keyword within the constructor function's code block references
 the object new creates. 
 
 The this keyword always references an object. 
 
 As we mentioned in other lessons, the this keyword behaves like a homonym in English, 
 it can have different contexts based on its call-site, e.g. */
const Wookie = function () {
    console.log('this keyword context', this);
}

const chewbacca = new Wookie; // note: since parameters aren't defined, parentheses are not necessary to invoke `Wookie`,
// the new operator invokes Wookie.

console.log('chewbacca variable', chewbacca);
/*
The "context" of the this keyword (within the constructor function) is bound to the object the new operator creates. 

The two values logged are the this keyword and the chewbacca object, 
both are the same object (the object created by the new operator). 



Let's add properties to the object created by the new keyword. 

To do this, we'll need to reference the object using the this keyword within the Wookie function 
and add properties to the object using dot or bracket notation.  */

const Wookie = function (name) {
    console.log('this keyword context before property assignment', this);
    this.galaxy = 'Star Wars';
    this[name] = name;
    console.log('this keyword context after property assignment', this);
}

const chewbacca = new Wookie('Chewbacca'); // note: since a function parameter is defined, parentheses are necessary to invoke `Wookie`.

console.log('chewbacca variable', chewbacca);


/*
The embedded RunKit code runner is great to get quick output from a code snippet. 
We suggest taking this one step further and copy/paste your code in the chrome console and review what is logged to the console. 

Since you will be using chrome throughout Foundations, it is important to get familiar with the chrome console 
and also be familiar with the output. The output from the chrome console will be more accurate than 
the output by the embedded RunKit code runner.



Let's review what is logged to the console:

    1) 'this keyword context before property assignment' - 
        the value logged is the object created by the new operator. 
        It is bound to the this keyword within the Wookie function. 
        The object is empty at this point since the properties were not assigned yet...
    
    2) 'this keyword context after property assignment' - the this keyword is logged, the object has 'galaxy' 
        and 'name' properties since they were assigned to the object using dot and bracket notation.

    3) 'chewbacca variable' - the chewbacca variable is logged, it holds the object that was implicitly returned 
        (thanks to new operator) from the expression new Wookie('Chewbacca').

When the new operator is used with a constructor, the context of this references the object the new operator creates, 
this is often referred to as the new binding rule. 
Up until this point, we've seen two ways the this keyword can change its context.

1) The Implicit Binding Rule
2) The New Binding Rule


*/


/********************************************    Function.prototype     **********************************

Functions are special types of objects and since functions are objects they can have their own properties. 

Can use the Chrome Dev Tools using the "console.dir" method and see all of the properties attached to the function object.


the prototype property has a direct relationship with the 'new' operator when it used to invoke a constructor function.

By default, the '.prototype' property is assigned an object. 
The object assigned to the .prototype property always has two properties:

    1) constructor

    2) .__proto__ (this is the internal [[Prototype]] of the object)

The '.__proto__' a.k.a. the internal "[[Prototype]]" property should not be a surprise,
all objects have an internal [[Prototype]]. 

The functionality of the internal [[Prototype]] is the next step (or link) in the prototype chain. 

Keep in mind, the ordinaryFunction object has an internal [[Prototype]] AND the object assigned 
to the .prototype property has its own internal [[Prototype]] since it is a separate object.



As mentioned, the .prototype object has two properties, the second property is the constructor property. 

The "constructor" property is assigned the function object the .prototype object belongs to. 

Since the constructor property is assigned an object, technically it is a method. 


it is important to have a strong understanding of object data types 
and their behavior when assigned to variables (the concept is "assign by reference").


*/



/**************************************************************************************************
*
*                               Attaching Methods to Function.prototype
*
***************************************************************************************************



What happens when we invoke an object with the 'new' operator?

    1) Creates an instance of the "Constructor".  That instance is a new (empty) object
         and that object is assigned to the "this" keyword.

    2) Any properties attached to the "this" keyword are attached to that empty object.

    3) The object is implicitly returned at the end of the code block.
*/


// Can use the Object.create() method to assign the internal prototype of the object we're creating.

function CreateGithubUser(username, billingPlan = 'free') {
    // first argument passed into Object.create is the 'internal prototype', or the 'this' value you want to set it to
    //this = Object.create(CreateGithubUser.prototype)


    this.billingPlan = billingPlan;
    this.username = username;
    this.repositories = [];

    // implicitly returns the instance (this)
}

// adding methods one at a time.

CreateGithubUser.prototype.createRepo = function(name) {
    this.repositories.push({name}); // the 'this' is set to object we're calling method on ("scott")
}

CreateGithubUser.prototype.changeUsername = function(name) {
    this.username = name;
}

const scott = new CreateGithubUser('scottdalessandro');


// can also add methods all in one block of code, not best practice because it erases entire prototype object

// example
CreateGithubUser.prototype = {
    createRepo() {

    },
    changeUsername() {

    }
}

