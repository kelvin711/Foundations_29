// ////////// PROBLEM 11 //////////

// let z = 5;
// // Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 
// // 5,4,3,2,1,
// // 4,3,2,1,
// // 3,2,1,
// // 2,1,
// // 1.

// //CODE HERE

// while(z > 0) {
//     for (let i = z; i > 0; i--) {
//         console.log(i);
//     }
//     z--
// }


////////// PROBLEM 8 //////////

let score = 0;
let passingScore = 7;

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/

while ( score < passingScore ) {
    console.log("your score is not high enough");
    ++score
}