//Write a JS Program to print numbers from 1 to 200 which are divisible by 3 & 6 but not by 5 using do while loop?

let i = 1, n = 200;
console.log("Numbers from 1 to 200 which are divisible by 3 & 6 but not by 5 are: ");
do {
    i++;

    if ((i % 3 == 0 && i % 6 == 0) && (i % 5 !== 0)) {
        console.log(i);

    }
} while (i <= 200);