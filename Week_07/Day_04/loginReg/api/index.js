const express = require('express');
const jwt = require('jsonwebtoken');
const apiRouter = express.Router();
const { JWT_SECRET } = process.env;
const { getUserById } = require("../db/users")

//if we have a token set them to our req as user
apiRouter.use(async (req, res, next) => {
    const prefix = 'Bearer ';
    const auth = req.header('Authorization');
    if (!auth) {
        next(); //nothing to see here unlogged user
    } else if (auth.startsWith(prefix)) { //is there a token
        const token = auth.slice(prefix.length);
        try {
            const parsedToken = jwt.verify(token, JWT_SECRET);
            const id = parsedToken && parsedToken.id;
            if (id) {
                req.user = await getUserById(id);
                next();
            }
        } catch (error) {
            next(error)
        }
    } else {
        next({
            name: 'AuthorizationHeaderError',
            message: `Authorization token must start with ${prefix}`
        });
    }
})


//user routes
apiRouter.use("/users", require("./users") );

//potentially have other routes here


module.exports = apiRouter;