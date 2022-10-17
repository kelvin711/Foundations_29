const hasUniqueChars = str => {
    let charSet = new Set([])
    for(let i = 0; i < str.length; i++){
        charSet.add(str[i])
    }
    return [...charSet]
}


const greetingMachine = (name,greeting) => {
    if(typeof greeting(name) === 'string'){
        return greeting(name)
    } else {
        return "That's not a greeting."
    }
}

const hello = name => {
    return `Hello, ${name}!`
}
const sup = name => {
    return `'Sup, ${name}?`
}
const yo = name => {
    return `Yo, ${name}!`
}
const goodmorning = name => {
    return `Good morning, ${name}!`
}

const addTen = num => {
    return num + 10
}

module.exports = {
    greetingMachine,
    hello,
    sup,
    yo,
    goodmorning,
    addTen,
    hasUniqueChars
}