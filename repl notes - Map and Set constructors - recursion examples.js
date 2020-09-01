let obj = { a: 10, b: 20, c: 30 };

let map1 = new Map(Object.entries(obj));

let arrOfKeys = [];
let arrOfValues = [];

// console.log(map1);  // Map { 'a' => 10, 'b' => 20, 'c' => 30 }

// console.log(Array.from(map1));

// console.log([...map1]);


map1.forEach((value, key) => {
    arrOfKeys.push(key);
    arrOfValues.push(value);
});

//console.log(Object.values(obj));


const set1 = new Set([4, 5, 6, 7]);

//const arr = [...set1]
//console.log([...set1]); // [4,5,6,7]

const arr = [...map1];

// arr.flat();  // not a function in repl.it

//console.log(arr);


//  Convert an Object to an Array

// using Object.values()
const peopleObj = {
    jim: {
        name: "jim",
        age: 20
    },
    tim: {
        name: "tim",
        age: 22
    }
}
const peopleArray = Object.values(peopleObj);
//console.log(peopleArray);

const myObj = {
    name: 'Jim',
    age: 20
}
const myArr = Object.values(myObj);
//console.log(myArr);


// USING FILTER

// function extensionSearch(fileExtension, arrOfFiles) {
//   return arrOfFiles.filter(file => {
//     return file.endsWith(fileExtension);
//   });
// }

// // instead of 

// function extensionSearch(fileExtension, arrOfFiles) {
//   return arrOfFiles.filter(file => {
//     if (file.includes(fileExtension)) return file;
//   });
// }

// console.log(extensionSearch('txt', ['hello.txt', 'hello.png', 'mlb.txt']));



// recursion practice

function countdown(num) {
    if (num < 1) {
        console.log('blast off!');
    } else {
        console.log(num);
        countdown(num - 1);
    }
}
//countdown(5);

// counting from 1 to n, vs countdown

function myFunc(n) {
    if (n >= 1) {
        //myFunc(n-1); // if n = 5 --> prints 1 to 5 on new lines 
        console.log(n);
        myFunc(n - 1); // if n = 5 --> counts down 5 to 1 on new lines 
        console.log('this is what happens after the recursive call');
        // ^ would print 'n' times, after the countdown / recursion
    }
}
//myFunc(5);

/*
What's happening when myFunc(n-1) is before the console.log(n)?
first, myFunc(5) is called, so 5 >= 1 is true and the code in the
if-statement is executed, which first calls myFunc(n-1) before doing
anything else, so that will recursively call itself with 4, 3, 2,
1, and even call's itself with 0, but nothing happens when n = 0
since 0 >= 1 returns false.  

So, the last thing on the stack is the execution context of 
myFunc(0), which returns nothing, then the next thing to pop
off the stack is myFunc(1), which executes console.log(1) and the
function's code is completed / returns, then this process is
repeated by popping off the top of the stack until we get to the
last item in the stack, which is the execution context of 
myfunc(5), since it was the first thing called (last thing out).

IF WE CHANGED THE ORDER OF THE CODE, so that the recursive call
myFunc(n-1) is AFTER the console.log(n), we would notice that first
it would log n, then recursively call itself with n-1 until the 
condition of n >= 1 returns false.  
The console log happens first, then the recursion, but the main 
difference, aside from the obvious order change, is that the 
function basically is completed immediately after the recursive 
call.  Otherwise, it would still print 5 then 4, then 3..2..1 
and THEN would look back into the function to execute any code
that comes AFTER the recursive call, but in this case there is none.
*/


function factorial(n) {
    // base case: n is 0 or 1
    if (n === 0 || n === 1) {
        return 1
    }
    return n * factorial(n - 1);
}

//console.log(factorial(5)); // 5! = 5*4*3*2*1 = 120


// nested object Example:  sumVals

function sumVals(obj) {
    let total = 0;

    for (val of obj) {
        console.log(val)
    }
}

//sumVals({'a': 1, 'b': {'c': {'d': {'e': 2, 'f': 3}}}});

//sumVals("hello world");


let str = 'start end';

let [first, last] = str.split(' ');

console.log(first);