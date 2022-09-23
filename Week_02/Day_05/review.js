//////////////////PROBLEM 1////////////////////
/*  
    Create an object called `pizza` that has 6
    properties: 
        - name (string)
        - price (number)
        - category (string)
        - popularity (number)
        - rating (number)
        - tags (array of strings)
    Make sure that you give your properties values
    of the correct data type.
    Note: the category is something like appetizer/entree,
    the popularity is an overall ranking, the
    rating is an average of all customer ratings, and
    for the tags, think of things that a
    user might filter by, like 'gluten-free' or
    'kids'
*/

//////////////////PROBLEM 3////////////////////
/* 
    Create an array with about 5 objects in it.
    The objects should mimic the `pizza` object.
    Call the array `foodArr`.
    Make sure that they have slightly different
    values for price, popularity, rating, and
    tags. That way, you'll be able to use this
    data in some functions that you'll write.
*/
// []
let foodArr = [
    {
        name: "Sausage",
        price: 9.99,
        category: "entree",
        popularity: 8,
        rating: 3.8,
        tags: ["Chicago", "Pizza pie"]
    },
    {
        name: "Deep Dish",
        price: 17.99,
        category: "entree",
        popularity: 10,
        rating: 5,
        tags: ["Chicago", "Pizza pie"]
    },
    {
        name: "Cookie",
        price: 7.99,
        category: "Dessert",
        popularity: 7,
        rating: 3,
        tags: ["Sweet"]
    },
    {
        name: "Spicy",
        price: 6.66,
        category: "appetizer",
        popularity: 5,
        rating: 2,
        tags: ["spicy", "Adult"]
    },
    {
        name: "sausage",
        price: 7.99,
        category: "entree",
        popularity: 10,
        rating: 4.8,
        tags: ["New York"]
    }
]

//////////////////PROBLEM 5////////////////////
/* 
    Now let's write a function that's a little
    more flexible than just filtering for one
    value. We want to be able to filter for 
    food that has above a certain rating, 
    below a certain price, or any other combo.
    Write a function called `filterByProperty`
    that takes in three arguments: `property`, 
    `number`, and `type. 
    The property will be a string (rating,
    popularity, or price)
    The number will be the number that you want
    to compare against 
    The type should be 'above' or 'below' to 
    indicate whether you want to get foods with
    values that are above or below the given number
    for the given property
    Inside the function, create a variable to hold
    a filtered array
    Use the filter method to filter the foodArr
        In the callback, check if the `type` is `above`,  above means >  below means <
        if it is, return objects whose value for the given
        property is greater than the `number` passed in
        If the type isn't `below`, return objects whose
        value for the given property is less than the 
        `number` passed in
    
    Return the filtered array from the entire function
*/

//CODE HERE               price     10       above
const filterByProperty = (property, number, type) => {
    let filteredArray = [];
    // price is below 10 dollars
    // pizzaObj.property < number
    if (type === "above") {
        filteredArray = foodArr.filter( (pizza_obj) => pizza_obj[property] > number) //foodArr[property] > number
        //filter our array and check if property greater than number
    } else {
        // filter our array and check if property less than number
        filteredArray = foodArr.filter( (pizza_obj) => pizza_obj[property] < number) 
    }
    return filteredArray;
}
console.log(filterByProperty("popularity", 9, "above"))

// {
//     name: "sausage",
//     price: 7.99,
//     category: "entree",
//     popularity: 10,
//     rating: 4.8,
//     tags: ["New York"]
// }

const deals = [
    {
        title: '15% Off!', 
        desc: 'Applied to your entire order when you spend $30 or more'
    }, 
    {
        title: 'Free Kids Meal with 2 Regular Entrees', 
        desc: '   This deal lasts until the end of March! '
    }
]

/*
    The owner has decided to take the 15% off
    deal down to 10%.
    Reassign the value of the first deal's title
    to be itself, but use the `replace` method
    to replace the 15 with a 10.
*/

//CODE HERE
// let replaced = deals[0].title.replace("15", "10")
// console.log(replaced);
deals[0].title = deals[0].title.replace("15", "10")
console.log(deals);