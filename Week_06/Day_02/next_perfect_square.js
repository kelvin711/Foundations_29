perfectSquareFinder = (num) => {
    // a ? b : c
    return (Number.isInteger(Math.sqrt(num))) ? 
        (Math.sqrt(num) + 1) ** 2 : -1
    // if (Math.sqrt(num) % 1 === 0) {
    //     return (Math.sqrt(num) + 1) ** 2
    // }
    // else {
    //     return -1
    // }
}
console.log(perfectSquareFinder(3000));

// console.log(Number.isInteger(3));