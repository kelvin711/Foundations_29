const Sequelize = require('sequelize')
require('dotenv').config()
const { CONNECTION_STRING } = process.env

const connection = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = {
    connection,

    test: async () => {
        try {
            await connection.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}