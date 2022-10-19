const roman = num => {
    if(num >= 4000){
        return "Sorry, your number is too large for our primitive numbering system."
    }
// Create a variable that stores the different roman numerals
    let numerals = {
        1: ["I","V"],
        2: ["X","L"],
        3: ["C","D"],
        4: ["M","placeholder"],
        5: ['placeholder']
    }

// Make the number iterable
    let numArr = String(num).split('')

    let romanNumeral = ''

    while(numArr.length > 0) {
        let currentPosition = numArr.length
        let currentNum = +numArr[0]

        let ones = numerals[currentPosition][0]
        let fives = numerals[currentPosition][1]
        let tens = numerals[currentPosition + 1][0]

        console.log(ones)
        console.log(fives)
        console.log(tens)
        console.log('=============')
        if(currentNum === 9) {
            romanNumeral += ones
            romanNumeral += tens
        } else if (currentNum >= 5) {
            romanNumeral += fives
            romanNumeral += ones.repeat(currentNum - 5)
        } else if (currentNum === 4) {
            romanNumeral += ones
            romanNumeral += fives
        } else {
            romanNumeral += ones.repeat(currentNum)
        }

        numArr.shift()
    }  

    return romanNumeral
}

console.log(roman(2497))
// console.log(roman(497))
// console.log(roman(97))