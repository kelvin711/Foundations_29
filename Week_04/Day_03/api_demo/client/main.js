const form = document.querySelector('form')


const getPokemon = (evt) => {
    evt.preventDefault()
    const input = document.querySelector('input')
    let pokemon = input.value

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => {
            console.log(response.data)
            let { sprites, name } = response.data
            let pokeObj = {
                sprites,
                name
            }
            displayPokemon(pokeObj)
        })
        .catch(err => console.log(err))

}

const displayPokemon = obj => {
    let { sprites, name } = obj

    let pokemonElement = document.createElement('div')
    let pokeName = document.createElement('p')
    pokeName.textContent = name

    let pokeImage = document.createElement('img')
    pokeImage.src = sprites.front_default

    pokemonElement.appendChild(pokeName)
    pokemonElement.appendChild(pokeImage)
    document.querySelector('body').appendChild(pokemonElement)
}


form.addEventListener('submit', getPokemon)