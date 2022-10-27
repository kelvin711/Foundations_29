const express = require('express');
const userRouter = express.Router();
const { requireUser } = require("./utils");
const { getUserByUsername, createUser, getUserCredentials } = require("../db/users");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

userRouter.get("/", requireUser,  (req, res) => {
    res.send("hit")
})


//register route
userRouter.post("/register", async (req, res, next) => {
    try {
        const { user_name, password } = req.body;
        const queriedUser = await getUserByUsername(user_name);
        if (queriedUser) {
            res.status(430);
            next({
                name: "UserAlreadyExists",
                message: "A user already exists with that name"
            })
        };
        const user = await createUser({user_name, password})
        if (!user) {
            next({
                name: "userCreationError",
                message: "something went wrong creating a user"
            })
        } else {
            const token = jwt.sign({ id: user.id, user_name: user.user_name }, JWT_SECRET , { expiresIn: "1w"});
            res.send({ user, message: "You're signed up", token})
        }
    } catch (error) {
        next(error)
    }
});

// post
userRouter.post("/login", async (req, res, next) => {
    const { user_name, password } = req.body;
    if (!user_name || !password) {
        next({
            name: 'MissingCredentialsError',
            message: 'Please supply both a username and password'
        });
    }
    try {
        //veryifying password
        const user = await getUserCredentials({user_name, password});
        if (!user) {
            next({
                name: "InvalidCredentials",
                message: "Invalid credentials"
            })
        } else {
            const token = jwt.sign({ id: user.id, user_name: user.user_name }, JWT_SECRET , { expiresIn: "1w"});
            res.send({ user, message: "You're logged in", token})
        }
    } catch (error) {
        throw error
    }
})

module.exports = userRouter;