const { greetingMachine,hello,sup,yo,goodmorning,addTen,hasUniqueChars } = require('../functions.js')

test('Does hello return the right string', () => {
    expect(hello('Kelvin')).toBe('Hello, Kelvin!')
})

test('Does hello return a string', () => {
    expect(typeof hello('Nico')).toBe('string')
})

describe('Greeting Machine Tests', () => {
    test('Does function passed into Machine return a string', () => {
        expect(typeof greetingMachine(35, addTen)).toBe('string')
    })

    test("Does a function passed into machine return 'That's not a greeting.'", () => {
        expect(greetingMachine(35, addTen)).toEqual("That's not a greeting.")
    })

    test("Does the final string, contain the right words", () => {
        expect(greetingMachine('Lukas', hello)).toContain('Hello')
    })
})

describe('Has unique characters tests', () => {
    test('Does the function return the right length of array', () => {
        expect(hasUniqueChars('hello world')).toHaveLength(8)
    })
})

describe("To be or not to be", () => {
    test('toBe vs toEqual', () => {
        const myObj = {myNum: 25}
        const myOtherObj = {myNum: 25}
        expect(myObj).toEqual(myOtherObj)
    })

    test('toBe vs toEqual part 2', () => {
        const myObj = {myNum: 25}
        const myOtherObj = myObj
        expect(myObj).toBe(myOtherObj)
    })
})