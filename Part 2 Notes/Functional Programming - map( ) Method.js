/************************************************************************************
* 
*                  .forEach() Method
* 
*************************************************************************************

We've seen the map method in a few examples and exercises. Let's take a look at how to use Array.prototype.map.

map is a function on the Array.prototype that takes a callback as its argument. map will create a new array 
by transforming each element in the array it was called upon. 

This transformation is determined by the callback that is passed into map. 

A more concise definition of map would be a pairing of elements from one set to another. 

The concept of mapping is integral to programming in a functional style. 


Here is an example */

const arrayOfNumbers = [2, 3, 4]
const doubled = arrayOfNumbers.map((elem) => {
    return elem * 2;
});
console.log(`original array: ${arrayOfNumbers}`);
console.log(`the mapped aray: ${doubled}`);

/*
Here are a few observations of the code snippet above:

    map - is called as a method on an array

    map - accepts a callback function

    map - returns a NEW array (the log statements show the original and mapped array)

    the new array is the same length as the original

    the callback function is called on each element from the original array and placed in the new array map returns.


map is also a pure function. 

The only possible side effect is passing an impure callback function which can introduce side effects 
that are out of the map methods control.

(as long as pure functions are passed to map, map behaves as a pure function).

*/


const increaseSize = (num) => num * 2;

const myArr = [1,2,3,4,5];

const biggerArr = myArr.map(increaseSize); // storing the array returned from the .map method in a variable.


console.log(myArr);  // [1 2, 3, 4, 5]

console.log(biggerArr); // [2, 4, 6, 8, 10]


// could also just pass in an anonymous function into map, like so:

const biggerArr = myArr.map( (num) => num * 2 ); // this would function just like "increaseSize" function.


/*****************************
*        map - names
******************************

consider an array of objects
*/
const pets = [
    { name: 'Brian', age: 34, tvShow: 'Family Guy', species: 'dog' },
    { name: 'Ruby', age: 8, tvShow: 'The Office', species: 'dog' },
    { name: 'Dino', age: 100, tvShow: 'The Flintstones', species: 'dinosaur' },
]; // plus many many more that i left out to avoid typing them.

// 1) -- Generate List of names using .map

const names = pets.map((pet) => {

    // console.log(pet.name); // this would produce a list of the names, 
                // but it doesn't return a value, so console.log(names) would be undefined.

    // explicitly returning would solve this issue.
    return pet.name;
});


// METHOD CHAINING - calling a method on the value returned from the first method invocation.

// example

const myName = 'Scott';

console.log(myName.toUpperCase().split(''));

// when there are many methods being called/chained, it's good form to type it as followed:
console.log(myName.toUpperCase()
    .split('')
    .join(''));        
// easier to see them when represented vertically.



const olderPets = pets.map((pet) => {
    pet.age = pet.age * 12;
    return pet;
});
// 2) -- modify the age of each pet.  
//      Create an array of strings `${pet.name} is ${pet.age} years old`
//      log the values individually (using .forEach)

const olderPets = pets.map((pet) => {   // this .map modifies age of each pet
    pet.age = pet.age * 12;
    return pet;
}).map((pet) => {       // this .map creates an array of strings using temperate literal
    `${pet.name} is ${pet.age} years old`;
}).forEach( (pet) => {  // this last method chain uses forEach to log the values individually.
    console.log(pet);
})


/***********************
*   map an object
*********************** 

for this example: 
    a) Create an array of strings.
    b) The strings should read "Brian is a dog"

    c) Sort in alphabetical order
    d) return string
*/


const petObj = {
    Brian: {age: 34, tvShow: 'Family Guy', species: 'dog' },
    Ruby: {age: 8, tvShow: 'The Office', species: 'dog' },
    Dino: {age: 100, tvShow: 'The Flintstones', species: 'dinosaur' }
}

// a) create an array of strings.
const arrayOfStringStatements = Object.keys(petObj).map((key) => {
    return `${key} is a ${petObj[key].species}`;    // b)
}).sort()            // c)
    .join(', ');     // d)

