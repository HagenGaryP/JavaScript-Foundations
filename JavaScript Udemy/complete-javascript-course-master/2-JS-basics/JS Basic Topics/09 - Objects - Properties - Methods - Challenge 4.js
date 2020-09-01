/**************************************************************
 *
 * Objects and Properties
 *
***************************************************************


// Object Literal - initializing an object
var john = {            // created an object called john
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
//console.log(john);    // This will access the object called john, listing everything from above


// can use the "dot notation" --> objectName.keyName    to access and mutate/change data.

console.log(john.firstName); // To read the value of the key "firstName", use the . (.firstName)

// can use brackets to retreive an element.
console.log(john['lastName']);      // must call upon the key name as a string, with quotes

// can also set a variable equal to an object's key name to retrieve a value
var x = 'birthYear';    // key name is 'birthyear'
console.log(john[x]);   // calling object's key name to retrieve its value - 1990


// to mutate the data
john.job = 'designer';      // changed job from teacher to designer
john['isMarried'] = true;   // changed isMarried to true
console.log(john);


// another way of initializing an object

// new Object() syntax
var jane = new Object();    // creates an empty object called jane, which can be filled afterwards
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith'; // 
console.log(jane);
*/


/**************************************************************
 *
 * Objects and Methods
 *
***************************************************************

In the previous lecture, we learned that an object can hold different types of data, including arrays and even other objects.

However, we can also attach functions to objects.  And these functions are then called METHODS.

// using object from last lecture, we want to add a function, which will be called a method, to this john object in order to calculate the age of john.
var john = {            
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {      // created a function/method inside object to return birthyear
        return 2019 - this.birthYear;   // using return
    }
};
// calling the function -->      objectName.functionName(value)
//console.log(john.calcAge(1990));

// using the 'this' keyword
//console.log(john.calcAge());    // function uses 'this' keyword, which passes 'this'.birthyear value

// if we wanted to store the result right in the john object.
/*      can be done by declaring variable, setting it equal to object's method call,
            then setting the object's key (john.age) equal to the RESULT of fcn/method call (age)
var age = john.calcAge();
john.age = age;
console.log(john.age); */

// the above can be done in one line, as followed:
//john.age = john.calcAge();

/*
// using 'this' keyword instead of return in function.  
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function (birthYear) {   // created a function/method inside object to return birthyear
        this.age = 2019 - this.birthYear;
    }
};

john.calcAge();         //calling the object's function (which is a method)
console.log(john);
*/


/*************************************************************************************
 *
 *                                  Coding Challenge 4
 *
 *************************************************************************************
 
 From coding challenge 1
 Mark and John are trying to compare their BMI (Body Mass Index), Which is calculated
 using the formula: BMI = mass / height^2 = mass / (height * height).
 (mass in kg, height in meters).

 Now, we want to implement the same functionality with objects and methods.

1. For each of them, create an object with properties for their full name, mass, and height.
2. Add a method to each object to calculate the BMI and save it to the object, and return it from the method.
3. At the end, log to the console who has the highest BMI, including the full name and respective BMI.
(Don't forget they might have the same BMI)


var mark = {
    fullName: 'Marky Mark',
    mass: 88,
    height: 1.75,
    calcBMI: function (mass, height) {
        this.bmi = this.mass / (this.height*this.height);
    }
}

var john = {
    fullName: 'Johnny Banana',
    mass: 98,
    height: 1.85,
    calcBMI: function (mass, height) {
        this.bmi = this.mass / (this.height * this.height);
    }
}

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(mark.fullName + " has the higher BMI at: " + mark.bmi);
} else if (john.bmi > mark.bmi) {
    console.log(john.fullName + " has the higher BMI at: " + john.bmi);
} else {
    console.log(mark.fullName + ' and ' + john.fullName + ' have the same BMI: ' + mark.bmi);
}


// The lecture's solution is almost exactly like this, so no need to copy it here.
*/