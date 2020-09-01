/**********************************************
* Variables and data types


var firstName = 'Gary';
console.log(firstName);

var lastName = 'Hagen';
var age = 9000;

var fullAge = true;
console.log(fullAge);

var job;    // job is not defined
console.log(job); // This will print 'undefined'

job = 'Teacher';
console.log(job);

/**********************************************
 * Variable mutation and type coercion
 

 var firstName = 'Gary';
 var age = 9000;

 console.log(firstName + ' ' + age); // type coercion

 // Type Coercion - JavaScript automatically converts
 //                 types from one to another as needed.

 var job, isMarried;  // cleaner to assign multiple variables on one line
 job = 'teacher';
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' 
    + job + '. Is he married? ' + isMarried);


// Variable Mutation

age = 'nine thousand';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old '
    + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

/*