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