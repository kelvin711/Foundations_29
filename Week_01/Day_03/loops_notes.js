/*
loops
repeat code that we want to run more than once
while or for? how do you know
for loop is better when you know there is a set amount of
times you want to loop
-for ---> loops through a block of code a number of times
-for in --> loops through the properties of an object {}
-for of ---> loops throught the values of an iterable object (like arrays, maps, strings)
-while* ---> loops through a block of code while a specified condition is true
-do while ---> statement gets run at least once then check condition
---KEY WORDS IN LOOPS---
continue
continues on to the next step/iterator ignoring any code below it
break
exit the code
*/

// while (expression) {
//     statement
// }

// do {
//     statement
// } while (expression)

// for (initialize; test; how_increment;) {
//     statement
// }

// for (statement1; statement2; statement3;) {
//     statement 1 set the variable of where we want the loop to Start
//     statement 2 define the condition for when we want the loop to stop
//     statement 3 a stepping value
// }

// for (let i = 10; i >= 1; i--) {
//     if ( i === 8) {
//         break;
//     }
//     console.log(i);
// }

//strings act like arrays when you loop thru them
//          [h,e,l,l,o]
// //        0 1 2 3 4
let word = "hello"

// for ( let i = 0; i < word.length; i++ ) {
//     console.log(word[i]);
// }

//for of loops are for iterables data types strings, arrays, maps ....
for (const letter of word) {
    console.log(letter);
}

// l l l l l
// 0 1 2 3 4
//[h,e,l,l,o]



//for in loop is for objects
let not_map = {
    a: 1,
    b: 2
}

for (const key in not_map) {
    console.log(not_map[key]);
}