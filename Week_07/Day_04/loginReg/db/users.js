const  { connection } = require("./config");
const bcrypt = require("bcrypt");
const { QueryTypes } = require('sequelize');

//user queries
async function createUser({ user_name, password }) {
    const hashedPassword = await bcrypt.hash(password, 12);
    try {
        const [[user]] = await connection.query(`
        INSERT INTO users(user_name, password) VALUES (?,?)
        RETURNING id, user_name
        `, {
            replacements: [user_name, hashedPassword],
            type: QueryTypes.INSERT
        });
        return user;
    } catch (error) {
        throw error;
    }
};

async function getUserByUsername(user_name) {
    try {
        const [user] = await connection.query(`
            SELECT *
            FROM users
            WHERE user_name = ?;
        `, {
            replacements: [user_name],
            type: QueryTypes.SELECT
        });
        return user
    } catch (error) {
        throw error
    }
};

async function getUserById(userId) {
    // first get the user
    try {
        const [user] = await connection.query(`
        SELECT *
        FROM users
        WHERE id = ?;
        `, {
            replacements: [userId],
            type: QueryTypes.SELECT
        });
        // if it doesn't exist, return null
        if (!user) return null;
        delete user.password;
        return user;
    } catch (error) {
        throw error;
    }
}

async function getUserCredentials({ user_name, password }) {
    if (!user_name || !password) {
        return;
    }

    try {
        const user = await getUserByUsername(user_name);
        if (!user) return;
        const hashedPassword = user.password;
        const passwordsMatch = await bcrypt.compare(password, hashedPassword);
        if (!passwordsMatch) return;
        delete user.password;
        return user;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createUser,
    getUserByUsername,
    getUserById,
    getUserCredentials
}

