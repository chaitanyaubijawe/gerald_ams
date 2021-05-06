const express = require('express');
const router = express.Router();
const airportRepository = require("../repository/airport.repository").airportRepository;
class AirportApiController {


    constructor() {
        this.getAirports();
        this.addAirport();
        this.updateAirport();
    }


    getAirports() {
        router.get("/airports", function (req, res) {
            //add validations....
            let searchQuery = req.query.searchQuery;
            airportRepository.getFlights(searchQuery, (data) => {
                // map the  data to airport objects.
                res.send({"data": data});
            });
        })
    }

    addAirport() {
        router.post("/airport", function (req, res) {
            let flightObj = req.body;
            airportRepository.addAirport(flightObj, (data) => {
                // map the  data to airport objects.
                res.send(data);
            });
        })
    }

    updateAirport() {
        router.put("/airport/:name", function (req, res) {

            res.send("update airports");

        })
    }

    getRouter() {

        return router;
    }
}

module.exports.airportApiController = new AirportApiController();