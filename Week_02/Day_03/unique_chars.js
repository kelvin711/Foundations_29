// // "hello" --> "helo" === "hello"
// // let example = new Set("hello")
// // console.log(example);
// // console.log(example.size === "helo".length);

// const unique_count = (input_str) => {
//     // let is_equal = false;
//     // let set_string = new Set(input_str);
//     // if (set_string.size === input_str.length) {
//     //     is_equal = true;
//     // }
//     return new Set(input_str.toLowerCase()).size === input_str.toLowerCase().length;
// }

// let value = unique_count("moOnday")
// console.log(value);


function hasUniqueChars(str) {
    for(let i = 0; i < str.length; i++) {
        for(let j = i + 1; j < str.length; j++){
            if (str[i] == str[j]) {
                return false; 
            } 
        }         
    } 
    return true;
}
console.log(hasUniqueChars('jamms'))
console.log(hasUniqueChars('Junky'))
