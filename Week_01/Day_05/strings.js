/* In javaScript the type for representing text is the "string". A string is an immutable ordered sequence of the 16-bit values
Strings are "array like" and use 0 based indexing. */

// STRING LITERALS
// to create a string in JS we just enclose character of the string within "" or ''
""
'look a string can'
`functions as a string`


//what happens when we write a sentence like this --> 'you're late', she said
let string = 'you\'re late\nwoah we are on a new line'
console.log(string);



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
let string1 = "im a string";
let string2 = "im another string";
console.log(string1 + " " + string2);
console.log(string1[2]);


//string length, we can access the length (number of characters in the string)
console.log(string1.length);

//SOME AWESOME METHODS FOR STRINGS
//                                         321
let practice_with_some_strings = "Hello, world";
//an object wrapper around all primitives String(practice_with_some_strings)
// let str = 'hello';
// let temp = new String("new string"); // wrapper object
// console.log(temp);
// temp.custom = 1;
// console.log(temp.custom);


//obtaining portions of a string
//substring and return "ell" ----->
console.log(practice_with_some_strings.substring(1,4));
//slice and return "worl" -----> 
console.log(practice_with_some_strings.slice(7,-2));
//split and return an array of both words -----> 

//Bonus: what method can take an array of words and put them back together

//searching a string

//indexOf "H" ---->

//lastIndexOf "l" ----> 

//boolean searching funtions

//startsWith "Hello" gives us?---> 

//endsWith "!" ---> 

//includes "no" --->

//creating modified version of a string
//replace "llo" with "ya" ---> "Heya, world"

//toLowerCase ---> take a guess lol

//toUpperCase ---> take another guess



//inspecting individual characters of a string
//charAt 0 ---> 

//charCodeAt 0  --->

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

