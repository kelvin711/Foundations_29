// Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

//function keyword identifier(paramaters if any)
function scale_array(arr, num) { //curly braces to start our block of code
    //           0
    //let arr = [1,2,3], let num = 3
    for(let i = 0;i < arr.length; i++) {
        //multiply element by num
        arr[i] = arr[i] * num;
    }
    //return undefined;
    return arr;
}
let a = scale_array([1,2,3], 3)
console.log(a);



const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};
// let animals = ["horse", "cat"];
// let [,superior_pet] = animals
// console.log(superior_pet);
//destructuring
//left side declaring variables from your datatype = fromwhat datay
let { addresses } = person
console.log(addresses);