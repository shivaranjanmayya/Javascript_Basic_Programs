//Write a JS Program to display prime numbers from 1 to 100 using while loop?

let n = 2;
console.log("The prime numbers from 1 to 100 are:");
while (n <= 100) {
    let count = 0, i = 2;
    while (i <= n / 2) {
        if (n % i == 0) {
            count++;
            break;
        }
        i++;
    }
    if (count == 0) {
        console.log(n);

    }
    n++;
}