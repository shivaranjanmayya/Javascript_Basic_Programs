// 1. Create 2 objects car1,car2 with 8 properties and 3 behaviours using object literal.

let car1 = {
    name: "Lamborghini",
    model: "2020",
    color: "Red",
    price: 30000000,
    engine: "4L Twin-Turbo V8",
    fuel_type: "Petrol",
    seat: 5,
    speed: 190,

    start: function () {
        console.log(this.name + " is ready to Go");
    },
    move: function () {
        this.speed++;
    },
    stop: function () {
        console.log(this.fuel_type + " is empty");
    }

};

car1.start();
car1.move(); car1.move();
car1.stop();
console.log(car1.name, car1.model, car1.color, car1.price, car1.engine, car1.fuel_type, car1.seat, car1.speed);

let car2 = {
    name: "Swift",
    model: "2021",
    color: "Red",
    price: 853000,
    engine: "1197 cc",
    fuel_type: "Petrol",
    seat: 5,
    speed: 165,
    start: function () {
        console.log(this.name + " is ready to Go");
    },
    move: function () {
        this.speed++;
    },
    stop: function () {
        console.log(this.fuel_type + " is empty");
    }
};

car2.start();
car2.move();
car2.stop();
console.log(car2.name, car2.model, car2.color, car2.price, car2.engine, car2.fuel_type, car2.seat, car2.speed);



