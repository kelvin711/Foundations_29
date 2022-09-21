//FUNCTIONS 2 ELECTRIC BOOGALOO EDITION

//functional programming is a programming paradigm where programs are constructed by 
//applying and composing functions. we can do this because functions return a value!

let add = (x, y) => {
    //return undefined
    return x + y
}

let subtract = (x, y) => {
    return x - y
}

// const numA = add(54, 627) //681
// const numB = add(235, 8654) //8889

const numC = subtract(add(235, 8654), add(54, 627))
console.log(numC);


//neat lets cover
//CALLBACK FUNCTIONS 
// A callback is a function that you write and then pass to some other function. That other 
// function then invokes (“calls back”) your function when some condition is met or some 
// (asynchronous) event occurs

setTimeout( () => console.log("that took a while"), 2000)

//why use callbacks?
// Callbacks make sure that a function is not going to run before a task is completed but 
// will run right after the task has completed. It helps us develop asynchronous JavaScript 
// code and keeps us safe from problems and errors

function find_a_plus_b_squared(a, b, square_root_function) {
    let value_to_root = a ** 2 + b ** 2
    //once the value is taken we pass it to the square_root_function
    return square_root_function(value_to_root);
}

function square_root_this_num(a_plus_b_squared) {
    // Do what you need with the value
    return Math.sqrt(a_plus_b_squared)
}

console.log(find_a_plus_b_squared(2,2,square_root_this_num));


const greetingMachine = (name, banana) => {
    return banana(name)
}

const hello = name => {
    console.log(`Hello, ${name}!`)
}
const sup = name => {
    console.log(`'Sup, ${name}?`)
}
const yo = name => {
    console.log(`Yo, ${name}!`)
}
const goodmorning = name => {
    console.log(`Good morning, ${name}!`)
}
const addTen = num => {
    return num + 10 
}

console.log(greetingMachine(["Peyton", "Alex"], goodmorning));


// we can also write callback functions inline
function hypotenuse(a, b, square_function) {
    return Math.sqrt(square_function(a) + square_function(b));
}

console.log(hypotenuse(2, 2, (n) => n ** 2));



//HIGHER ORDER FUNCTION
// A function that takes 1+ function(s) as an argument and/or returns a function
// They have similar benefits to callbacks: flexibility and reusability
// You’ve already seen them: they’re the outer functions in the callback examples

function B() {
    return "Inside the method B. called from B"
    //return undefined
}
// first method that return second method
function A() {
    console.log("Method A being called")
    // return second method
    // return B()
    //return undefined
}
//    function B()
let returned_function = A()
console.log(returned_function);

// call second method by first method
// returned_function()
// returned_function()

// Higher Order Array Methods
// Functions built into JavaScript that accept callbacks as arguments
// We will cover forEach, map, filter, and reduce
// Note: not all higher order functions have to work with arrays, there are others (setTimeout, addEventListener, etc.)

let names = ["Anthony", "Alex", "Tiara", "Greg", "Amadi", "Jessica"]
//DRY DONT REPEAT YOURSELF
let each_name_loop = []
for (let i = 0; i < names.length; i++) {
    each_name_loop.push(names[i])
}
console.log(each_name_loop);

let hello_names = []
for (let i = 0; i < names.length; i++) {
    hello_names.push(`hello ${names[i]}`)
}
console.log(hello_names);

let each_name_index = []
for (let i = 0; i < names.length; i++) {
    each_name_index.push(`${names[i]} ${i}`)
}
console.log(each_name_index);

//we are not executing DRY we are repeating core logic a lot with these three examples
//the core logic is making a new array and then just pushing into it every iteration
//this is what makes higher order functions powerful

let each_name = names.map( (one_name) => one_name)
let hello_each_name = names.map((one_name) => "hello " + one_name)
let each_name_and_index = names.map((one_name, idx) => one_name + " " + idx)





// -----------------------------------------------------------------------------------
// map under the hood


let originalArray = [1, 2, 3, 4];


function map(array, callback) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array))
    };
    return newArray
}
console.log(map(originalArray, (num) => num + 2 ));