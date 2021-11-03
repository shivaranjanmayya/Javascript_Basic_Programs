/*Create a constructor function called Complex for dealing with complex numbers. Your constructor function must have the following properties:
realPart for storing the real part of the number
imaginaryPart for storing the imaginary part of the number.
Also define function to perform addition, subtraction, multiplication and division of two complex numbers.*/

function Complex(realPart, imaginaryPart) {
    this.realPart = realPart,
        this.imaginaryPart = imaginaryPart,
        this.add = function () {
            this.realPart = c1.realPart + c2.realPart;
            this.imaginaryPart = c1.imaginaryPart + c2.imaginaryPart;
            // console.log("Addition of two Complex numbers : " + this.realPart + " + i" + this.imaginaryPart);
        },
        this.subtraction = function () {
            this.realPart = c1.realPart - c2.realPart;
            this.imaginaryPart = c1.imaginaryPart - c2.imaginaryPart;
            // console.log("Subtraction of two Complex numbers : " + this.realPart + " + i" + this.imaginaryPart);
        },
        this.multiply = function () {
            this.realPart = c1.realPart * c2.realPart;
            this.imaginaryPart = c1.imaginaryPart * c2.imaginaryPart;
            //console.log("Multification of two Complex numbers : " + this.realPart + " + i" + this.imaginaryPart);
        },
        this.division = function () {
            this.realPart = c1.realPart / c2.realPart;
            this.imaginaryPart = c1.imaginaryPart / c2.imaginaryPart;
            //console.log("Division of two Complex numbers : " + this.realPart + " + i" + this.imaginaryPart);
        },
        this.printComplexNumber = function () {
            console.log(this.realPart + " + " + this.imaginaryPart + "i");
        }
};

let c1 = new Complex(9, 10);
let c2 = new Complex(4, 5);
let c3 = new Complex();

c3.add();
c3.printComplexNumber();
c3.subtraction();
c3.printComplexNumber();
c3.multiply();
c3.printComplexNumber();
c3.division();
c3.printComplexNumber();





