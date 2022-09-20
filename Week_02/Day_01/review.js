const emailCheck = (email) => {
  email = email.trim();
  console.log(email);
  if (email.includes("@")) {
    return "Email verified";
  } else {
    return "Must provide a valid email address";
  }
}
console.log(emailCheck("     gbull@yahoo.com"));

////////////////// PROBLEM 16 ////////////////////
let contestants = ['Katniss', 'Peeta', 'Fox-face', 'Glimmer', 'Cato', 'Rue', 'Thresh', 'Clove', 'Marvel']
let loser = 'Katniss'
/*
  Write a function that is called theEliminator, which takes in two arguments, contestants (which will each be an array of strings), and loser (which will be a string).
  The function should loop over the array of contestant names. If the loser string appears in the array, splice it out. Return the new contestants array.
*/

//CODE HERE
function theEliminator(contestants_array, loser) {
    for (let i = 0; i < contestants_array.length; i++) {
        console.log(contestants_array[i]);
        //   katniss === katniss
        if (contestants_array[i] === loser) {
            
            contestants_array.splice(i,1);
        }
    }
    return contestants_array;
}

console.log(theEliminator(contestants,loser));


////////////////// PROBLEM 22 ////////////////////

let duck = "cute";

function bathroom() {
  let rubberDuck = "squeaky";
  function bathtub() {
    let sailorDuck = "nautical";
  }
}

function pond() {
  let realDuck = "fluffy";
}

//This array should contain the variable names (as strings) accessible in the global scope.
let globalScope = ["duck"]
//This array should contain the variable names (as strings) accessible in the bathroom function.
let bathroomScope = ["duck", "rubberduck"]
//This array should contain the variable names (as strings) accessible in the bathtub function.
let bathtubScope = ["duck", "rubberduck", "sailorduck"]
//This array should contain the variable names (as strings) accessible in the pond function.
let pondScope = ["realduck", "duck"]

//problem 6 
function add(num1, num2) {
  if (typeof num1 !== "number" && typeof num2 !== "number" ) {
    throw new Error("not a number data type ya dingus")
  }
  return parseInt(num1) + parseInt(num2)
}

console.log(add({a:1}, [1]));

let sum = 0

const add = (num1, num2) => {
  num1 = Number(num1) 
  num2 = Number(num2)
  return (num1 + num2)

}
sum = add({a:1}, [1])
console.log (sum)