/* In JavaSCript the type for representing text is the "string". A string is an immutable ordered sequence of the 16-bit values
Strings are "array like" and use 0 based indexing. */

// STRING LITERALS
// to create a string in JS we just enclose character of the string within "" or ''


//what happens when we write a sentence like this --> 'you're late', she said
// let string = 'you\'re late\nwoah we are on a new line'
// console.log(string);



// ESCAPE SEQUENCES IN STRINGS
// The backlash character \ has a special purpose in JS strings.
// sequence     |    character represented
// ----------------------------------------
//  \n                  newline
//  \"                  double quote
//  \'                  single quote
//and many more but these are the most commonly used escape sequences


// WORKING WITH STRINGS
//string concatination, JS allows us to combine our string with the + operator


//string length, we can access the length (number of characters in the string)



//SOME AWESOME METHODS FOR STRINGS
let practice_with_some_strings = "Hello, world"
//an object wrapper around all primitives String(practice_with_some_strings)
// let str = 'hello';
// let temp = new String(str); // wrapper object
// temp.custom = 1;
// console.log(temp.custom);


//obtaining portions of a string
//substring and return "ell" ----->
console.log(practice_with_some_strings.substring(1,4));  
//slice and return "worl" -----> 
console.log(practice_with_some_strings.slice(7,-1));
//split and return an array of both words -----> 
console.log(practice_with_some_strings.split(", ").join(" "));
//Bonus: what method can take an array of words and put them back together

//searching a string
console.log(practice_with_some_strings.indexOf("H"));
//indexOf "H" ---->
console.log(practice_with_some_strings.lastIndexOf("l"));
//lastIndexOf "l" ----> 

//boolean searching funtions
console.log(practice_with_some_strings.startsWith("Hello"));
//startsWith "Hello" gives us?---> 
console.log(practice_with_some_strings.endsWith("!"));
//endsWith "!" ---> 
console.log(practice_with_some_strings.includes("no"));
//includes "no" --->

//creating modified version of a string
//replace "llo" with "ya" ---> "Heya, world"
console.log(practice_with_some_strings.replace("llo", "ya"));
//toLowerCase ---> take a guess lol
console.log(practice_with_some_strings.toLowerCase());
//toUpperCase ---> take another guess
console.log(practice_with_some_strings.toUpperCase());


//inspecting individual characters of a string
//charAt 0 ---> 
console.log(practice_with_some_strings.charAt(0));
//charCodeAt 0  --->
console.log(practice_with_some_strings.charCodeAt(0));
//Bonus: find the range of lower and uppercase letters


//space trim funtctions !bonus mess with these methods!
let test = "   test "
//trim test --->

//Bonus: mess with the other trims
// //trimStart and trimEnd

// // STRING INTERPOLATION
let first_name = "kelvin"
let last_name = "arauz"
//use backticks and ${} to inject variables
//everything inside ${} is interpreted as a JS expression. everything outside the braces are normal string literal text
console.log(`my full name is ${first_name} ${last_name}`);

//PATTERN MATCHING
//JavaScript defines a datatype known as `regular expressions` for pattern matching in strings
//text between a pair of forward slashes makes a regular expression literal. more on regex reading here
//https://regexone.com/ a good site to learn regex fundamentals
//https://regexr.com/ for when you become comfortable with the basics of regex

// [1-9][0-9]*/ //match a nonzero digit, followed by any number of digits
// //                0     6  10 13
let regex_text = "blast off in 3, 2, 1"
let pattern = /\d+/g
console.log(pattern.test(regex_text))
console.log(regex_text.search(pattern));

