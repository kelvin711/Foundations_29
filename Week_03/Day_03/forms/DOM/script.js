// SOLVE THESE THREE CHALLENGES IF YOU DARE!
// 1. WHEN YOUR MOUSE IS OVER THE MORBIUS (GREATEST MOVIE EVER BTW) IMAGE
// YOU SHOULD ALERT THE USER THAT IT IS INDEED A MOVIE.
// 2. WHEN YOU CLICK THE DIE ON THE SCREEN YOU GET A RANDOM NEW DIE
// FOR THIS CHALLENGE USE THE IMAGES IN THE IMAGE FOLDER (HINT NOTICE THE NAMES OF THE IMAGE)
// 3. APPLY THE FUNCTIONALITY DO THE LAST SECTION AND MAKE IT SO WE CAN DELETE CARDS.

// let morbedOutOfMyMind = document.querySelector(".morbed");
// function theBestMovieIs(event){
//     alert("GREATEST MOVIE EVER BTW");
// }
// morbedOutOfMyMind.addEventListener("mouseover", theBestMovieIs);
let die = document.querySelector(".dice-dice-baby");
die.addEventListener("click", () => {
    //getting a random number 1-6
    let randomNum = Math.floor(Math.random() * 6) + 1;
    // die.setAttribute("src", `images/dice${randomNum}.png`)
    die.src = `images/dice${randomNum}.png`;
});

let container = document.querySelector(".container");
container.addEventListener("click", (event)=> {
    console.log(event.target.tagName);
    // if we click button
    //delete the card
    if (event.target.tagName === "BUTTON") {
        event.target.parentNode.remove();
    }
})


