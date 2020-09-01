/************************************************************************************
*
*                  .reduce() Method
*
*************************************************************************************

The reduce() method executes a reducer function (that you provide) on each element of the array, 
    resulting in a single output value. */
// JavaScript Demo: Array.reduce()
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

/*

reduce takes a function, or callback, as an argument, loops over the array, 
    and runs this function for each element in the array.
That function itself has two arguments: 
    The first is the accumulated value.
    The second argument represents the current element.


"reduce" is another computer science term you may have heard before under one of its disguises as "fold", 
    "accumulate", or "aggregate."

We are taking a complex structure or collection, and making it into something new by combining 
the pieces of the collection.In computer science, we call this ‘reducing a collection'.

You reduce collections such as arrays, all the time. 

Let’s reduce this array right here by finding the sum. */

const numbers = [1, 2, 3];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

/*
The "numbers" array is "reduced" into the "sum" variable.

    - sum started at 0
    - each element of the array was added to sum.

JavaScript has a function "reduce" on the "Array.prototype" that we can use to reduce a collection 
    with less code than writing a for-loop! 
    
Let’s take at how it works.

reduce is a higher order function, since it takes a function, or callback, as an argument. 
reduce loops over the array, and runs this function for each element in the array. 
That function itself has two arguments: The first is the accumulated value. 
In this example, it will hold our sum. The second argument represents the current element.

Instead of adding directly to our sum, reduce expects us to return the value that sum will 
    be in the next loop/traversal. 

In this way, we accumulate or build up a value in our sum value. 
Once we’ve looped through all of the elements in the array, the sum variable is returned.


The reducer function takes four arguments:

    1) Accumulator (acc)
    2) Current Value (cur)
    3) Current Index (idx)
    4) Source Array (src)

Your reducer function's returned value is assigned to the accumulator, whose value is remembered 
    across each iteration throughout the array and ultimately becomes the final, single resulting value.

Syntax: 
    arr.reduce(callback[, initialValue])

Parameters: (callback[, initialValue])
    "callback" - Function to execute on each element in the array, (except for the first, if no 
                "initialValue" is supplied), taking four arguments:

            1) "accumulator" - accumulates the callback's return values. 
                It is the accumulated value previously returned in the last invocation 
                of the callback—or initialValue, if it was supplied (see below).
            2) "currentValue" - The current element being processed in the array.
            3) "index" (Optional) - The index of the current element being processed in the array. 
                Starts from index 0 if an initialValue is provided. Otherwise, starts from index 1.
            4) "array" (optional) - The array reduce() was called upon.

    "initialValue" (Optional) - A value to use as the first argument to the first call of the callback. 
                If no initialValue is supplied, the first element in the array will be used and skipped. 
                Calling reduce() on an empty array without an initialValue will throw a TypeError.

Return Value:
        The single value that results from the reduction.


You call the reduce method on a list of items, which can be an array.
Then the method takes each element and "reduces" it, which is just combining into a single value.
This value can be a number, an array, object, or even a string.  
*/

// It is usually safer to provide an initialValue, because there are three possible outputs without initialValue, 
//      as shown in the following example:

let maxCallback = (acc, cur) => Math.max(acc.x, cur.x)
let maxCallback2 = (max, cur) => Math.max(max, cur)

// reduce() without initialValue
[{ x: 22 }, { x: 42 }].reduce(maxCallback) // 42
[{ x: 22 }           ].reduce(maxCallback) // { x: 22 }
[                    ].reduce(maxCallback) // TypeError

// map/reduce; better solution, also works for empty or larger arrays
[{ x: 22 }, { x: 42 }].map(el => el.x)
                      .reduce(maxCallback2, -Infinity) // method chaining the .map() with .reduce()


                
