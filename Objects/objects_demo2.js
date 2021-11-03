let myCar = new Object();
myCar.name = "Swift";
myCar.model = 2020;
myCar.color = 'White';
myCar.brand = 'Maruthi';
myCar.start = function () {
    console.log(this.color + ' car started');
}

console.log(myCar);
console.log(typeof myCar);
myCar.start();