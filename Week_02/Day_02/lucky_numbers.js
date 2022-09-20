// Find Lucky Numbers
// Difficulty
// Easy

// Concepts
// Loops, General


// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.

// For example:

// luckyNumbers(2)
// // returns (3, 7)
// luckyNumbers(6)
// // returns (1, 7, 9, 6, 5, 2)

function lucky_numbers(n) {
    let lucky_set = new Set();
    while(lucky_set.size < n) {
        //                 0-.9999  0-9 1-10
        lucky_set.add(Math.floor(Math.random() * 10) + 1)
    }
    //let another_one = new Set(lucky_set)
    return Array.from(lucky_set)
}
console.log(lucky_numbers(10));

// let nums = [1,3,4,5,6,7,8,9,10]

// let answer_array = [2]

