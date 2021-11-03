//Write a JS Program to print fibonacci series (1st 10 numbers) using do while loop?

let i = 1, n = 10, f1 = 0, f2 = 1, f3;
console.log('The First 10 Fibonacci Series are:');
do {
    i++;
    console.log(f1);
    f3 = f1 + f2;
    f1 = f2;
    f2 = f3;

} while (i <= n);