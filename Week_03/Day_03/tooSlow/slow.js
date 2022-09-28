const colors = ['red','blue','yellow','purple','green']
const fontSizes = ['2em','2.5em','3em','3.5em','4em','4.5em','5em']

const getRandomCoordinate = () => {
    return Math.random() * 100
}

const getRandomArrayValue = (arr) => {
    let randomInt = Math.floor(Math.random() * arr.length)
    return arr[randomInt]
}

const sanic = document.querySelector('img')


const tooSlow = evt => {
    let { target } = evt

    let tooSlowText = document.createElement('p')
    tooSlowText.style.top = target.style.top
    tooSlowText.style.left = target.style.left
    tooSlowText.textContent = "You're too slow!"
    tooSlowText.style.color = getRandomArrayValue(colors)
    tooSlowText.style.fontSize = getRandomArrayValue(fontSizes)
    document.querySelector('body').appendChild(tooSlowText)

    target.style.top = getRandomCoordinate() + 'vh';
    target.style.left = `${getRandomCoordinate()}vw`;
}


sanic.addEventListener('mouseover', tooSlow)