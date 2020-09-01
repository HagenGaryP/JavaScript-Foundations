/*
CLOSURE

Closure is the ability for a function to remember its lexical environment, when it is not
        currently exectued in its lexical environment.
*/

// Example of Closure

// Global Scope (funcOne, funcReturned)

function funcOne() {
    const one = 1;

    return function funcTwo() { // remembers the lex env it had access to when it was created - funcOne
        console.log(one);
    }
}

const funcReturned = funcOne();

console.log(funcReturned);

funcReturned();  // executing in the global scope, so output is '1'


// Sum function example

// Global Scope (sum, calculateSum)

function sum() {
    const startingValue = Math.floor(Math.random() * 100) + 1;

    return function funcFromSum(num) { // within lex env of the sum() function,
        return num + startingValue;     //  which gives it access to startingValue.
    }
}

const calculateSum = sum(); // sets calculateSum to whatever the sum() function returns

console.log(calculateSum(22));

/*
OUTPUT is a random number, but this shows closure.

Invoking calculateSum(22), passes 'num' of 22 into funcFromSum(num), 
    which returns num + startingValue.

if calculateSum(22) was invoked several times, it would console log the same number each time.

The reason why they'd be the same number (even with the Math.random() ) is due to the fact that
    we are only calling sum() once, so we use it once and funcFromSum has access to its lex env.

if sum() was called more than once then the Math.random() would be changing startingValue each time.
*/