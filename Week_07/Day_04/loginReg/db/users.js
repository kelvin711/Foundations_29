const  { connection } = require("./config");
const bcrypt = require("bcrypt");
const { QueryTypes } = require('sequelize');

//user queries
async function createUser({ user_name, password }) {
    const hashedPassword = await bcrypt.hash(password, 12);
    try {
        const [[user]] = await connection.query(`
        INSERT INTO users(user_name, password) VALUES (?, ?)
        RETURNING id, user_name
        `, {
            replacements: [user_name, hashedPassword],
            type: QueryTypes.INSERT
        });
        return user;
    } catch (error) {
        throw error;
    }
}

async function getUserByUsername(user_name) {
    try {
        const [[user]] = await connection.query(`
            SELECT *
            FROM users
            WHERE user_name = ?;
        `, {
            replacements: [user_name],
            type: QueryTypes.INSERT
        });
        console.log(user);
    } catch (error) {
        throw error
    }
}

module.exports = {
    createUser,
    getUserByUsername
}

