const Plane = require("../../classes/Plane");
const Person = require("../../classes/Plane");

describe('Plane testing', () => {
    test('Correct assigned values', () =>{
        const company = "Mine";
        const destination = "Ecuador"; 

        const plane1 = new Plane(company, destination)

        expect(plane1.company).toBe(company);
        expect(plane1.destination).toBe(destination);
        expect(plane1.passengers).toEqual([]);
    })

    test('Add person to plane', () => {
        const plane = new Plane('La Plane', 'LGA');

        const person = new Person('Andres', 'Ecuador');

        plane.addPassenger(person)
    })
});