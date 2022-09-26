// let hasMoreVowels = word => {
//     return word.match(/[aeiou]/gi).length > word.match(/[qwrtypsdfghjklzxcvbnm]/gi).length
// }
// hasMoreVowels("moose")



let hasMoreVowels = word => {
    let vowelCount = 0;
    //check the word see if has aeiou
    let vowels = ["a","e","i","o","u"];
    for (const char of word) {
        if(vowels.includes(char)) {
            vowelCount++
        }
    }
    return vowelCount > word.length/2
}
console.log(hasMoreVowels("moosepppp"))