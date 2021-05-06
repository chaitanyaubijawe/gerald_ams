const mysql = require('mysql');
class DBConnection{


    initializeDB(config){

        // let config = {
        //     connectionLimit : 10,
        //     host     : 'localhost',
        //     user     : 'root',
        //     database : 'cnb'
        // };

        this.pool  = mysql.createPool(config);
        console.log("here")

    }

    getDBPool(){

        return this.pool;

    }
}

module.exports.dBConnection = new DBConnection();