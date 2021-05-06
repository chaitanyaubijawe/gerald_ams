class Airport {

    constructor(airport) {
        this.name = airport.name;
        this.totalFlightCapacity = airport.totalFlightCapacity;
        this.currentFlightCapacity = airport.currentFlightCapacity;
        this.weatherStatus = airport.weatherStatus;

    }
}

module.exports = {
    create: (airport) => {
        return new Airport(airport);
    }
};