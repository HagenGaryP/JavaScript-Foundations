/**************************************************************************************************
*
*                                    FACTORY FUNCTIONS
*
***************************************************************************************************
*
* TOPICS:
            1) Design Patterns
            2) What is an object "instance"?
            3) Factory Function Pattern
            4) Factory Function Recap
*
*
***************************************************************************************************/



/**************************************************************************************************
*
*                                    DESIGN PATTERNS
*
***************************************************************************************************

A Design pattern is a reusable solution that can be applied to common problems related to software.

Patterns are a general guide to solving common problems, but aren't necessarily the "best approach"
to solving a problem since each situation is unique and every pattern has its own costs and benefits.


With that in mind, it is common when learning design patterns, to get caught in deciding "which pattern
is the best?" or "what pattern should I use to solve a problem". 

It often takes time, practice, and exposure to solving problems to get a feel for which pattern to use
and when to use it.


The main patterns we'll focus on is OBJECT CREATIONAL PATTERNS.

The main three in this category (there are plenty more) are:
    1) Factory Functions
    2) Constructor Functions
    3) Classes
*/


/**************************************************************************************************
*
*                                    WHAT IS AN OBJECT "INSTANCE"?
*
***************************************************************************************************

An INSTANCE is a SINGLE OCCURRENCE OF AN OBJECT and is often associated with object creation patterns
such as the object returned from a FACTORY or CONSTRUCTOR FUNCTION.

The object created is referred to as an "instance".
*/


/**************************************************************************************************
*
*                                    FACTORY FUNCTION PATTERN
*
***************************************************************************************************

A Factory Function is any function in JavaScript that returns an object literal 
    that is not a Constructor Function (uses the 'new' keyword) or Class.
*/

// Object Literal

const objectName = {
    member1Name: member1Value,
    member2Name: member2Value,
    member3Name: member3Value
};
/*
An object like this is referred to as an object literal — 
we've literally written out the object contents as we've come to create it. 

This is in contrast to objects instantiated from classes or constructors (with the 'new' keyword)

For more info on the basics of OBJECTS, use this link as a reference:
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics
*/


/*
SIDE NOTE:  "Object literal notation vs JSON"
    The object literal notation is not the same as the JavaScript Object Notation (JSON). 
    Although they look similar, there are differences between them:

    1) JSON permits only property definition using "property": value syntax.  
        The property name must be double-quoted, and the definition cannot be a shorthand.

    2) In JSON the values can only be strings, numbers, arrays, true, false, null, or another (JSON) object.
    
    3) A function value (see "Methods" above) can not be assigned to a value in JSON.
    
    4) Objects like Date will be a string after JSON.parse().
    
    5) JSON.parse() will reject computed property names and an error will be thrown.

*/


/*
Back to the main topic - FACTORY FUNCTIONS

Factory functions create, "set up," and return an object. 
Any object returned from a factory function is an "instance" of the factory function. 
*/

// Here is an example of a factory function

function puppyFactory(name, breed) {
    return {
        name,
        breed
    }
}

const donut = puppyFactory('donut', 'bulldog');

console.log(donut);

/*
Whenever you need to create a 'puppy' instance, you can use the puppyFactory function to create the instance. 

Let's take this one step further and add methods to the object returned from the puppyFactory. */
function puppyFactory(name, breed) {

    return {
        name,
        breed,
        bark() {
            console.log('Ruff, Ruff');
        },
        sleep() {
            console.log('zzzZZZZZzzzz');
        }
    }
}

const donut = puppyFactory('donut', 'bulldog');

console.log('the donut instance', donut);

console.log(donut.sleep());
console.log(donut.bark());

/*
With this adjustment, when a puppy instance is created using the puppyFactory function, 
the instance will have unique properties such as name and it will also have 
the bark and sleep methods attached to each instance.
*/


/************************************       Factory Function Recap      **************************
 
Factory functions are one of the most common object creational patterns.

    1) They are very flexible and easy to use. Special syntax isn't necessary to create a factory function, 
        as long as the function returns an object literal, it is a factory function!

    2) Here is a link to an example of the factory function pattern in the wild! 
        A well-known state management library called Redux uses the factory function pattern as you can see 
        in this example from Redux's documentation. https://redux.js.org/basics/actions/#action-creators

    3) As we saw in a few examples when using Object.create, we can set the [[Prototype]]. 
        This is a powerful pattern to use, especially when applying it to factory functions. 
            It isn't necessary to always use Object.create within a factory function but when you need 
            to set and delegate to a custom [[Prototype]], it is a useful pattern.

    4) If we create an instance with a custom [[Prototype]], we can apply the implicit binding rule 
        to the methods we add to the [[Prototype]]. As long as the methods are called on the instance, 
        the this context will reference the instance the method is called on. */



