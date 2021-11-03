// Write a JS program to print all of the factors of a value stored in a variable number using for loop. Assume the value is positive.

let num = 320, i;
console.log("All factors of " + num + " are :");
for (i = 1; i <= num; i++) {
    if (num % i == 0) {
        console.log(i);
    }
}