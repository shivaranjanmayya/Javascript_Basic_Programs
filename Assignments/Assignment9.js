// write a JS program to print all prime numbers from 1 to 100 using for loop.

let n;
console.log("The prime numbers from 1 to 100 are:");
for (n = 2; n <= 100; n++) {
    let count = 0, i;
    for (i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
            count++;
            break;
        }
    }
    if (count == 0)
        console.log(n);
}
