const express = require('express');
const userRouter = express.Router();
const { requireUser } = require("./utils");
const { getUserByUsername, createUser } = require("../db/users");
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
            res.send({ user, message: "Youre signed up", token})
        }
    } catch (error) {
        next(error)
    }
})

module.exports = userRouter;