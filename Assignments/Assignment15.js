// Write a JS program to print all palindrome numbers from 1 to 1000 using for loop.

let i, rem;
console.log("Palindrome numbers from 1 to 1000 are :")
for (i = 1; i <= 1000; i++) {
    let temp = i;
    let rev = 0;
    while (temp != 0) {
        rem = temp % 10;
        rev = rev * 10 + rem;
        temp = parseInt(temp / 10);
    }
    if (i == rev)
        console.log(i);
}





