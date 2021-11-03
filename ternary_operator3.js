//Write a JS Program to find the maximum number out of given 3 numbers using ternary operator ?

var n1 = 10, n2 = 20, n3 = 5, max;
max = (n1 > n2) ? n1 : (n2 > n3) ? n2 : n3;
console.log(max);