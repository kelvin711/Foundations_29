// let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //            0  1  2  3  4  5  6
// console.log(numArr[5])

// let namesArr = ['Andrew', 'Jonathan', 'Josh']

// let finalName = namesArr.pop()
// console.log(finalName)
// console.log(namesArr)

// let namesArr = ['Andrew', 'Jonathan', 'Josh']
// let someNames = namesArr.slice(0, 3)

// console.log(namesArr)

// let namesArr = ['Andrew', 'Jonathan', 'Josh', 'Brandon', 'Steve']
// let removedName = namesArr.splice(1, 3, "Nicolas")

// console.log(namesArr)
// console.log(removedName)

// console.log(namesArr[namesArr.length - 1])

// for(let i = namesArr.length; i >= 0; i--){
//     console.log(namesArr[i])
// }

// namesArr[100] = "Nicolas"

// console.log(namesArr)
let randomStuff = [42, "roof", null, "car", false, undefined, 205];

while (randomStuff.length < 10) {
  randomStuff.push("stuff");
}
console.log(randomStuff);

if (randomStuff.shift() === "stuff") {
  console.log(randomStuff[7]);
} else if (randomStuff.pop() === "stuff") {
  console.log(randomStuff[3]);
} else {
  console.log(randomStuff[randomStuff.length - 1]);
}

if (randomStuff.pop() === "stuff") {
  console.log(randomStuff);
}
console.log(randomStuff);

// console.log(randomStuff.length)

// for(let i = 0; i < 100; i++){
//     if (i % 5 === 0){
//         console.log("fizz")
//     } else if (i % 3 === 0) {
//         console.log("buzz")
//     } else if (i % 15 === 0){
//         console.log("fizzbuzz")
//     } else {
//         console.log(i)
//     }
// }
