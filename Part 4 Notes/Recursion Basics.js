
/********************************************************************************
* 
*                              THE CALL STACK
* 
*********************************************************************************

JavaScript is "single-threaded" which means only one function can run at a time. 

Since JavaScript can only execute one function at a time, how does it know which function to execute?

The call stack is the structure JavaScript uses to figure out which function it should be running at any point in time.

When a function is invoked, it is placed on top of the call stack. The call stack is like a stack of books. 
The current book you are reading is placed on the top of the call stack. 
When you are done reading the book, you can remove it from your stack of books and start the next book in line.


*/


// USING THE CODE 'debugger'        - Scott's code example


const one = () => {
    debugger;
    return 1;
};

const two = () => {
    debugger;
    const numOne = one();
    return numOne = numOne;
};

const three = () => {
    debugger;
    const numOne = one();
    const numTwo = two();

    return numOne + numTwo;
};

const predictTheValue = three();


/*      *********   USING THE DEBUGGER TOOLS   *************

We see what's happening when each function is invoked, can use the step button in debugger
to see what happens next.

Inside debugger we can see the Call Stack, as well as the scope, breakpoints, events.. so on.

can see the call stack as you step to next line, showing us what is being added or removed.
*/




/********************************************************************************
*
*                               Intro to Recursion
*
*********************************************************************************

Look at my other sets of notes on recursion with better examples and explanations.


*/


// scott's countDown example USING AN ITERATIVE APPROACH, (not using recursion)

function countDown(num) {
    for (let i = num; i >= 1; i--) {
        console.log(i);
    }
}
countDown(5);

// USING RECURSION

function countDown(num) {
    // base case (stopping case)
    if (num < 1) {
        console.log('DONE!');
    } else {
        console.log(num);
        countDown(num - 1);
    }
}
countDown(5);