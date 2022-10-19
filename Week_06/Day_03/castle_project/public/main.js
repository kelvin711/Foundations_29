let castle = document.querySelector('img')

const helloAlert = evt => {
    alert("Welcome to my castle!")
}

castle.addEventListener('click', helloAlert)