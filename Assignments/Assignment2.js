//Write a JS Program to find odd numbers from 100 to 150 using while loop ?

let i = 100;
console.log('Odd numbers from 100 to 150 are :');
while (i <= 150) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i++;
}
