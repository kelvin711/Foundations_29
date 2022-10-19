const path = require('path')

module.exports = {
    getHTML: (req,res) => {
        console.log(__dirname)
        res.sendFile(path.join(__dirname, '../public/index.html'))
    },
    getCSS: (req,res) => {
        res.sendFile(path.join(__dirname, '../public/styles.css'))
    },
    getJS: (req,res) => {
        res.sendFile(path.join(__dirname, '../public/main.js'))
    }
}