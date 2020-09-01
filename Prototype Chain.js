/*****************************      TOPICS      *******************
 * 1) The [[Prototype]] property
 * 2) The Prototype Chain
 * 3) Prototype Chain Advantages
 * 4) Object.getPrototypeOf
 * 5) Object.create
 * 6) Methods & "this" (skipped section since it's in part 3 notes)
*/



/**************************************************************************************************
*
*                                    THE [[PROTOTYPE]] PROPERTY
*
*************************************************************************************************** 

The Prototype Chain determines how an object locates a property (or method) 
that isn't defined directly on itself. 

For example, let's take a look at an object literal that calls a "built-in" method:
*/
const simpleObject = {
    a: 'a',
    b: 'b',
    c: 'c'
}
simpleObject.hasOwnProperty('a'); // What is `hasOwnProperty`? Did we define it on our Object?
// it's a built-in method.. duhh

// a scenario where an error would be thrown
simpleObject.helloWorld(); 
// helloWorld isn't defined anywhere and isn't "built-in" to the language, as a result an error is thrown


/*
Clearly, helloWorld isn't defined and the error "Uncaught TypeError: simpleObject.helloWorld is not a function" is thrown. 

When "hasOwnProperty" is called, why isn't the same error thrown? 
To answer this, let's take a look at the [[Prototype]] object.


THE [[PROTOTYPE]] PROPERTY

The [[Prototype]] is an internal property every object contains and its value is a reference to another object. 

Even though the [[Prototype]] is internal and "hidden," you can inspect it using Chrome Development Tools
(or with the "Object.getPrototypeOf" method). 

The code snippet from the previous example with "simpleObject" was loaded into the chrome console; 
the screenshot shows the value of "simpleObject" returned to the console.
    > simpleObject;
    > {a: "a", b: "b", c: "c"}
        a: "a"
        b: "b"
        c: "c"
     > __proto__: Object

The __proto__ is called the "dunder proto" and represents the hidden internal [[Prototype]] object. 

Clicking on the triangle in chrome dev tools to expand the property shows all the properties and 
methods on the internal [[Prototype]] object.  Notice that the object has the method hasOwnProperty, 
so what is the significance of the internal [[Prototype]] property? 

How does simpleObject know to delegate and look at its internal [[Prototype]] to access hasOwnProperty? 

The answer to this is the prototype chain!



*********   PRIMITIVE WRAPPER OBJECTS   ************

Calling [methods] on Primitive values is possible through JavaScript's engine's built-in "wrapper Object".

Since Primitives (like a string) do NOT have "properties" like objects, the javascript engine creates 
a temporary "wrapper object" when a method is called on a Primitive Data Type. 

The "wrapper object" wraps the primitive value as an object making it possible to access built-in methods. 

Immediately after the method called completes execution, the "wrapper object" is destroyed. 

This is why when you assign a property to a string, an error isn't thrown, but the property isn't accessible, 
the wrapper object is created when you make the assignment and immediately destroyed.
*/

/**************************************************************************************************
*
*                         THE PROTOTYPE CHAIN (the basis of "inheritance")
*
***************************************************************************************************

The prototype chain LINKS OBJECTS TO OTHER OBJECTS and is primarily used when a method or property 
is accessed that isn't directly defined on the object (such as the "hasOwnProperty" method on the "simpleObject" object.) 


Let's take a look at how an object searches its prototype chain to determine if it has access to the property (or method) called.

When a property or method is called on an object:

    1) The object checks itself for the property (or method), if the property isn't present, 
        it looks at a hidden property on itself called the "[[Prototype]]" which is an object.

    2) The "[[Prototype]]"" object is searched to see if it contains the property or method initially called,
        and if it is present, the value is used.

    3) IF THE "[[Prototype]]" OBJECT DOESN'T HAVE THE PROPERTY, IT CHECKS ITS OWN "[[Prototype]]" OBJECT AND CONTINUES SEARCHING...

    4) The process continues, every object continues checking itself for the property and then its "[[Prototype]]" until 
        the top of the prototype chain is reached.
    
    5) The highest object in the prototype chain is the "Object.prototype", which is a built-in object in JavaScript and 
        considered to sit at the top of the prototype chain since its "[[Prototype]]" is "null".
        When the top of the prototype chain is reached, and the property isn't found throughout the chain, 
        an error is thrown (normally it is a reference error).
/

The prototype chain links objects to other objects. 
All objects in JavaScript are part of the prototype chain. The prototype chain is the basis of "inheritance" in JavaScript.


Here is another generalized diagram that illustrates how internal prototypes are linked to objects in the prototype chain. 
An object checks itself when a property is called, if the property isn't present, it looks at its internal prototype, 
the object will continue traversing up the chain until it reaches the top of the chain (the value null).
*/


/**************************************************************************************************
*
*                                PROTOTYPE CHAIN ADVANTAGES
*
***************************************************************************************************

Storing "shared" methods on a single object that all arrays have access to in their prototype chain has the following advantages:

1) The methods are defined once, instead of on each individual instance. As a result, less memory space is consumed 
(just think, if you had 1000 arrays and all the methods on the "Array.prototype" were attached as properties for 
each individual array, you would have multiple copies of the same exact methods, what a waste!). 
Instead, all arrays have access to an object that has the common methods all arrays need access to.

2) Maintaining the code base is easier. 
Hypothetically, what if there was a bug in the 'join' method? 
If "join" was defined on every array instance, you would need to access each array and update the "join" method on 
every instance individually, one at a time. 
Luckily this is not the case, the join method is a "shared" method on the "Array.prototype object", 
the join method only needs to be updated on the "Array.prototype" object since every array instance accesses the 
join method located on the Array.prototype.

*/


