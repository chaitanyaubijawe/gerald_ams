## Airport management system

## Entities

# Flight
    name
    toAirportName
    fromAirportName
    delayed
    status// CANCELLED/ONTIME/DELAYED
    flightHours// total hours required to reach destination
    // below related  to number of passengers allowed or so. while booking ticket will be helpfull.
    maxPassenger;
    passengerCount;

# Airport
    name
    totalFlightCapacity
    currentFlightCapacity
    weatherStatus

# Traveller
    name
    age
    toAirportName
    fromAirportName
    seatNo
    type // crew member/captain/passenger
    mealType// veg/nonveg


## API

# Search Flight
    To search flight based on name or get all the flights by default.
# Search Airport
    To search airport based on name or get all the airports by default.

# Add airport
    Add the aiport

# Add Flight
    Add the flight

# Book ticket API [not implemented due to time]
    A passenger should be able to book the ticket based on 
      - the capacity.


# Update flight [not implemented due to time]
    should be able to update the flight based on the from  airport and to airport status and allowed capacity.
    while updating we need to fetch to and from airports data
    check airport availability based on the weather status after  flight hours or capacity after flight hours.
  