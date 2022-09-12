/*  Lexical Structure describes the language rules */

/*  Case sensitivity, spaces, and line breaks
    -language keywords, variables, function names and other identifiers must be consistent
    -most part JS ignores whitespace 
/* 
//comments //
and long comments /* any code inside is ignored */ 

//Literals
    //A literal is a data value that appears directly in a program


/*  Identifiers and reserved words
    An identifier is simply a name and JS as reserved names like if, while, for 
*/    

/*  Unicode
        -JavaScript programs are written using the Unicode character set, and you can use any Unicode characters 
        -in strings and comments. For portability and ease of editing, it is common to use only ASCII letters and 
        -digits in identifiers */
        const café = 1;  // This constant is named "caf\u{e9}"
        const café = 2;  // This constant is different: "cafe\u{301}"
        console.log(café); // => 1: this constant has one value
        console.log(café);  // => 2: this indistinguishable constant has a different value

/*  Optional semicolons
        -Like many programming languages, JavaScript uses the semicolon (;) to separate statements
        - you should as well as some unintented things can happen */
        // return
        // true;  //-> return; true;

/*  Types Values And variables
    - Js can be divided into two categories PRIMITIVE and OBJECT Types
    - booleans, strings, numbers, null, undefined IMMUTABLE primitive types
    - arrays, objects, functions MUTABLE object types */


//numbers

    
//Strings

//booleans

//null and undefined
    
//OBJECT TYPES
    // Arrays
        
    // Objects

    // functions


//expressions and statements
