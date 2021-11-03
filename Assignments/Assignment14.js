// Write a JS program to check if a number is a palindrome or not using for loop.

let i, num = 121, rem, rev = 0;
for (i = num; i > 0;) {
    rem = i % 10;
    rev = rev * 10 + rem;
    i = parseInt(i / 10);
}
if (rev == num) {
    console.log("Number " + num + " is a palindrome");

}
else {
    console.log("Number " + num + " is not a palindrome");
}


