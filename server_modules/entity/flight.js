class Flight {

    constructor(flight) {
        this.name = flight.name;
        this.toAirportName = flight.toAirportName;
        this.fromAirportName = flight.fromAirportName;
        this.delayed = flight.delayed;
        this.status = flight.status;// CANCELLED/ONTIME/DELAYED
        this.flightHours = flight.flightHours;// total hours required to reach destination.
    }
}

module.exports = {
    create: (flight) => {
        return new Flight(flight);
    }
};