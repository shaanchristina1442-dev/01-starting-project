let aircraft = ["Boeing 777", "Airbus A380", "Cessna 172", "Lockheed Martin F-22 Raptor", "McDonnell Douglas DC-10", "Embraer E-Jet", "Bombardier Dash 8", "Sukhoi Superjet 100", "Mitsubishi Regional Jet", "Antonov An-225 Mriya"];
let airports = ["Hartsfield-Jackson Atlanta International Airport", "Beijing Capital International Airport", "Los Angeles International Airport", "Dubai International Airport", "Tokyo Haneda Airport", "O'Hare International Airport", "London Heathrow Airport", "Shanghai Pudong International Airport", "Paris Charles de Gaulle Airport", "Dallas/Fort Worth International Airport"];

let aircraftIndex = Math.floor(Math.random() * aircraft.length);
let airportIndex = Math.floor(Math.random() * airports.length);

let crewman = {
    name: "John Doe",
    rank: "Captain",
    experience: 10,
};

let selectedAircraft = aircraft[aircraftIndex];
let selectedAirport = airports[airportIndex];

function displayFlightInfo() {
    console.log(`Flight Information:`);
    let flightInfo = 'Flight Information:\n;'
    flightInfo += `Aircraft: ${selectedAircraft}\n`;
    flightInfo += `Airport: ${selectedAirport}\n`;
    console.log(flightInfo);
    console.log(add(100, 200));
    console.log(add("New", "Flight"));
}

// Call functions that take functions as parameters
function printFlight(myfunc){
    console.log("flight 33");
    myfunc();
}

setTimeout(printFlight, 2000); //prints in about 20 seconds

sayHello(function(){
    console.log("Bye")
})

sayHello(Bye);
printFlight(myfunc);

//functions as expressions
let age = 41 + 2; // expression- combination of operands and operaters. 


