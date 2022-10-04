const express = require('express')
const setsRouter = express.Router()

const { getSets, 
    postSets, 
    editSets, 
    deleteSets 
} = require("../controllers/sets.controllers");

// middleware that is specific to this router
setsRouter.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// setsRouter.get("/", getSets);
// setsRouter.post("/", postSets);
// setsRouter.put("/:id", editSets);
// setsRouter.delete("/:id", deleteSets);

setsRouter.route("/").get(getSets).post(postSets)
setsRouter.route("/:id").delete(deleteSets).put(editSets)

module.exports = setsRouter
