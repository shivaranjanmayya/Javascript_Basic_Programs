let num = 10;

//first class functions
let x = function abc() {
    console.log('abc called');
}

//anonymous function
let y = function () {
    console.log('bcd');
}

x();
y();
console.log(x);
console.log(typeof x);


/*function add(num1, num2) {

    console.log('add with 2 parameter called');
    return num1 + num2;
}*/

function add(num1, num2, num3) {

    console.log(arguments);
    return num1 + num2 + num3;
}

console.log(add(1, 2));
console.log(add(1, 2, 3));

function bct() {
    console.log(arguments);
    console.log(arguments[0]);

}

console.log(bct(true, false, 'shiva', 123));



function x1(p) {
    //console.log(a);
    p();
}

//x1(123);
//x1(true);

function doSomething() {
    console.log('do something');
}

x1(doSomething);


function abc() {
    console.log('abc called');
    return function () {
        console.log('called');
    }
}

let x2 = abc();
x2();
abc()();