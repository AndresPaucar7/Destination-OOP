const Person = require("../../classes/Person");

describe('Person', () => {
    
    test('Initializes object', () => {
        const Person1 = new Person();
        expect(Person1).toBeInstanceOf(Person);
    });


    test('Correctly assigned weight and id', () =>{
        const name = 20;
        const destination = 777;

        const Person2 = new Person(name, destination);
        
        expect(Person2.name).toBe(name);
        expect(Person2.destination).toBe(destination);
    });
});