// HIGHER ORDER METHODS
//FOREACH
// The forEach() method iterates through an array, invoking a function you specify for each element. 
// You pass the function as the first argument to forEach(). forEach() then invokes your 
// function with three arguments: the value of the array element, the index of the array element,
// and the array itself. If you only care about the value of the array element, you can write 
//a function with only one parameter—the additional arguments will be ignored:


//MAP
// The function you pass to map() is invoked in the same way as a function passed to forEach(). 
// For the map() method, however, the function you pass should return a value. Note that map() 
// returns a new array: it does not modify the array it is invoked on. If that array is sparse, 
// your function will not be called for the missing elements, but the returned array will be 
// sparse in the same way as the original array


//FILTER
// The filter() method returns an array containing a subset of the elements of the array on which 
// it is invoked. The function you pass to it should be predicate: a function that returns true 
// or false. The predicate is invoked just as for forEach() and map(). If the return value is true, 
// or a value that converts to true, then the element passed to the predicate is a member of 
// the subset and is added to the array that will become the return value. Examples:


//REDUCE
// reduce() takes two arguments. The first is the function that performs the reduction operation. 
// The task of this reduction function is to somehow combine or reduce two values into a 
// single value and to return that reduced value.


//CHAINING METHODS
// Methods can be chained together, allowing you to perform multiple operations on one array concisely
