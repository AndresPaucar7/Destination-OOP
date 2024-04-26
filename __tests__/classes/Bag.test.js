const Bag = require("../../classes/Bag");

describe('Bag', () => {
    
    test('Initializes object', () => {
        const bag1 = new Bag();
        expect(bag1).toBeInstanceOf(Bag);
    });


    test('Correctly assigned weight and id', () =>{
        const weight = 20;
        const id = 777;

        const bag2 = new Bag(weight, id);
        
        expect(bag2.weight).toBe(weight);
        expect(bag2.id).toBe(id);
    });
});