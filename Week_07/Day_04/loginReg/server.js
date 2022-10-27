const express = require("express"),
    app = express(),
    dotenv = require("dotenv").config()
    port = process.env.PORT,
    cors = require("cors"),
    server = app.listen(port, () => console.log(`all systems firing on port ${port}`));

app.use(cors());//request to ourselfs are coolio
app.use(express.json());//parse json data
    
//router api
app.use("/api", require("./api"))

// error handling middleware
app.use((error, req, res, next) => {
    console.error('app ERROR: ', error);
    if (res.statusCode < 400) res.status(500);
    res.send({ error: error.message, name: error.name, message: error.message, table: error.table });
});
