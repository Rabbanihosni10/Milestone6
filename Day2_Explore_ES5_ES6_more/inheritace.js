class Vehicle{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    move(){
        console.log('Gari chole na chole na chole na re')
    }
}
class Bus extends Vehicle{
    constructor(name,price,seat,ticketPrice){
        super(name,price);
        this.seat=seat;
        this.ticketPrice=ticketPrice;
    }
    // counter=
}
class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load=load;
    }
}

//Read about prototype chain
//OOP fundamentals part - Inheritance 
//In here a class inherit some qualities from the parents or other classes.
// __proto__ 