class Person {
    constructor(name, destination){
        this.name =  name;
        this.destination =  destination;
        this.bags = [];
    };
    
    addToBags(bag){
        this.bags.push(bag);
    }

    getBags(){
        return this.bags;
    }
}

module.exports = Person;