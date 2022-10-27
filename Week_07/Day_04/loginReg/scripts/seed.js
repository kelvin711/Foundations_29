const { connection } = require("../db/config");
const { createUser, getUserByUsername } = require("../db/users")

async function seed() {
    await connection.query(`
    DROP TABLE IF EXISTS users;

    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        user_name VARCHAR(60),
        password VARCHAR(255)
    );
    `);

    const user = await createUser({user_name: "kelvin", password: "password123"})
    const getTest = await getUserByUsername("kelvin")
    console.log(getTest);
}

seed()