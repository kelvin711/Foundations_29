const pokeForm = document.querySelector('.poke-form')
const berryForm = document.querySelector('.berry-form')
const pokemonContainer = document.querySelector('.poke-container')
const berryContainer = document.querySelector('.berry-container')


const getPokemon = (evt) => {
    evt.preventDefault()
    const pokeInput = document.querySelector('.poke-input')
    let pokemon = pokeInput.value

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
    pokemonContainer.innerHTML = ''
    let { sprites, name } = obj
    name = name[0].toUpperCase() + name.slice(1)

    let pokemonElement = document.createElement('div')
    let pokeName = document.createElement('p')
    pokeName.textContent = name

    let pokeImage = document.createElement('img')
    pokeImage.src = sprites.front_default

    pokemonElement.appendChild(pokeName)
    pokemonElement.appendChild(pokeImage)
    pokemonContainer.appendChild(pokemonElement)
}

pokeForm.addEventListener('submit', getPokemon)
// ===================================================
const berryInput = document.querySelector('.berry-input')

const getBerries = evt => {
    evt.preventDefault()
    let flavor = berryInput.value

    axios.get(`http://localhost:4000/project/${flavor}`)
        .then(response => {
            let { data } = response
            createBerryList(data)
        })
        .catch(err => console.log(err))
}

const createBerryList = arr => {
    berryContainer.innerHTML = ''
    let flavor = berryInput.value

    let berryListParent = document.createElement('ul')
    berryListParent.textContent = `Berries with a ${flavor} flavor are:`

    arr.forEach(berryName => {
        let berryListItem = document.createElement('li')
        berryListItem.textContent = berryName
        berryListParent.appendChild(berryListItem)
    })

    berryContainer.appendChild(berryListParent)
}

berryForm.addEventListener('submit', getBerries)