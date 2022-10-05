const axios = require('axios') // You have to bring axios in as a package in the backend.
// You also have to install it as a dependency.
// If you only need axios in the frontend, simply add it as a script tag. No need to install redundant dependencies.

module.exports = {
    getBerries: (req,res) => {
        let { flavor } = req.params // Compare this to server.js -- We destructure it the same way we named it in our url.
        //The variable flavor = userInput provided by the frontend

        axios.get(`https://pokeapi.co/api/v2/berry-flavor/${flavor}`) // We use flavor to request the poke API
            .then(response => {
                let berryNameArray = []
                let { berries } = response.data // We take the berries off the data
                berries.forEach(berryObj => { //loop over them
                    let { berry } = berryObj // nested objects are fun!
                    let { name } = berry //take the name out of the nested object
                    name = name[0].toUpperCase() + name.slice(1) //Capitalize the first letter of the name
                    berryNameArray.push(name) //And push it to our name array
                })
                res.status(200).send(berryNameArray) //Which we send back as the response to our original flavor request.
            })
            .catch(err => console.log(err))
        
    }
}