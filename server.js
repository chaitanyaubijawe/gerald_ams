// Express Provides you a way to implement HTTP server.
const express = require("express");
// create a express application object .
const app = express();
// import DB connection. so that DB intilizes at application start up
const DB = require("./server_modules/database/db.js").dBConnection;
// parses request body with desired format. currently we are using JSON.
const bodyParser = require("body-parser");
// import controllers
 const flightController = require("./server_modules/controllers/flight.api.controller").flightApiController;
 const airportController = require("./server_modules/controllers/airport.api.controller").airportApiController;
// config to read config from file and env.
const config = require("config");


class Server {

    constructor() {

        this.initializeRoutes();
        this.initializeDB();
        this.startServer();
    }


    initializeRoutes() {


        // use body parser... currently parsing only JSON requests.
        app.use(bodyParser.json());
        app.use(function(req,res,next){

            console.log("URL called ", req.url);
            // get authorization header from req...
            // req.header.authorization..
            // check that auth is valid......
            //if valid then next()
            // else res.redirect(/login)
            next();

        });
        app.get("/health", function (req, res) {
            // check the DB connection here.
            res.send("UP");

        });
        // register your router here.
        app.use("/services", flightController.getRouter());
        app.use("/services", airportController.getRouter());
    }

    initializeDB(){
        // initialize databse connection pool at the application start up.
        let configDB = config.get("db");
        console.log("Confifguration for DB is :: ", configDB);
        DB.initializeDB(configDB);

    }

    startServer() {
        // listen to port. Start your server here.
        app.listen(config.get("serverPort"), function () {

            console.log("Server started on port : ", config.get("serverPort"))
        })

    }


}

new Server();