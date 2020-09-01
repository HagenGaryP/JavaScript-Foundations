// Lecture on Function Constructors
/*
// Creating an object using the object literal
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};


// creating a function constructor - "blueprint" - Convention is to capitalize first letter of constructor.

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// using constructor to create an object.  This is called INSTANTIATION

var john = new Person('John', 1990, 'teacher');
*/
/*
When we use the 'new' operator, first a brand new EMPTY object is created.  Then the constructor function,
which is "Person" in this case, is called with the arguments that we specified.

Calling a function creates a new execution context that also has a 'this' variable.
In a regular variable call, the 'this' variable points to the global object.

The new operator makes it so that the 'this' variable of the function points to the empty object it creates.

So, the new operator points the 'this' object to a new empty object.

When we set the name, year, and job properties to "this", it's the same as setting them on the new empty object.

*/

// INHERITANCE

// Suppose we wanted to add a method to our object.

var Person = function (name, yearOfBirth, job) {    // FUNCTION CONSTRUCTOR
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    // this.calculateAge = function() {
    //     console.log(2019 - this.yearOfBirth);
    // }
}

// var john = new Person('John', 1990, 'teacher');     // instance of Person

// john.calculateAge();

// Suppose we want to create more instances of Person

// var jane = new Person('Jane', 1969, 'designer');

// var mark = new Person('Mark', 1948, 'retired');


// We've learned that we have to add all the methods and properties that we want to be inherited, 
//     into the constructor's prototype property.

Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
};

var john = new Person('John', 1990, 'teacher');     // instance of Person

var jane = new Person('Jane', 1969, 'designer');

var mark = new Person('Mark', 1948, 'retired');

// If we run this, effectively none of the objects have the "calculateAge" method actually attached to them.
// But they will still have access to it, because it's in their prototype.

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

// this is how inheritance works.  
// Attaching methods to the constructor function's protype property is a common use.

// we can also add properties instead of methods, but it's not as common.

Person.prototype.lastName = 'Smith'; // making all instances of Person have property lastName = 'Smith'

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);