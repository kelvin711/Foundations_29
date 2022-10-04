const express = require("express");
const server = express();

server.use(express.json()) // allows us to use JSON

// CRUD
// reading --> server.get
// creating --> server.post
// updating --> server.put/patch
// deleting --> server.delete
//  OUR FAKE DATABASE
const magic_set = [
    { id: 1, set_name: "KTK"},
    { id: 2, set_name: "2X2"},
    { id: 3, set_name: "RAV"},
]

server.get("/api/sets", (req, res) => {
    res.status(200).json(magic_set)
});

server.post("/api/sets", (req, res) => {
    console.log(req.body);
    // making an object to add to our "database"
    const set_to_add = {
        id: req.body.id,
        set_name: req.body.set_name
    }
    // adding to our fake data
    magic_set.push(set_to_add);
    // responding with success
    res.status(200).json({message: "success", magic_set});
});

server.put("/api/sets/:id", (req, res) => {
    // console.log(req.body);
    // destructuring our id from the params object
    const { id } = req.params;
    // finding the set we want to update
    const set_to_update = magic_set.find((set_obj) =>  set_obj.id === parseInt(id))
    // setting the name field with the body data the user sent
    // console.log(set_to_update);
    set_to_update.set_name = req.body.set_name;
    res.status(200).json({message: "success", magic_set});
});

server.delete("/api/sets/:id", (req, res) => {
    // const { id } = req.params;
    //find the set we want to delete
    const set_to_delete = magic_set.find( (set_obj) => set_obj.id === parseInt(req.params.id));
    // splice out our fake data
    magic_set.splice(req.params.id -1, 1);
    res.status(200).json({message: "success", magic_set});
});





server.listen(8080, console.log("beep boop booo"))