const express = require('express');
// const cors = require("cors");
const server = express();
const PORT = 8000;
// middleware to allow us to parse json data
server.use(express.json());
// server.use(cors());


server.get("/", (req,res) => {
    console.log("hello");
    res.send("hello")
})

const logger = (req, res, next) => {
    console.log("i am middlewario 2");
    req.body = {username: "poop", password: "password123"}
    next()
}

server.use(logger)

server.post("/register", (req,res) => {
    console.log(req.body);
    res.send(`${req.body.username} ${req.body.password}`)
})

server.get("/hello", (req, res) => {
    // console.log(req.query);
    // const { greg } = req.query
    res.send("hello")
});

server.get('/github/:username', function (req, res) {
    console.log(req.params);
    const { username } = req.params
    // console.log(req.body);
    res.send(`hello ${username}`)
});

server.listen(PORT, console.log(`running in the 90's but on port ${PORT}`))