const DB = require("../database/db").dBConnection;

class FlightsRepository{


    constructor(){
    }

    getFlights(searchQuery, cb){

        let query = "SELECT * from  flight ";

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


    addFlight(flight, cb){


        let query = "INSERT INTO flight ( name, to_airport_name, from_airport_name,`delayed`, `status`, flight_hours ) VALUES ('";
        query += flight.name + "','" + flight.toAirportName + "','" + flight.fromAirportName + "'," + flight.delayed+ ",'" + flight.status+ "','" + flight.flightHours +"')";

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

module.exports.flightsRepository = new FlightsRepository();