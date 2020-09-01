/*
\"Cloning\" Objects
It is a common use case to create a copy of an object instead of using the reference to an object. We'll review a few fundamental ways to create copies of Objects and Arrays.

###Create an Object Copy

To create a "copy" or "clone" of an object, you can use the Object.assign method. 

Here is an example of using Object.assign */

const objToCopy = { location: "NYC", temperature: 75 }
// Notice the first and and second arguments passed to Object.assign
const copyOfObj = Object.assign({}, objToCopy);

console.log('objToCopy', objToCopy);
console.log('copyOfObj', copyOfObj);

console.log(objToCopy === copyOfObj); 
// false - a new copy is created and as a result, copyOfObj does not have the same reference as objToCopy

/*
The first argument passed to Object.assign is the "target" object. 
The target object is returned from Object.assign and is also the object that 
is assigned the properties of the objects that are copied. 

The second (and additional arguments) are the "sources" which are objects that 
have their properties and values copied to the target object. 

Let's create a basic Object.assign implementation on our own!
*/

// using for-loop and checking if source hasOwnProperty()
function shallowObjectAssign(target, source) {
    for (let prop in source) {
        if (source.hasOwnProperty(prop)) {
            target[prop] = source[prop];
        }
    }
    return target;
}

// OR

// using Object.keys and calling .forEach() with the callback fn assigning each key.
function shallowObjectAssign(target, source) {
    Object.keys(source).forEach(function (key) {
        target[key] = source[key];
    });
    console.log(target);
    return target;
}

// OR

// using for-loop with "of Object.entries()" -> this checks hasOwnProp automatically.
function shallowObjectAssign(target, source) {
    for ([key, value] of Object.entries(source)) {
        target[key] = source[key];
    }
    return target
}




///////////////         Shallow vs Deep Copy        ///////////////

/*
The Object.assign method copies values...at least primitive values.

What happens if a source object has a property that is an object? */

const objToClone = {
    one: 'one',
    two: 'two',
    three: {
        a: 'a',
        b: 'b',
        c: 'c'
    }
};

const clone = Object.assign({}, objToClone);

console.log(clone.three, "clone object's `three` property value");
console.log(objToClone.three === clone.three); // true
// OUTPUT: Object {a: "a", b: "b", c: "c"}
// OUTPUT: "clone object's `three` property value"
// OUTPUT: true
// OUTPUT: undefined

/*
Why does the objToClone.three === clone.three expression return true?

Object.assign() is great for creating copies of values from one or more source objects to a target object. 

Primitive values are assigned by value while Object types are assigned by reference. 

Object.assign creates a copy of primitive values or copies a reference when the value is an object. 
Do you see a problem with this behavior (specifically for objects)?

From the example above, the value assigned to objToClone.three is a reference to an object in memory. 

When the clone of objToClone is created using Object.assign a copy of the reference is 
assigned clone.three, not a new object. 


// SHALLOW COPY

When a clone of an object follows the practice of "assign by copy" for primitive values 
and "assign by reference copy" for objects, it is called a "shallow copy" or "shallow clone". 

Object.assign creates a shallow copy of the "source" objects and merges the 
properties and values into the target object.



// DEEP COPY

A "Deep clone" (aka Deep Copy) creates new objects when a property's value is an object.  */

// For a reference to using Deep Copies, use this MDN link
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone

/*
*******     Warning for Deep Clone      *********

For deep cloning, we need to use alternatives, because Object.assign() copies property values.

If the source value is a reference to an object, it only copies the reference value.
*/
function test() {
    'use strict';

    let obj1 = { a: 0, b: { c: 0 } };
    let obj2 = Object.assign({}, obj1);
    console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

    obj1.a = 1;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
    console.log(JSON.stringify(obj2)); // { "a": 0, "b": { "c": 0}}

    obj2.a = 2;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 0}}
    console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 0}}

    obj2.b.c = 3;
    console.log(JSON.stringify(obj1)); // { "a": 1, "b": { "c": 3}}
    console.log(JSON.stringify(obj2)); // { "a": 2, "b": { "c": 3}}

    // Deep Clone
    obj1 = { a: 0, b: { c: 0 } };
    let obj3 = JSON.parse(JSON.stringify(obj1));
    obj1.a = 4;
    obj1.b.c = 4;
    console.log(JSON.stringify(obj3)); // { "a": 0, "b": { "c": 0}}
}

test();






// *****************        MERGING OBJECTS         *******************

const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, target object itself is changed.




// **********    MERGING OBJECTS WITH THE SAME PROPERTIES   ***********

const o1 = { a: 1, b: 1, c: 1 };
const o2 = { b: 2, c: 2 };
const o3 = { c: 3 };

const obj = Object.assign({}, o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
// The properties are overwritten by other objects that have the same properties later in the parameters order.





