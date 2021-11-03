// Write a JS program to check if a number is prime or not using for loop.

let n = 0, i, flag = 1;
for (i = 2; i < n; i++) {

    if (n % i == 0)
        flag = 0;
    break;
}
if (n === 1 || n === 0) {
    console.log('Number ' + n + ' is not a prime number');
}
else if (flag == 1 || n == 2) {
    console.log('Number ' + n + ' is a prime number');
}
else
    console.log('Number ' + n + ' is not a prime number');