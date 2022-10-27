const path = require('path')
const db = require('./db.json')
let newID = 6

module.exports = {
    getHTML: (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    },
    getCSS: (req,res) => {
        res.sendFile(path.join(__dirname, '../public/styles.css'))
    },
    getJS: (req,res) => {
        res.sendFile(path.join(__dirname, '../public/main.js'))
    },
    getList: (req,res) => {
        res.status(200).send(db)
    },
    addToList: (req,res) => {
        let { task } = req.body
        let newTaskObj = {
            id: newID,
            task
        }
        db.push(newTaskObj)
        newID++
        res.status(200).send(db)
    },
    updateList: (req,res) => {
        let { id, task } = req.body
        let index = db.findIndex(obj => obj.id === +id)

        let newTaskObj = {
            id: +id,
            task
        }        
        db.splice(index,1,newTaskObj)
        res.status(200).send(db)
    },
    deleteList: (req,res) => {
        let { id } = req.params
        let index = db.findIndex(obj => obj.id === +id)

        db.splice(index,1)
        res.status(200).send(db)
    }
}