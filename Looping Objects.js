/**************************************************************************************************
*
*                                       Looping Objects
*
***************************************************************************************************

Up to this point, you’ve probably used for loops to traverse through arrays. 
However, it’s rare that a for loop is able to loop through all the properties of an object since 
we can’t predict what the keys of an object will be.



There are two main ways that you can loop through an object:

    1) "for in"

    2) "Object.keys"

***********************************
Let’s start with the for in loop.
***********************************

The for in loop has different syntax than a regular for loop, as you’re not defining a counter. 

Instead, a for-in loop will loop through all the enumerable properties of an object 
and the enumerable properties in the object’s internal prototype chain. 

*/

// In this example, review the behavior of the bark property.

const myDog = { name: 'Duke', breed: 'Labrador', color: 'Chocolate' };
for (let key in myDog) {
    console.log(key);
}

/*
By default, all properties that are placed on an object manually are enumerable. 

However, "for-in" will also return all the enumerable properties in your object’s prototype chain.
*/

const Dog = function (name, breed, color) {
    this.color = color;
    this.breed = breed;
    this.name = name;
}
Dog.prototype.bark = "Bark!";

const myDog = new Dog('Duke', 'Labrador', 'Chocolate');
for (let key in myDog) {
    console.log(key);
}

/*
Now we have 'bark' showing up when we loop over the keys. If that's the intent, great! 
But usually, we don't want properties from an instance's internal prototype showing up in our loop. 

******************************************
There are two ways to solve this problem:
*****************************************

1) We could check to see if a property belongs to the instance or to its internal prototype 
    using Object.prototype.hasOwnProperty. 

When "hasOwnProperty" is called on an object, it takes a key as an argument. 
It will return true if the property belongs to the instance and false if not.
*/

const Dog = function (name, breed, color) {
    this.color = color;
    this.breed = breed;
    this.name = name;
}
Dog.prototype.bark = "Bark!";

const myDog = new Dog('Duke', 'Labrador', 'Chocolate');
for (let key in myDog) {
    if (myDog.hasOwnProperty(key)) {
        console.log(key);
    }
}

/*

2) Our other option is using Object.keys(). 

Object.keys is a class method that takes an object as its argument and returns an array of 
the object's keys that belong to the object. 

One great feature about Object.keys is it will return keys on the object, 
it won't traverse the prototype chain and find additional enumerable properties.
*/

const Dog = function (name, breed, color) {
    this.color = color;
    this.breed = breed;
    this.name = name;
}
Dog.prototype.bark = "Bark!";

const myDog = new Dog('Duke', 'Labrador', 'Chocolate');

console.log(Object.keys(myDog));