// Write a JS program to print all even numbers from 10 to 100 using for loop.

let i, n = 100;
console.log("Even numbers between 10 to 100 are: ");
for (i = 10; i <= n; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}