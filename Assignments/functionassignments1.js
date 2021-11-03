// Function with no arguments and no return value

function doSomething() {
    console.log("Doing something");
}

doSomething();
doSomething();

function doSomething1(whatToDo) {
    console.log("Doing :" + whatToDo);
}

doSomething1("Drink coffee");
doSomething1("Write code");

// Write a js function to add 10 and 20 no parameter and no return value.

function add() {
    let n1 = 10;
    let n2 = 20;
    let sum = n1 + n2;
    console.log(sum);
}

add();
add();
add();

// Write a js function which accepts arguments as input

function add1(n1, n2) {
    let sum = n1 + n2;
    console.log(sum);
}

add1(10, 400);
add1(1, 20);
add1(100, 500);

// write a js function which accepts arguments as input and returns the output back to the caller

function add3(n1, n2) {
    let sum = n1 + n2;
    return sum;
}

result1 = add3(10, 400);
result2 = add3(1, 20);
result3 = add3(100, 500);

console.log(result1);
console.log(result2);
console.log(result3);

console.log(add3(123, 456));
console.log(add3(1, 1));
console.log(add3(500, 600));

// No function overloading is possible in JS

function add4(num1, num2) {
    return num1 + num2;
}

function add4(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(add4(123, 123));
console.log(add4(100, 200));
console.log(add4(500.500, 1.600, 23));

function funcA(a, b) {
    return a + b;
}

function funcA(c) {
    return c;
}

console.log(funcA(2));
console.log(funcA(3, 4));

// Variable number of arguments

function a() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log('-----------');
    console.log();
}

a(1);
a(1, 2);
a(1, 2, 3);
a('192.168.1.98', '6565');
a('Shri Rama', 'Jai Hanuman');

function x() {
    console.log(arguments[0], arguments[1]);

}

x();
x(1);
x('shiva', 234, true);
x(true, 1, 1, 123, 1, 1, 1, 1, 11);

function f1() {

    for (let i = 0; i < arguments.length; i++)
        console.log(arguments[i]);
    console.log('-------------');

}

f1();
f1(1);
f1('a', 'b');
f1(true, false, true);
f1('Blue', 'Orange', 'Yellow', 'Indigo');


//variable number of arguments in function with no concept of function overloading exists in js

function a(v1) {
    console.log('function a(v1) called : ' + v1);
}

a(1);
a();
console.log('--------------');

function a(v1, v2) {
    console.log('function a(v1,v2) called: ' + v1 + ' ' + v2);
}

a(1);
a(1, 2);
a(1, 2, 3);
a();

//First class functions : function can be assigned to a variable.

let myVar = function isEven(num) {
    return num % 2 == 0;
}

console.log(myVar(10));
console.log(myVar(11));
console.log(myVar);
console.log(typeof myVar);

console.log(myVar());
console.log(myVar(''));
console.log(myVar('Yo Yo'));
console.log('Yo Yo' % 2);
console.log(NaN == 0);
console.log('' % 2);

//functions can be passed as parameter to other functions.

function a() {
    console.log('a function called');

}
function b(myVar) {
    console.log('b function called');
    myVar();
}

function c(myVar1) {

    console.log('b function is called');
    myVar1;
    console.log(myVar1);

}

b(a);

c(a());

// Function without return statement

function x2() {

}
console.log(x2());

// Function can be returned from other functions

function x() {
    return y;
}

function y() {
    console.log("Greeeting from y");
}

let func = x();
func();

x()();

// Function anonymous

let doSomething2 = function () {
    console.log('doing something');
}
doSomething2();

//passing an anonymous function as argument to another function

/*function t(a){
    s();
}*/

/*t(function() {
    console.log("Yo Yo");
});*/

// Returning a function from a function

let doSomething5 = function () {
    return function () {
        console.log("doing something");
    }
}

let innerFunction = doSomething5();

innerFunction();
doSomething5()();


function x4() {
    console.log('x function called');
}

function y4() {
    return x4;
}

let myVar1 = y4();
myVar1();


