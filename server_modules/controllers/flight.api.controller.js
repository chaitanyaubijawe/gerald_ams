const express = require('express');
const router = express.Router();
const flightsRepository = require("../repository/flight.repository").flightsRepository;
class FlightApiController {


    constructor() {
        this.getFlights();
        this.addFlight();
        this.updateFlight();
    }


    getFlights() {
        router.get("/flights", function (req, res) {
            // make this mandatory.
            let searchQuery = req.query.searchQuery;

            flightsRepository.getFlights(searchQuery, (data) => {
                //  map here list of flights to return for the response.
                res.send({"data": data});
            })

        })
    }

    addFlight() {
        router.post("/flight", function (req, res) {

            let flightObj = req.body;
            flightsRepository.addFlight(flightObj, (data) => {
                //  map here list of flights to return for the response.
                res.send(data);
            })
        })
    }

    updateFlight() {
        router.put("/flight/:name", function (req, res) {

            res.send("update flight");

        })
    }

    getRouter() {

        return router;
    }
}

module.exports.flightApiController = new FlightApiController();