/**************************************************************
 *
 * Functions
 *
***************************************************************


function calculateAge(birthYear) {
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(Year, firstName) {
    var age = calculateAge(Year);
    var retirement = 65 - age;
    
    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
    
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');

*/

/**************************************************************
 *
 * Function Statement and Expressions
 *
***************************************************************

// Function Declaration
function whatDoYouDo(job, firstName) {
}
*/

/*

// Function Expression
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':                                   // returns value and finishes function
            return firstName + ' teaches kids how to code'; // Don't need to use 'break'
        case 'driver':
            return firstName + ' drives a cab.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does soemthing else...';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/