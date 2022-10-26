const express = require('express')
const cors = require('cors')

const app = express()
const { getHTML, getCSS, getJS, getList, addToList, updateList, deleteList } = require('./controller')

app.use(express.json())
app.use(cors())
app.use(express.static('public'))



app.get('/', getHTML)
app.get('/css', getCSS)
app.get('/js', getJS)

app.get('/api/list', getList)
app.post('/api/list', addToList)
app.put('/api/list', updateList)
app.delete('/api/list/:id', deleteList)



app.listen(4000, console.log('Server running on 4000'))