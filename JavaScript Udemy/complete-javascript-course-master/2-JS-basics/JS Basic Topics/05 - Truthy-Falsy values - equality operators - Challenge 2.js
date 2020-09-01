/*********************************************************
 *
 * Truthy and Falsy values and equality operators
 *
*********************************************************/

/* falsy values: undefined, null, 0, '', NaN

A falsy value is a value that is considered false when encountered in a Boolean context.

JavaScript uses Type Conversion to coerce any value to a Boolean in contexts that require it,
     such as conditionals and loops.

There are 7 falsy values in JavaScript.

This means that when JavaScript is expecting a boolean and it is given one of the values below,
     it will always evaluate to “falsy”.

--------------------------------------------------------------------------------------------------
false	        The keyword false
--------------------------------------------------------------------------------------------------
0	            The number zero
--------------------------------------------------------------------------------------------------
0n              BigInt, when used as a boolean, follows the same rule as a Number. 0n is falsy.
--------------------------------------------------------------------------------------------------
"", '', ``      This is an empty string (the length of the string is zero). 
                Strings in JavaScript can be defined with double quotes "", single quotes '', 
                    or Template literals ``.
--------------------------------------------------------------------------------------------------
null	        null - the absence of any value
--------------------------------------------------------------------------------------------------
undefined	    undefined - the primitive value
--------------------------------------------------------------------------------------------------
NaN	            NaN - not a number
--------------------------------------------------------------------------------------------------



// truthy values:  NOT falsy values

var height;

height = 23;    // WITHOUT THIS, THE VARIABLE IS UNDEFINED.

//height = 0;     // Zero is a falsy value, so this causes else statement to return falsy's conditional

if (height || height === 0) {   // by including the OR height === 0, we allow conditional to be met.
    console.log('Variable is defined.');
} else {
    console.log('Variable has NOT been defined.');  // returned whenever var is a FALSY value.
}

// Equality operators using type coercion 
//      - which means that the data types of both variables do not have to match.

if (height == '23') {  // using (==) operator does type coercion,
                        // converting the string of '23' to the number 23
    console.log('The == operator does type coercion!');
}

console.log(23 == '23');        // true - due to TYPE COERCION

console.log(23 === '23');       // false - STRICT EQUALITY OPERATOR; 23 != '23'

// Using the strict equality operator, the triple equal (===), is best practice in order 
//      to avoid unexpected situations and bugs.  

// Can use (===) all times that you don't want to allow for type coercion.
*/



/*********************************************************
 *
 * Coding challenge 2
 *
**********************************************************

John and Mike both play besketball on different teams.  In the last 3 games, John's team 
    scored 89, 120, and 103 points.  While Mike's team scored 116, 94, and 123 points.

1. Calculate the average score for each team.
2. Decide which team has higher average score and print winner to console. (include score)
3. Then, change the scores to show different winners.  Take tie scores into consideration.

4. (Bonus): Mary also plays basketball, and her team scored 97, 134, and 105 points.
            Repeat steps 1-3 for Mary.  Hint: You will need the && operator.
*/

//var johnScore1, johnScore2, johnScore3, mikeScore1, mikeScore2, mikeScore3;
//var maryScore1, maryScore2, maryScore3; // bonus  
/*                  
        // brute force coding... so ugly, even I didn't use it
johnScore1 = 89;
johnScore2 = 120;
johnScore3 = 103;
mikeScore1 = 116;
mikeScore2 = 94;
mikeScore3 = 123;
maryScore1 = 97;  // 97
maryScore2 = 134; // 134
maryScore3 = 105; // 105
var johnAvg, mikeAvg, maryAvg;
johnAvg = (johnScore1 + johnScore2 + johnScore3) / 3
mikeAvg = (mikeScore1 + mikeScore2 + mikeScore3) / 3
maryAvg = (maryScore1 + maryScore2 + maryScore3) / 3
*/

// finding sum using .reduce on the array - 
/*
var arrSum = arr => arr.reduce((a, b) => a + b, 0); // sums paramaters, starting at zero
console.log(arrSum([89, 120, 103]));
console.log(arrSum([116, 94, 123]));
console.log(arrSum([97, 134, 105]));
*/

/*
// finding average value using .reduce on the array

const arrAvg = arr => arr.reduce((a, b) => a + b, 0) / arr.length

var johnAvg = arrAvg([89, 120, 103]);
var mikeAvg = arrAvg([116, 94, 123]);
var maryAvg = arrAvg([97, 134, 105]);


console.log("John's team had an average score of " + johnAvg); // original Avg = 104
console.log("Mike's team had an average score of " + mikeAvg); // original Avg = 111
console.log("Mary's team had an average score of " + maryAvg); // original Avg = 112 (winner)


if ((johnAvg > mikeAvg) && (johnAvg > maryAvg)) {
    console.log("John's team wins, with an average score of " + johnAvg);
} else if ((mikeAvg > johnAvg) && (mikeAvg > maryAvg)) {
    console.log("Mike's team wins, with an average score of " + mikeAvg);
} else if ((maryAvg > johnAvg) && (maryAvg > mikeAvg)) {
    console.log("Mary's team wins, with an average score of " + maryAvg);
} else if ((johnAvg > maryAvg) && (johnAvg == mikeAvg)) {
    console.log("There was a tie between John and Mike's team, with an average score of " + johnAvg);
} else if ((johnAvg > mikeAvg) && (johnAvg == maryAvg)) {
    console.log("There was a tie between John and Mary's team, with an average score of " + johnAvg);
} else if ((maryAvg > johnAvg) && (maryAvg == mikeAvg)) {
    console.log("There was a tie between John and Mike's team, with an average score of " + maryAvg);
}

*/



/**************************************************************
 * 
 * Coding Challenge 2: SOLUTIONS (from the lecturer)
 * 
***************************************************************


var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);

/* this is the code for those who did not do the bonus with Mary's team.
if (scoreJohn > scoreMike) {
    console.log("John's team wins with " + scoreJohn + " points.");
} else if (scoreMike > scoreJohn) {
    console.log("Mike's team wins with " + scoreJohn + " points.");
} else {
    console.log('There is a draw.');
} */
/*
if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log("John's team wins with " + scoreJohn + " points.");
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log("Mike's team wins with " + scoreMike + " points.");
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log("Mary's team wins with " + scoreMary + " points.");
} else {
    console.log('There is a draw.');
} */