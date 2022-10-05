function hasBalancedParens(string) {
    let countOpen = 0;
    let countClose = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "(") {
            countOpen += 1
        } else if (string[i] === ")") {
            countClose += 1
        }
        if ( countClose > countOpen ) {
            return false
        }
    }
    return countOpen === countClose
} 
console.log(hasBalancedParens(")(dididoit"))

function hasBalancedParens(string) {
    let counter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "(") {
            counter += 1
        } else if (string[i] === ")") {
            counter -= 1
        }
        if ( counter < 0 ) {
            return false
        }
    }
    return counter === 0
} 
console.log(hasBalancedParens("(){}<>dididoit"))
