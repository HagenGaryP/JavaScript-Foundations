/************************************************************************************
* 
*                  Callback Functions
* 
*************************************************************************************

In the previous lesson, we introduced the idea of "first-class" functions in JavaScript.
We took a look at an example where a function was passed to another function as an argument.

Let's take a look at another example:
*/
const addMessage = (message) => {
    return message;
}

const today = (callback) => {
    const todaysDateObj = new Date;
    const message = callback('Today is');

    return `${message} ${todaysDateObj.toDateString()}`
}

today(addMessage);

/*
In the example, the "addMessage" function is considered a callback function. 
A callback function is a function passed as an argument to another function. 

If the function it is passed to invokes the function, it is a callback!

Callback functions have a lot of different use cases such as:

    - event handlers (when a user clicks a button, run a callback function)
    - after a program reads a file on the file system, run a call back function on the text
    - when a web request is made, run a callback function on the data when it returns
    - the "map" method accepts a callback function and transforms the elements in an array