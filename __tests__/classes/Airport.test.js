const Airport = require('../../classes/Airport');
const Plane = require('../../classes/Plane');

describe('Airport tests', () => {
    test('Properties test', () => { // Removed colon after test
        const name = "Andres";
        const airport = new Airport(name);

        expect(airport.name).toBe(name);
        expect(airport.planes).toEqual([]); // Use toEqual for array comparison
    });

    test('Adding plane to airport,', () => {

        const airport = new Airport("LGA");
        const plane = new Plane({ company: 'Example Airlines' });

        airport.addPlane(plane);

        expect(airport.planes).toContain(plane);
    })
 
});