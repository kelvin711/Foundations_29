// HIGHER ORDER METHODS
//FOREACH
// The forEach() method iterates through an array, invoking a function you specify for each element. 
// You pass the function as the first argument to forEach(). forEach() then invokes your 
// function with three arguments: the value of the array element, the index of the array element,
// and the array itself. If you only care about the value of the array element, you can write 
//a function with only one parameter—the additional arguments will be ignored:
let data = [1,2,3,4,5] // ---> [2,3,4,5,6]
let sum = 0;

//compute the sum of the data array
// data.forEach( (value, index, array) => {
//     console.log(`value is --> ${value} index is --> ${index} array is --> ${array}`);
// })
data.forEach( (number, index, arr) => {
    // sum = sum + number;
    arr[index] = number + 1;
})
console.log(data);
// console.log(sum);


//MAP
// The function you pass to map() is invoked in the same way as a function passed to forEach(). 
// For the map() method, however, the function you pass should return a value. Note that map() 
// returns a new array: it does not modify the array it is invoked on. If that array is sparse, 
// your function will not be called for the missing elements, but the returned array will be 
// sparse in the same way as the original array
// let a = [1,,,,,2] sparse array
let a = [1,2,3];
// ---> [1,4,9]
let new_array = a.map( (v,i,a) => {
    // console.log(a,v,i);
    return v * v
})
console.log(new_array);



//FILTER
// The filter() method returns an array containing a subset of the elements of the array on which 
// it is invoked. The function you pass to it should be predicate: a function that returns true 
// or false. The predicate is invoked just as for forEach() and map(). If the return value is true, 
// or a value that converts to true, then the element passed to the predicate is a member of 
// the subset and is added to the array that will become the return value. Examples:
//       0 1 2 3 4
let b = [5,4,3,2,1];
let less_than_three = b.filter( (number) => number < 3  )
console.log(less_than_three);
let every_other_element = b.filter((number, index) => index % 2 === 0 )
console.log(every_other_element);

//REDUCE
// reduce() takes two arguments. The first is the function that performs the reduction operation. 
// The task of this reduction function is to somehow combine or reduce two values into a 
// single value and to return that reduced value. The second is the initial value
let c = [1,2,3,4,5]

let reduced_sum = c.reduce( (prev_value, curr_value) => {
    console.log(`the previous value is: ${prev_value} the current value is ${curr_value}`);
    return prev_value + curr_value
},10)
console.log(reduced_sum);

let big = c.reduce( (prev_value, curr_value) => {
    if(prev_value > curr_value) {
        return prev_value
    } else {
        return curr_value
    }
})
console.log(big);

//if no initial value is given it takes the first element of the array as the initial value

//CHAINING METHODS
// Methods can be chained together, allowing you to perform multiple operations on one array concisely
