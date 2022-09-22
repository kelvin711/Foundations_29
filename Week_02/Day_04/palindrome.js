function isPalindrome(word) {
    let newWord = "";
    for (let i = word.length - 1; i >= 0; i--) { 
        newWord = newWord + word[i];
    }
    // if (word === newWord){
    //     console.log(`${word} is a Palindrom`)
    // } else {
    //     console.log(`${word} is not a Palindrom`)
    // }
    return newWord === word
}
//            01234
console.log(isPalindrome("tacocat"));

// now say we can delete one char "tacobcat" === true cuz we can rid of b
// now find the longes palindrome in a sentence "me racecar eel" ---> "e racecar e"

