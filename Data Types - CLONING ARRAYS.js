/**************************************************************************************************
*
*                                    CLONING ARRAYS
*
*************************************************************************************************** 

Since arrays are special types of objects, they have the same behavior as objects. 

How do you create a copy (aka clone) of an array?
There are a few approaches: .slice() and spread syntax which create shallow copies


************        .slice()        ***********

The traditional way, using the Array.prototpye.slice method, which creates a NEW array.
*/

// Array.prototpye.slice method - arr.slice(startingPoint, EndPoint)

const myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

const copyOfmyArray = myArray.slice();  

console.log(copyOfmyArray === myArray); // false

console.log(Object.is(copyOfmyArray, myArray)); // false

/*
The slice method accepts two arguments; where to begin the slice and end the slice. 

If you omit the arguments of the slice method, it will create a SHALLOW COPY of all the elements in the array, 
and return the values in a new array.  This is the behavior in the code snippet above. 

The key detail is that a NEW array is created and returned from the slice method, 
this means it will have a different reference value in memory!



********************        SPREAD SYNTAX       ****************

ES2015 introduced spread syntax, which can be used to create a shallow clone of an array.
*/

// Here is an example of using the spread operator (it is the three dots ...):  

const abc = ['a', 'b', 'c'];
const de = ['d', 'e'];

// the spread operator is used on abc and de

const aToE = [...abc, ...de];

console.log(aToE); // ['a', 'b', 'c', 'd', 'e'];

/*
The spread operator "spreads" (takes) values from an array and "spreads" (places) them into a new array. 

Take the example above, the spread operator is used on abc and de. 
The values from abc and de are dispersed (spread) into the array they are contained in ([...abc, ...de]).
*/

// Here is another example of using the spread operator on an string:

const abc = 'abc';
const abcClone = [...abc];

console.log(abcClone); // ["a", "b", "c"]




