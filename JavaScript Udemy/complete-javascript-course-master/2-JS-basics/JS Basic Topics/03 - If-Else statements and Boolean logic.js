/*********************************************************
 * 
 * If / else statements
 * 
*********************************************************/
/*
var firstName = 'John';
var civilStatus = 'single';

//if (civilStatus === 'married') {
//    console.log(firstName + ' is married.');
//} else {
//    console.log(firstName + ' is single.');
//}


var isMarried = false;

if (isMarried === true) {
    console.log(firstName + ' is married.');
} else {
    console.log(firstName + ' is single.');
}
*/

/***********************************************************
 * 
 * Boolean Logic
 * 
***********************************************************

* AND (&&)      -->     true if ALL are true
* OR (||)       -->     true if ONE is true
* NOT (!)       -->     inverts true/false value


                        var A
                ----------------------------
                |  AND  |  TRUE  |  FALSE  |
                ----------------------------
    var B       | TRUE  |  TRUE  |  FALSE  |
                ----------------------------
                | FALSE | FALSE  |  FALSE  |
                ----------------------------

                
                              var A
                ----------------------------
                |  OR   |  TRUE  |  FALSE  |
                ----------------------------
    var B       | TRUE  |  TRUE  |  TRUE   |
                ----------------------------
                | FALSE |  TRUE  |  FALSE  |
                ----------------------------

var age = 16;

age >= 20;      // false
age < 30;       // true
!(age < 30);    // false

age >= 20 && age < 30;  // false
age >= 20 || age < 30;  // true


*/

/*
var firstName = 'John';
var age = 16;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) {  // between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a teenager.');
} else {
    console.log(firstName + ' is a man.');
}
*/