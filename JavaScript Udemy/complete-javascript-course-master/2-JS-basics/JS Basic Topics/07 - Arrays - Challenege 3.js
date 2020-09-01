/**************************************************************
 *
 * Arrays
 *
***************************************************************

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);    // less common way of defining an array.

console.log(names[0]);  // accesses element zero of the array - 'John'
console.log(names.length);  // returns the length of the array

// Mutate array data
names[1] = 'Ben';   // changing the element in index [1] to "Ben"

names[names.length] = 'Mary';   // adding as the last element in an array.

console.log(names);     // returns ["John", "Ben", "Jane", "Mary"]

// Different Data Types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); // adds element to the end of the array.

john.unshift('Mr.'); // adds to the beginning of the array.

john.pop();     // removes the last element of array

john.shift();   // removes first element of array

console.log(john);

console.log(john.indexOf(1990)); // indexOf returns the position of passed in value in the array
                                // if the value isn't present in the array, returns -1
// .indexOf() is useful for testing whether a value is in an arraay.

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer.' : 'John IS a designer';
                                            // ternary operator
console.log(isDesigner);
*/


/**************************************************************
 *
 * Coding Challenge 3
 *
***************************************************************

John and his family went on a holiday and went to 3 different restaurants.  The bills were 
$124, $48, and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function).
He wants to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, 
and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips ( one for each bill).
2) Containing all three final paid amounts (bill + tip).


function tipCalculator(bill) {
    var percentage;      

    if (bill <= 50) {
        percentage = .2;
    } else if (bill > 50 && bill <= 200) {
        percentage = .15;        
    } else if (bill > 200) {
        percentage = .1;
    }
    return percentage * bill;

}

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
var total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips, total);
*/