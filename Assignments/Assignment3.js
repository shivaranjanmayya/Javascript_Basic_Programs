//Write a JS Program to check if a number is a prime or not using while loop?

let n = 2, i = 2, flag = 1;
while (i < n) {
    if (n % i == 0) {
        flag = 0;
        break;
    }
    i++;
}
if (n === 1 || n === 0) {
    console.log('Number ' + n + ' is not a prime number');
}
else if (flag == 1 || n == 2) {
    console.log('Number ' + n + ' is a prime number');
}
else
    console.log('Number ' + n + ' is not a prime number');



