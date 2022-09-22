////////// PROBLEM 5 //////////
let names = ['Tyler', 'Dylan', 'Ryan', 'Tyler', 'Tyler', 'Tyler', 'Victor']
/*
  Write a function called uniq that takes in an array and a callback function.
  Remove any duplicate values from the array, and invoke the callback with the modified array as an argument.
  Hint: you can use a nested for loop to do this. or a set
*/
const uniq = (names_arrayz, callback_func) => {
    for (let i = 0; i < names_arrayz.length; i++) {
        for(let j = i + 1; j < names_arrayz.length; j++) {
            if ( names_arrayz[i] === names_arrayz[j] ) {
                names_arrayz.splice(j, 1)
                j--;
            }
        }
    }
    callback_func(names_arrayz)
}
const write_new_array = (uniq_arr) => {
    console.log(`The new names array with all the duplicate items removed is ${uniq_arr}.`)
}
write_new_array.hello = "hello";
console.log(write_new_array.hello);
uniq(names, write_new_array);
/*
  Invoke the uniq function, passing in the names array from above and a callback function.
  The callback function should take in one parameter called uniqArr.
  The callback should print a string that says:
  'The new names array with all the duplicate items removed is [UNIQARRPARAM].'
*/

// CODE HERE