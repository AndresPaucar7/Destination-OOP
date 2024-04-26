class Airport {
    constructor(name ,airportCode ,planes ){
        this.name = name;
        this.planes = [];
    }

    static airportCode = "";

    getPlanes() {
        return this.planes;
    }

    addPlane(plane) {
        this.planes.push(plane);
    }

    checkAirportCode(code){
        if(typeof code == 'string' && code.length === 3 && code.match(/^[A-Z]+$/)){
            Airport.airportCode = code.toUpperCase();
        } else {
            console.log("Code needs to be 3 letters");
            process.exit(1);
        }
    }
}


module.exports = Airport;