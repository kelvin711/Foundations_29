const express = require("express");
const server = express();

server.use(express.json()) // allows us to use JSON

// CRUD
// reading --> server.get
// creating --> server.post
// updating --> server.put/patch
// deleting --> server.delete
const setsRouter = require("./server/routes/sets.routes");
server.use("/api/sets", setsRouter);

// const { getSets, 
//         postSets, 
//         editSets, 
//         deleteSets 
// } = require("./server/controllers/sets.controllers");

// server.get("/api/sets", getSets);
// server.post("/api/sets", postSets);
// server.put("/api/sets/:id", editSets);
// server.delete("/api/sets/:id", deleteSets);

server.listen(8080, console.log("beep boop booo"))