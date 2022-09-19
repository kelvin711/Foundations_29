//TYPE CONVERSION
// JavaScript is very flexible about the types of values it requires. 
// We’ve seen this for booleans: when JavaScript expects a boolean value, 
// you may supply a value of any type, and JavaScript will convert it as needed. 
// Some values (“truthy” values) convert to true 
// and others (“falsy” values) convert to false

//the JS interpeter will implicitly make conversions
//but before that lets talk explicit conversion
//explicit conversion happens when we the programmer does it
// The simplest way to perform an explicit type conversion is to use the 
// Boolean(), Number(), and String() functions


Number("3") // => 3 parseInt()
String(false)  // => "false":  false.toString()
Boolean([])    // => true (!![])


// = is assignment
// == loose comparison
// === strict comparison
// undefined == true
// "12" + 12 = 24
// console.log(3 + []); // 3 + 0
// console.log(12 + "12");
//plus operand also acts as concat
//           true && false ---> false

//what happens when we use a loose comparison?? well look at the table!
//JAVASCRIPT TYPE CONVERSIONS
//    Value             ||	   to String        ||	 to Number  ||	 to Boolean
// undefined                    "undefined"         NaN             false
// null                         "null"              0               false
//true                          "true"              1              
//false                         "false"             0
//"" (empty string)                                 0               false
//"1.2" (nonempty, numeric)                         1.2             true
//"one" (nonempty, non-numeric)                     NaN             true
//0                             "0"                                 false
//-0                            "0"                                 false
//1 (finite, non-zero)          "1"                                 true
//Infinity                      "Infinity"                          true
//-Infinity                     "-Infinity"                         true
//NaN                           "NaN"                               false
//{} (any object)               complicated         complicated     true
//[] (empty array)              ""                  0               true
//[9,8] (one numeric element)     "9,8"                 9               true
//['a'] (any other array)       "a"                 NaN             true
//function(){} (any function)   complicated         NaN             true

//LOGICAL OPERATORS
// The logical operators &&, ||, and ! perform Boolean algebra 
// The && operation returns the first falsy value or the last value if 
// no falsy value is found.


let t1 = true
let t2 = true
let f1 = false
let f2 = false

console.log(t1 && t2);

console.log(t2 && t1);

console.log(t1 && f1);

console.log(f1 && t1);

console.log(f1 && f2);

console.log(f2 && f1);

let let_add_falsy = (0 && undefined) + 2  

let let_add_truthy = ("1.2" && true) + 2

//what would this return
console.log(((1 && 2) && (false && false)))


// The || operator performs the Boolean OR operation on its two operands. 
// If one or both operands is truthy, it returns a truthy value. 
// If both operands are falsy, it returns a falsy value.

// It starts by evaluating its first operand, the expression on its left. 
// If the value of this first operand is truthy, it short-circuits and returns 
// that truthy value without ever evaluating the expression on the right. 
// If, on the other hand, the value of the first operand is falsy, 
// then || evaluates its second operand and returns the value of that expression.
// true || false --> true


console.log("1.2" || 1);

console.log(0 || NaN);

console.log(!false);
console.log(!true);


// avoid right side operands with side effects
let truthy = [1]
let falsy = null
//           true && true --> true
console.log(truthy && truthy[0]);
//         true &&  error
console.log(true || falsy[0]);
//console.log(falsy[0]);