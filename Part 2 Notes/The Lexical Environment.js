/*

The LEXICAL ENVIRONMENT is the technical term used to describe scope.

EVERY SCOPE HAS A "LEXICAL ENVIRONMENT".

"LEXICAL SCOPE" IS ALSO REFERRED TO AS "STATIC SCOPE" AND DESCRIBES THE BEHAVIOR THATA VARIABLE 
IN ONE LOCATION IN YOUR PROGRAM MAY NOT BE ACCESSIBLE IN ANOTHER PART OF THE PROGRAM.


The Lexical Environment has two main components:
    
    1) Environment Records

    2) A link to its outer Lexical Environment (if it is nested within another environment)
/


What is an Environment Record?

The main purpose of an environment record is to store the identifier bindings 
(e.g., assign values to variables) that current scope creates when a program is executed.

There are different types of environment records in the ECMAScript specification, e.g.

    1) Object Environment Record - stores values on the "global object".  anything created with 'var'

    2) Declarative Environment Record - stores variables created with 'let' or const' 
/

The important disctinction between the two is that the OBJECT ENVIRONMENT RECORD stores values on
the "global object".  All variables created with the 'var' keyword are stored in an Object Environment
Record.

Variables created with either 'let' or 'const' are stored in a Declarative Environment record.



In addition to Environment Records, every Lexical Environment has a link to a surrounding lexical
environment (unless it is the global environment). 

The outer lexical environment is accessed when an identifier is used in the local lexical environment
but it can't be resolved and the outer lexical environment is referenced until the identifier is found
or the global environment (top-level lexical environment) is reached.

If the identifier is not found a Reference Error is thrown.  This is how the "Scope Chain" is traversed.


Simplifying the terms, a Lexical Environment has two components:

1) Local Scope (the Environment Records, all the identifier bindings defined within the scope)

2) Scope Chain (a link to the outer Lexical Environment)

*/