/**************************************************************************************************
*
*                                Object.getPrototypeOf
*
***************************************************************************************************

The Object.getPrototypeOf method accepts an object as an argument and returns the object's internal [[Prototype]]
(e.g.): */
const exampleArray = [];
Object.getPrototypeOf(exampleArray); // the Array.prototype object is returned!


// Exercise to familiarize yourself with the Object.getPrototypeOf method.  Use the following test specs.

describe("traceTheChain", () => {
    it("is a function", () => {
        expect(typeof traceTheChain).toEqual("function");
    });

    it("returns an array", () => {
        let returnedValue = traceTheChain({});
        expect(Array.isArray(returnedValue)).toEqual(true);
    });

    it("uses the `Object.getPrototypeOf` method", () => {
        spyOn(Object, "getPrototypeOf").and.callThrough();
        traceTheChain([10, 9, 1]);
        expect(Object.getPrototypeOf).toHaveBeenCalled();
    });

    it("returns all the internal `[[Prototype]]` objects starting from the arguments internal `[[Prototype]]`", () => {
        let returnedValue = traceTheChain([10, 5, 50]);
        expect(returnedValue).toEqual([Array.prototype, Object.prototype]);
    });

    it("returns all the internal `[[Prototype]]` objects starting from the arguments internal `[[Prototype]]`", () => {
        let returnedValue = traceTheChain(
            "What objects are in my prototype chain?"
        );
        expect(returnedValue).toEqual([String.prototype, Object.prototype]);
    });
});

// Solution

function traceTheChain(obj) {
    let prototypeChainObjects = [];
    while (Object.getPrototypeOf(obj)) {
        obj = Object.getPrototypeOf(obj);
        prototypeChainObjects.push(obj);
    }
    return prototypeChainObjects;
}




/**************************************************************************************************
*
*                                        Object.create
*
***************************************************************************************************

let's create our own custom prototype chain! 

We'll need a way to create objects that deviate from their built-in internal [[Prototype]], and instead, 
reference an object that we specify as the internal [[Prototype]].



*********       EXAMPLE:        ***********

We'll create a set of methods and properties used across all cell phones. 
Then we can create individual objects that represent a "type" of cell phone, such as a Pixel or iPhone 
and share the same basic features such as turn on, turn off, change display brightness, etc.
********************************************/

// Here is the object we want to set as the internal [[Prototype]] for cell phone objects.

const cellPhoneUtilities = {
    turnOn() {
        return 'Phone is turned on';
    },
    createContact(name, number) {
        return `Name: ${name} and  Number: ${number} added to your contacts!`
    },
    connectToWifi() {
        return 'connected to wifi';
    }
};
// Output:  Object {connectToWifi: function(), createContact: function(), turnOn: function()}


// Inspect the two cell phone objects that represent an iPhone and a Pixel.

const iPhone = {
    type: 'iPhone',
};
console.log(Object.getPrototypeOf(iPhone)); // Object {}

const pixel = {
    type: 'pixel'
};
console.log(Object.getPrototypeOf(pixel)); // undefined
/*
Our goal is to replace both phone objects internal "[[Prototype]]" from "Object.prototype" to the "cellPhoneUtilities" object. 

To acheive this, let's take a look at the "Object.create" method.


************    Object.create   ************

The Object.create does exactly what it sounds like; it creates an object! 

The first argument passed to Object.create is an object 
which becomes the internal [[Prototype]] of the object created by Object.create.
*/
const internalPrototype = {
    hello: 'world'
}

const newObj = Object.create(internalPrototype);
console.log(Object.getPrototypeOf(newObj)); // Object {hello: "world"}

/*
The "newObj" object is assigned the value returned from "Object.create(internalPrototype)". 
The value returned is an empty object literal ( {} ) THAT HAS AN INTERNAL [[Prototype]] SET TO THE OBJECT CREATED ON 
THE FIRST LINE (THE internalPrototype VARIABLE). 
This is the key piece we needed in providing our phone objects access to the cellPhoneUtilities. 


Let's create new phone objects using Object.create and use the cellPhoneUtilities function as the argument, e.g.*/

const cellPhoneUtilities = {
    turnOn() {
        return 'Phone is turned on';
    },
    createContact(name, number) {
        return `Name: ${name} and  Number: ${number} added to your contacts!`
    },
    connectToWifi() {
        return 'connected to wifi';
    }
};

const iPhone = Object.create(cellPhoneUtilities);
iPhone.type = 'iPhone';
console.log(Object.getPrototypeOf(iPhone)); 
// OUTPUT:    Object {connectToWifi: function(), createContact: function(), turnOn: function()}

const pixel = Object.create(cellPhoneUtilities);
pixel.type = 'Pixel';
console.log(Object.getPrototypeOf(pixel));
// OUTPUT:    Object {connectToWifi: function(), createContact: function(), turnOn: function()}

console.log(pixel.connectToWifi());  // "connected to wifi"
console.log(iPhone.turnOn());   // "Phone is turned on"

/*
The iPhone and pixel objects now have the cellPhoneUtilities object as their internal [[Prototype]]. 
This is an example of creating a custom prototype chain. 


When creating the iPhone and pixel objects using Object.create, we repeated the same pattern twice:

1) Created an object using Object.create and passing the internalPrototype object as the argument.

2) Attached the type property to the object.
*/
