//OVERVIEW
// A function is a block of JavaScript code that is defined once but may be 
// executed, or invoked, any number of times. JavaScript functions are 
// parameterized: a function definition may include a list of identifiers, 
// known as parameters, that work as local variables for the body of the 
// function. Function invocations provide values, or arguments, for the 
// function’s parameters. Functions often use their argument values to 
// compute a return value that becomes the value of the function-invocation 
// expression. In addition to the arguments, each invocation has another 
// value—the invocation context—that is the value of the this keyword.

//ANATOMY OF A FUNCTION

//keyWord  name_of_function         parameters(if any)
function your_first_function(name_input, favorite_number) {
    //body of function is inside the curly brackets
    let return_string = `your name is ${name_input}, and your fave num is ${favorite_number}`;
    //if no return is stated the default is undefined
}
// console.log(obj.daniels_function("kelvin", 11))
let name_argument = { name:"Kelvin" }
let favorite_number_argument = 11
//CALLING A FUNCTION
//            name_of_function()----->arguments(if any)
console.log(your_first_function(name_argument,favorite_number_argument));
//console logging functions prints a functions return statement'



//DEFINING FUNCTIONS
//use the function keyword to be used as a declaration or an expression

//FUNCTION DECLERATIONS

//key_word identifier(parameters)
console.log(add_numbers(2,2))
function add_numbers(num1, num2) {
    //statements
    return num1 + num2
}
let four = add_numbers(2,2)
console.log(add_numbers);
//the name of the function becomes a variable whose value is the function

//FUNCTION EXPRESSIONS
//Function expressions look similar to function declarations, but they appear within the context 
//of a larger expression or statement, and the name is optional. Here are some example 

//assigning a function to a variable
const square = function(x) {
    return x * x;
};
console.log(square(10));

// let sorted_array = [33,222,11,10].sort()
// console.log(sorted_array);
//function expressions can also be used as arguments to other functions
console.log([3, 2, 1].sort(function(a, b) { return a - b; }));

//function expressions can be immediately invoked, neat
let tensquared =
    function (x) {
        return x * x;
    }(10);
console.log(tensquared);

//functions defined with expressions cannot be invoked before they are defined.
//thanks to a little quirk called hoisting

// ARROW FUNCTIONS 
// The function keyword is not used, and, since arrow functions are expressions instead of 
// statements, there is no need for a function name, either

const sum = (number1, number2) => {
    return number1 + number2;
    // return undefined
}
let value = sum(2,2)
console.log(value);

//if there is a single return statement the return key word, and curly braces can be omitted 
const sum2 = (number1, number2) => number1 + number2;

//if the arrow function has 1 parameter you can also omit the ()
//name_of_func    =  params => statements
const square_again = num_to_square => num_to_square ** 2

// Arrow functions differ from functions defined in other ways in one critical way: 
// they inherit the value of the this keyword from the environment in which they are defined 
//this will make sense later


//NESTED FUNCTIONS AND SCOPING
//global scope
//function scope
//block scope


let global_variable = "this string can be seen by all"

function hypotenuse(a, b) {

    function square(x) {

        for (let i = 0; i < 3; i++) {
            //console.log(`we are block scoped thanks to i ${i}\n. a is: ${a} and b is: ${b}`);
            
        }

        return x * x;

    }

    return Math.sqrt(square(a) + square(b));

}

console.log(hypotenuse(2, 2));


//INVOKING FUNCTIONS
//The JavaScript code that makes up the body of a function is not executed when the function 
//is defined, but rather when it is invoked JS functions can be invoked 5 ways

//function invocation
hypotenuse(3, 2);

//method invocation
//methods are just functions attached to an object
let obj_example = {
    //hello_world: function()  { console.log("hello world"); } //function expressions
    hello_world: () => { console.log("hello world"); }
}
obj_example.hello_world()








console.log("---------------------------");

let o = {   
    //this = obj o              // An object o.
    m: function() {       // Method m of the object.
        console.log(this === o)
        f();              // Now call the helper function f().
        function f(){    // A nested function f
            console.log(this === o) 
        }
    }
};
o.m();                // Invoke the method m on the object o.
