const express = require("express");

const {initializeRoutes, executeMiddleware} = require("./config/server-config");
const { connectToDatabase } = require("./config/db-config");

require("dotenv").config();
const PORT = process.env.PORT;

function runServer(){
    const app = express();
    app.listen(PORT, () => {
        console.log("Connected to DB and listening on port", PORT);
    });
    //connectToDatabase(app, PORT);
    executeMiddleware(express, app);
    initializeRoutes(app);
}

runServer();