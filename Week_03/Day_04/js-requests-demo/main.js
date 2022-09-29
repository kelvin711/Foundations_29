console.log('connected')

const getAllBtn = document.querySelector('#all')
const charBtns = document.querySelectorAll('.char-btns')
const ageForm = document.querySelector('#age-form')
const ageInput = document.querySelector('#age-input')
const createForm = document.querySelector('#create-form')
const newFirstInput = document.querySelector('#first')
const newLastInput = document.querySelector('#last')
const newGenderDropDown = document.querySelector('select')
const newAgeInput = document.querySelector('#age')
const newLikesText = document.querySelector('textarea')
const charContainer = document.querySelector('section')

const baseURL = 'http://localhost:4000/'

function createCharacterCard(char) {
  let charCard = document.createElement('div')
  charCard.innerHTML = `<h3>${char.firstName} ${char.lastName}</h3>
  <p>gender: ${char.gender} | age: ${char.age}</p>
  <h4>Likes</h4>
  <ul>
    <li>${char.likes[0]}</li>
    <li>${char.likes[1]}</li>
    <li>${char.likes[2]}</li>
  </ul>`

  charContainer.appendChild(charCard)
}

function clearCharacters() {
  charContainer.innerHTML = ``
}

const getAllChars = evt => {
  clearCharacters()
        //  http://localhost:4000/characters
  axios.get('http://localhost:4000/characters')
      .then(response => {
        console.log(response.data)
        let { data } = response
        for(let i = 0; i < data.length; i++){
          createCharacterCard(data[i])
        }
      })

}

const getCharacter = evt => {
  console.log(evt.target.id)
  clearCharacters()

  axios.get(`http://localhost:4000/character/${evt.target.id}`)
    .then(response => {
      console.log(response.data)
      createCharacterCard(response.data)
    })
}

const getCharacterAge = evt => {
  evt.preventDefault()
  clearCharacters()

  axios.get(`http://localhost:4000/character?age=${ageInput.value}`)
    .then(response => {
      console.log(response)
      let { data } = response
      data.forEach(charObj => {
        createCharacterCard(charObj)
      })
    })
}

const createCharacter = evt => {
  evt.preventDefault()
  clearCharacters()

  let firstName = newFirstInput.value
  let lastName = newLastInput.value
  let gender = newGenderDropDown.value
  let age = newAgeInput.value
  let likes = newLikesText.value.split(',')

  let charObj = {
    firstName: firstName,
    lastName: lastName,
    gender,
    age,
    likes
  }
  console.log(charObj)

  axios.post('http://localhost:4000/character', charObj)
    .then(response => {
      let { data } = response
      data.forEach(charObj => {
        createCharacterCard(charObj)
      })
    })
}

getAllBtn.addEventListener('click', getAllChars)
for(let i = 0; i < charBtns.length; i++){
  charBtns[i].addEventListener('click', getCharacter)
}

ageForm.addEventListener('submit', getCharacterAge)
createForm.addEventListener('submit', createCharacter)