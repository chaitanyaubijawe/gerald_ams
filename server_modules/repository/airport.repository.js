const DB = require("../database/db").dBConnection;

class AirportRepository{


    constructor(){
    }

    getFlights(searchQuery, cb){

        let query = "SELECT * from  airport ";

        if(searchQuery){

            query += " where name like '%"+searchQuery+"%'";
        }

        try{

            DB.getDBPool().getConnection(function (err, con) {

                if (err){

                    throw err;
                }
                try{

                    con.query(query, function (err, results) {

                        if (err){

                            throw err;
                        }


                        console.log(results);

                        con.release();

                        cb(results);

                    });

                }
                catch (error){

                    console.error("Error !! ", error);
                }


            })
        }

        catch (error){

            console.error("Error !! ", error);

        }

    }


    addAirport(flight, cb){


        let query = "INSERT INTO airport ( name, total_flight_capacity , current_flight_capacity , weather_status ) VALUES ('";
        query += flight.name + "','" + flight.totalFlightCapacity + "','" + flight.currentFlightCapacity +  "','" + flight.weatherStatus +"')";

        try{

            DB.getDBPool().getConnection(function (err, con) {

                if (err){

                    throw err;
                }
                try{

                    con.query(query, function (err, results) {

                        if (err){

                            throw err;
                        }


                        console.log(results);

                        con.release();
                        cb(flight);

                    });

                }
                catch (error){

                    console.error("Error !! ", error);
                }


            })
        }

        catch (error){

            console.error("Error !! ", error);

        }

    }
    updateProduct(product, cb){

    }



}

module.exports.airportRepository = new AirportRepository();