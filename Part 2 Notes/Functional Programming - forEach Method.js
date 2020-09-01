/************************************************************************************
* 
*                  .forEach() Method
* 
*************************************************************************************

In the introduction section, we took a look at how to write a similar version 
    of the Array.prototype.forEach method. 

Here is the same code from earlier: */

function forEach(arr, callback) {
   for(let i = 0; i < arr.length; i++) {
     callback(arr[i]);
   }
}

const arr = [1,2,3,4,5]

forEach(arr,(value) => {
  console.log(value);
});
//Now we can call forEach with different functions passed in.
//Now our code is more DRY (Don't Repeat Yourself) and more readable.


/*
Using the forEach each function falls under the declarative programming paradigm and is a 
good way to write for-loops that iterate over an array. 

However, there are a few drawbacks to Array.prototype.forEach:

    - break statements are not compatible with .forEach
    - The method .forEach does not return a value (it only returns the default value undefined)


Since .forEach doesn't return a value, it is an impure function and introduces side effects to a program. 

.forEach manipulates the values in the array it is called on. 

Side effects are necessary for programs, but following the Functional Programming paradigm,
 we should always be cautious when introducing side effects and only introduce them if necessary.

Fortunately, there are methods on the Array.prototype that act as a pure function 
such as the map, filter, and reduce methods. Let's take a look at a few of them!
*/