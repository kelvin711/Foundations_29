//           0    1    2   3  4  5    6   7  array.length - 1 
let banana = [28,0,0,0,0,0,0, 43, -12, 30, 4, 0, -36]
//                                    7

// for (initialize; test; how_increment;) {
//     statement
// }

// for (statement1; statement2; statement3;) {
//     statement 1 set the variable of where we want the loop to Start
//     statement 2 define the condition for when we want the loop to stop
//     statement 3 a stepping value
// }
let smallest = banana[0];
let largest = banana[0];



for (let i = 1; i < banana.length; i++) {
    // console.log(banana[i]);
    //    28   >  -12
    if (smallest > banana[i]) {
        smallest = banana[i]
    } else if (largest < banana[i]) {
        largest = banana[i]
    }
}

console.log(smallest, largest);
