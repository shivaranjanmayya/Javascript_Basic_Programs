var myCar = {
    //propert:value
    name: "Taigo",
    model: 2018,
    color: "Orange",
    speed: 0,

    //behavior
    move: function () {
        this.speed++;
    }
};

console.log(myCar.name);
console.log(myCar["model"]);
console.log(myCar.color);
myCar.move();myCar.move();myCar.move();
console.log(myCar.speed);