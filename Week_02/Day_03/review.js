////////// PROBLEM 7 //////////

/*
  Write a function called getUserById that takes in three parameters: an array of objects (users), an id and a callback, and searches for the user with a matching id.
  When the correct user object is found, invoke the callback with the user object as an argument.
*/

// Do not edit the code below.
let users = [
    {
      id: '12d',
      email: 'tyler@gmail.com',
      name: 'Tyler',
      address: '167 East 500 North'
    },
    {
      id: '15a',
      email: 'cahlan@gmail.com',
      name: 'Cahlan',
      address: '135 East 320 North'
    },
    {
      id: '16t',
      email: 'ryan@gmail.com',
      name: 'Ryan',
      address: '192 East 32 North'
    },
  ]
  // Do not edit the code above.
const get_user_by_id = (users_array, given_id, callback_func) => {
    //loop thru the array to find the correct the user obj
    for (let i = 0; i < users_array.length; i++) {
        let current_user = users_array[i];
        if (current_user.id === given_id) {
            return callback_func(current_user)
        }
    }
    return callback_func({email: "NA", name: "NA", address: "NA"})
}
  
  
// UNCOMMENT THE FUNCTION CALL BELOW
// RUN THIS FILE WITH NODE
// CHECK YOUR ANSWER
  
get_user_by_id( users, '16a', (user) => {
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address) 
})