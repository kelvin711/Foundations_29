//      <h1>.innerHTML
let header = document.querySelector(".stuff")
// console.log(header);
console.log(header);
//syntax of events
// header.addEventListener("what is the event", function kick off)
const removeHeader = (event) => {
    console.log("hey that tickled", event.target);
    event.target.remove();
    //return undefined
}
header.addEventListener("click", removeHeader);

let input = document.querySelector(".input")
document.querySelector(".input").addEventListener("input", (event) => {
    console.log(event.target.value);
})

document.querySelector(".form").addEventListener("submit", (event)=> {
    event.preventDefault();
})

// const article = document.querySelector('.article')



// const newPara = document.createElement('p')
// console.log(newPara);

// newPara.textContent = 'This is a new paragraph.'
// console.log(newPara);

// article.appendChild(newPara)
// article.remove()
// option[0].innerHTML = "cheese"
// option[1].innerHTML = "cheese"
// option[2].innerHTML = "cheese"
// option[3].innerHTML = "cheese"
