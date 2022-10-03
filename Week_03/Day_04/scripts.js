const getMyChildHood = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon/gengar")
    .then( (response) => {
        console.log(response.data.name);
    })
    .catch( (err) => console.log(err)) 
}
document.querySelector("button").addEventListener("click", getMyChildHood)


// console.log("hello");
// setTimeout(() => {
//     console.log("where will i be");
// },2000)
// console.log("test");