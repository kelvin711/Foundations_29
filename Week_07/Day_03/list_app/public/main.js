const list = document.querySelector('#list-container')
const form = document.querySelector('#add-list')
const input = document.querySelector('#list-input')
const changeForm = document.querySelector('#change-list')
const idInput = document.querySelector('#item-to-change')
const changeInput = document.querySelector('#change-to')

const createList = arr => {
    list.innerHTML = ''
    let newList = document.createElement('ul')
    arr.forEach(listObj => {
        let { task, id } = listObj
        let listItem = document.createElement('li')
        let taskText = document.createElement('span')
        let idText = document.createElement('span')

        listItem.id = id
        listItem.addEventListener('click', deleteList)

        taskText.textContent = task
        taskText.id = id
        idText.textContent = `-----This task's id is ${id}`
        idText.id = id

        listItem.appendChild(taskText)
        listItem.appendChild(idText)

        newList.appendChild(listItem)
    })
    list.appendChild(newList)
}

const getList = () => {
    axios.get('/api/list')
    .then(response => {
        let { data } = response
        createList(data)
    })
    .catch(err => console.log(err))
}

const addToList = evt => {
    evt.preventDefault()
    let newTask = {
        task: input.value
    }

    axios.post('/api/list', newTask)
    .then(response => {
        let { data } = response
        createList(data)
    })
    .catch(err => console.log(err))
}

const deleteList = evt => {
    evt.preventDefault()
    let taskID = evt.target.id
    console.log(taskID)

    axios.delete(`/api/list/${taskID}`)
    .then(response => {
        let { data } = response
        createList(data)
    })
    .catch(err => console.log(err))
}

const changeList = evt => {
    evt.preventDefault()
    let changeObj = {
        id: idInput.value,
        task: changeInput.value
    }
    axios.put('/api/list', changeObj)
    .then(response => {
        let { data } = response
        createList(data)
    })
    .catch(err => console.log(err))
}

changeForm.addEventListener('submit', changeList)

form.addEventListener('submit', addToList)
getList()

