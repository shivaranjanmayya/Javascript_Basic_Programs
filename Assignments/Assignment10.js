// Write a JS Program to print first 10 Fibonacci series using for loop.

let i, n = 10, f1 = 0, f2 = 1, f3;
console.log('The First 10 Fibonacci Series are:');
for (i = 1; i <= n; i++) {
    console.log(f1);
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;
}