// How reduce() works - Suppose the following use of reduce() occured:
[0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue
})
/* The callback would be invoked four times, with the arguments and return values in each call being as follows:
----------------------------------------------------------------------------------------------------------------
callback	    accumulator	    currentValue	currentIndex	        array	            return value
----------------------------------------------------------------------------------------------------------------
first call	        0	            1	            1               [0, 1, 2, 3, 4]	            1
second call	        1	            2	            2               [0, 1, 2, 3, 4]	            3
third call	        3	            3	            3               [0, 1, 2, 3, 4]	            6
fourth call	        6	            4	            4               [0, 1, 2, 3, 4]	            10
----------------------------------------------------------------------------------------------------------------

The value returned by reduce() would be that of the last callback invocation(10). 

You can also provide an Arrow Function instead of a full function. 
The code below will produce the same output as the code in the block above:
*/
[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => accumulator + currentValue);




// shoppingCart example from Scott's video
const shoppingCart = [
    { item: 'shoes', price: 49.99 },
    { item: 'gloves', price: 22.99 },
    { item: 'hat', price: 89.99 },
    { item: 'belt', price: 29.99 },
]

let totalAmount = 0;
for (let i = 0; i < shoppingCart.length; i++) {
    totalAmount += shoppingCart[i].price;
}

console.log(`totalAmount: ${totalAmount}`);  // output -> totalAmount: 192.96




// Using the .reduce() method - 
const shoppingCart = [
    { item: 'shoes', price: 49.99 },
    { item: 'gloves', price: 22.99 },
    { item: 'hat', price: 89.99 },
    { item: 'belt', price: 29.99 },
]

const add = (accumulator, item) => {
    // we want to return the value of the accumulator added to that price.  The current price.
    return accumulator + item.price;

}

// shoppingCart.reduce(add);       // need to pass the "add" callback function to .reduce() method

// we have to store the return value in a variable
const totalAmount = shoppingCart.reduce(add);  

/******************************************
* Scott's console after running above code
*******************************************
> totalAmount
    "[object Object]22.9989.9929.99"

He said when he sees output like this, it generally has to do with type-coercion.

using "debugger;" in console, he notices the accumulator is taking the first item in the array
    and assignining it as the initialValue.  We don't want this, we want it to be zero.
*/
const shoppingCart = [
    { item: 'shoes', price: 49.99 },
    { item: 'gloves', price: 22.99 },
    { item: 'hat', price: 89.99 },
    { item: 'belt', price: 29.99 },
]
const add = (accumulator, item) => {
    return accumulator + item.price;
}

const totalAmount = shoppingCart.reduce(add, 0); // with initialValue = 0 

console.log(`totalAmount: ${totalAmount}`);  // output -> totalAmount: 192.96




/***************************************
*   Flatten an array with .reduce()
***************************************

To "flatten" an array, is to take each nested array in a multi-dimensional array,
    strip out the arrays, and place the values the array held into a single array.

** NOTE **      Array.prototype.concat()

The "concat()" method is used to merge two or more arrays.  This method does not change
the existing arrays, but instead returns a new array.

*/

// Challenge Example: Flatten the given array

const multiDimArray = [[1,2], [3,4], [5,6,7]]; // we want a single array of [1,2,3,4,5,6,7]

// We want to get rid of the individual arrays, take all the values and put them into a single array.

const flatten = (accumulator, currentIndex) => {     // callback function
    // .concat() on the first array, which will be accumulator ([1,2]) and extends the array with currentIndex.
    return accumulator.concat(currentIndex);  // passing in currentIndex, which is also an array in this case.
}

// as long as we return the new array, it will be the accumulator value for the next time flatten is called.

const flattenedArray = multiDimArray.reduce(flatten);  // pass callback to the reduce method

console.log(flattenedArray);  // output -> [1, 2, 3, 4, 5, 6, 7]

/* what happens here when multiDimArray.reduce(flatten) is called (and stored in the variable 'flattenedArraay'): 

The function "flatten" returns an array of the accumulator being extended by (or merged with) 'currentIndex'.
So, first accumulator is the initial array [1,2], and currentIndex is the array [3,4]
Making 'flatten' return [1, 2, 3, 4]

Since the callback function 'flatten' is called on EVERY ELEMENT in the array, it runs again.
Now, 'accumulator' is [1, 2, 3, 4] and 'currentIndex' is the array [5,6,7], and another merge happens.
'flatten' returns [1, 2, 3, 4, 5, 6, 7]

the reduce method reached the end of its process, and the new array value is stored in flattenedArray. 
*/
 