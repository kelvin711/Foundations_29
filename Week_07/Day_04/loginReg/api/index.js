const express = require('express');
const apiRouter = express.Router();

//if we have a token set them to our req as user



//user routes
apiRouter.use("/users", require("./users") );

//potentially have other routes here


module.exports = apiRouter;