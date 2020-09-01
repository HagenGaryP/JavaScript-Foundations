/****************************************************************************************************
*
*                           The Scope Chain & Nested Scopes
* 
*****************************************************************************************************

SCOPE CHAIN TRAVERSAL AND HIERARCHY

The Scope Chain takes a bottom-up approach, meaning local scopes can check for variables outside of 
their current scope, but the global scope (or scopes higher in the chain) cannot look down the chain.
*/

// EXAMPLE: the scope chain (the surrounding lexical environments) of the 'allergies' function.
const peanut = 'peanut';

function allergies() {
    const allergy = 'allergy';
    return `${peanut} ${allergy}`
}

allergies();

/*

Scope Chain traversal is unidirectional (child to parent, not parent to child).



TRAVERSING THE SCOPE CHAIN WITH NESTED SCOPES

A nested scope is a scope within a scope. 

Nested scopes are created by nesting functions and block statements within each other. 

The innermost scope has access to all the functions it is nested within. 
Let's take a look at an example.                 */

// Global Scope (newYorkBoroughs, manhattan() )      this means everything has access to these

const newYorkBoroughs = [                       // Global Scope
    'Brooklyn',
    'The Bronx',
    'Manhattan',
    'Queens',
    'Staten Island',
];

function manhattan() {                          // manhattan Scope
    const manhattanLocalScope = 'manhattan';

    function soHo() {                           // soHo Scope
        const soHoLocalScope = 'soHo';
        
        // block code                           // block Scope
        {
            const ChelseaLocalScope = 'chelsea'; // this is the inner most part of scope
        }
        // block scope (chelseaLocalScope, soHoLocalScope, manhattanLocalScope, soHo, 
        //                      newYorkBoroughs, manhattan)      
        //the inner most part of the scope has access to everything declared in the program.
    }

    soHo();                                     // manhattan Scope
    // soHo scope (soHoLocalScope, )
}

manhattan();                                    // Global Scope
// manhattan scope (manhattanLocalScope, soHo(), )



/////////////////////////////////////////////////////////////////////////
// SAME CODE - IF WE MOVED THE BLOCK CODE
function manhattan() {
    constant manhattanLocalScope = 'manhattan';

    function soHo() {
        const soHoLocalScope = 'soHo';

    }

    soHo();
    // soHo scope (soHoLocalScope, )

    // block code
    {
        const ChelseaLocalScope = 'chelsea';
    }
    // block scope ( manhattanLocalScope, soHo, 

}

/*
NOTE:  The manhattan() function is the block code's parent scope.
    Since manhattan() scope includes manhattanLocalScope and the soHo() function,
    the block code (inside the manhattan function) has access to soHo() as well.

A nested scope is a scope within a scope. Nested scopes are created by nesting functions
    and block statements within each other.
The innermost scope has access to all the functions it is nested within.

Since the block scope is nested inside of all the scopes, it has access to every
    variable and function (anything labeled with an identifier) defined within the program.

Remember, if a scope is nested inside another scope, the nested scope can look up to its parents
but the parent scope can't look down into its child's scope
*/



// REFERENCE ERRORS

// When a Scope Chain can't resolve (or find) a named identifier (variable or function name) 
// in the Scope Chain, a Reference Error: "name of the identifier" is not defined.


// Here's a code example to illustrate a Reference Error:
const newYorkBoroughs = ['Brooklyn', 'The Bronx', 'Manhattan', 'Queens', 'Staten Island'];

function manhattan() {
    let manhattanLS = 'manhattan';
    return brooklyn;
}

manhattan(); 
// OUTPUT: "ReferenceError: brooklyn is not defined"