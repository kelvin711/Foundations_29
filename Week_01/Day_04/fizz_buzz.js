// Write a program that counts from 1 to 50 in fizzbuzz fashion.

// To do so, loop from 1 to 50 (inclusive). Each time through, if the number is evenly divisible by 3, say ‘fizz’. If the number is evenly divisible by 5, say ‘buzz’. If the number is evenly divisible by both 3 and 5, say ‘fizzbuzz’. Otherwise, say the number.

// For example:
//  iterator;  condition; step;
for(let i = 1; i <= 50; i++){
    if (i % 15 === 0 ) {
        console.log("fizzBadLanerBuzz");
    } else if(i % 3 === 0){
        console.log("fizz")
    } else if (i % 5 === 0) {
        console.log("buzz");
    } else {
        console.log(i);
    }
}

console.log(3%3);