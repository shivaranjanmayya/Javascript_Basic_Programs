//Adding function to an existing object

var ford = {
    name: "Aspire",
    color: "Blue",

};

ford.printDetails = function () {
    console.log(this.name + " " + this.color);

}

ford.printDetails();