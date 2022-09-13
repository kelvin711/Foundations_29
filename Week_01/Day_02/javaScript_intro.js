/*  Lexical Structure describes the language rules */

/*  Case sensitivity, spaces, and line breaks
    -language keywords, variables, function names and other identifiers must be consistent
    -most part JS ignores whitespace
    shift alt f, shift option f   
/*
 
//comments //
and long comments /* any code inside is ignored */ 

//Literals
    //A literal is a data value that appears directly in a program
    // 12 --> number
    // "hello" ---> string
    // [] --> array
    // {} --> object

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
        console.log(café);  // => 2: this indistinguishable constant has a different value

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
// 12 number literal
//declaring initializing assigning a value
   let              a               = 12;
   // = assigning
   // == loose comparison
   // === strict comparison
   console.log(a + 3); //addition
   console.log(11 - 3); //subtraction
   console.log(11 * 3); //multiply
   console.log(11 / 3); //divide
   console.log(11 % 3); //modulo
   console.log(11 ** 3); //exponents


//Strings
    // "or not, you're"
    // 'hold stuff, you\'re'
    //string are arraylike
    let camel_suck = "that one smoking camel"
    let other = "got sued"
    console.log(other[2]);
    //template literal
    console.log(`regular string and ${camel_suck} ${other}`);
    console.log("regular string and " + camel_suck + " " + other);

//booleans
    // true or false
    // conditionals
    // if (condition) {
    //     statement;
    // }
    if (true) {
        console.log("Lebron is the undisputed GOAT");
    }
    // truthy and falsy
    // 0, ""

//null and undefined
    // null - absence of value
    // undefined - just doesnt exist
    
//OBJECT TYPES
    // Arrays
    // array literal -->  []
    //arrays are 0 based, each item is called an element
    //          0       1         2       3
    let arr1 = [12, "strings", ["hey"], {p: 20}]
    console.log(arr1[3]);
    
        
    // Objects
    let obj = {
        property: "value",
        another_one: ["DJ Khaled"]
    }
    console.log(obj.property);

    // functions
    // set of instructions
    //              parameter
    function greet(name) {
        console.log(`hi ${name}`);
    }
    greet("MJ not the goat")



//expressions and statements
    //Expressions are evaluated to produce a value, but statements are executed to make something happen.
    // 4 + 5 --> expression
    // primary expressions literals, reserved words, refrence to a variable
    // if () {

    // }
