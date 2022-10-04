// Write your code below this line

function decodeString(code) {
    // Capture the number to decode the string
    let decipher = Number(code[0])
    // Create a solution string to add letters to one-by-one
    let solution = ""
    // Start iterating through the string, starting at index 1 to avoid the decipher
    for (let i = 1; i < code.length; i++) {
      // Capture the ascii code for the given letter, plus the value of the decipher
      let strValue = code[i].charCodeAt() + decipher
      // Add the letter the belongs to the updated ascii value to the solution string
      solution += String.fromCharCode(strValue)
    }
    // return the solution string
    return solution
}

console.log(decodeString("1z"))
