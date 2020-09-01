/**************************************************************
 *
 * Loops and Iteration
 *
***************************************************************
Like the if/else statement, loops are another form of the control structures
*/

// for loop -->     for (initial value of counter variable; condition; counter update)
/*
for (var i = 1; i < 11; i++) {
    console.log(i);
} */
/*
var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

// while loop - declare counter variable outside of while loop, add counter update inside loop.

var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++;
}


// continue and break statements

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// using typeof to check if element is a string, and print that string to console.
for (var i = 0; i < john.length; i++) {   
    if (typeof john[i] !== 'string') continue;  // can be written on a single line of the if statement
    console.log(john[i]);
}

// break - exits the loop
for (var i = 0; i < john.length; i++) {  // loop ends once it encounters something that isn't a string
    if (typeof john[i] !== 'string') {
        break;
    } 
    console.log(john[i]);
}
*/

/***************     mini-Challenege - Iterating backwards through a loop   ********************

Loop through the john array in the opposite direction.  Starting from the end ('blue')


var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = john.length - 1; i >= 0; i--) {    
    console.log(john[i]);
}*/




/*************************************************************************************
 *
 *                                  Coding Challenge 5
 *
 *************************************************************************************

John and his family went to 5 different restaurants...
The bills were: $124, $48, $268, $180, and $42.

He wants to tip 20% when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:

1. Create an object with an array for the bill values.
2. Add a method to calculate the tip.
3. Method should include a loop to iterate over all the paid bills and do the tip calculations.
4. As an output: create a new array containing all tips, create an array containing final paid amount.
(Hint: Start with two empty arrays [] as properties and then fill them up in the loop)

// My solution

var john = {
    bill: [124, 48, 268, 180, 42],
    tips: [],
    total: [],
    calcTip: function (bill) {
        for (var i = 0; i < this.bill.length; i++) {            

            if (this.bill[i] < 50) {
                this.tips.push(((this.bill[i])* .2));
                this.total.push(this.bill[i] + ((this.bill[i]) * .2))
            } else if (this.bill[i] >= 50 && this.bill[i] <= 200) {
                this.tips.push(((this.bill[i]) * .15));
                this.total.push(this.bill[i] + ((this.bill[i]) * .15))
            } else if (this.bill[i] > 200) {
                this.tips.push(((this.bill[i]) * .1));
                this.total.push(this.bill[i] + ((this.bill[i]) * .1))
            }
            
        }

    }
}

john.calcTip();

************************************************************************************************



// Lecturer's Solution  - Much cleaner due to decalring variables for % and this.bills[i]

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules in challenge
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill< 200) {
                percentage = .15;
            } else {
                percentage = .1
            }

            // add results to corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + (bill * percentage);

        }
    }
}

john.calcTips();
console.log(john);
*/