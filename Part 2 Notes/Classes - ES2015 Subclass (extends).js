/*******************************************************************************************
* 
*           ES2015 Subclass Refactor with extends
* 
********************************************************************************************

To achieve the parent-child relationship between (in our example) 'GithubUser', the parent,
and GithubAdminUser (child) with ES2015 syntax.

When creating the CLASS we used the class keyword followed by the name of the class,
in this case "GithubUser", then we wrapped everything in a class body.
Next we create/call the 'constructor' method, and it works just like a constructor function;
it takes the same exact parameters and has same code block.

All the properties we attach onto the constructor's code block are attached onto our instance.
*/
// GithubUser constructor function AFTER being refactored to a CLASS
class GithubUser {
    // "constructor" method, similar to Constructor Function
    constructor(username, billingPlan = 'free') {
        this.username = username;
        this.billingPlan = billingPlan;
        this.repositories = [];
    }
    
    // Prototype methods, defined (using shorthand) inside the class body.
    
    createRepository(name) {    // shortand syntax vs const createRepository = function(name)
        this.repositories.push({ name });
    } // notice NO commas ',' after ending curly braces, unlike in objects
    editBillingPlann(plan) {
        this.billingPlan = plan;
    }
    changeUsername(newName) {
        this.username = newName;
    }
}


function GithubAdminUser(username) {
    GithubUser.call(this, username, 'paid');// .call sets |this| variable in first arg to GithubUser
    this.adminAcess = true;
}
// set GithubAdminUser's prototype to GithubUser - this means it inherits everything from GithubUser
GithubAdminUser.prototype = Object.create(GithubUser.prototype); 
GithubAdminUser.prototype.constructor = GithubAdminUser; // setting proto to the constructor

GithubAdminUser.prototype.updatePermissions = function() {
    return "Success! The user's permissions updated";
};
GithubAdminUser.prototype.deleteUser = function(user) {
    return `${user} is deleted from GitHub`;
}
GithubAdminUser.prototype.resetUserPassword = function(user) {
    return `The password for ${user} is reset`;
}

/**********************
* OBJECTIVE FOR LESSON:
***********************
How to form the relationship between parent (GithubUser) and child (GithubAdminUser)

To do this we use Subclassing with "extends"

The "extends" keyword is used in class declarations or class expressions 
    to create a class as a child of another class.

*/
// creating subclass by using extends (refactoring the above code)
class GithubAdminUser extends GithubUser {
    
    // if there's a constructor present in the subclass (here)
    // it needs to first call "super()" before using |"this"|

    constructor(username) {     // args passed in should be what this ext-constructor is passed from 'new' call
        
        // the super() function must be passed the args that its parent accepts, and now has access to these properties
        super(username, 'paid')     // args are passed in, and 'paid' is passed to billingPlan.
        
        this.adminAcess = true;     // extension specific property
    }
    
    // now we want to add all of the prototype methods. (can use shorthand syntax)
    updatePermissions() {
        return "Success! The user's permissions updated";
    }
    deleteUser(user) {
        return `${user} is deleted from GitHub`;
    }
    resetUserPassword(user) {
        return `The password for ${user} is reset`;
    }

}



/********************
* Summary
*********************

Creating a class is essentially the same thing as making a Constructor Function and
adding properties to it with prototype or linking the prototype of the instance that you
want to get the properties from Constructor by creating prototype methods on it.

Main difference is using class keyword and the name you want your class to be
and making a constructor method inside the class body, followed by the prototype methods.

When creating a child of that (parent) class, we use the extends keyword:
    "class ChildClassName extends ParentClassName { subclass body here } "
If the subclass (child) has a constructor, super() function must be called
    and passed the arguments that the parent class would expect.

*/