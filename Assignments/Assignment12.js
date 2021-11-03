// Write a JS program to print numbers between LOW and HIGH that are evenly divisible by four but not five using for loop. (For example, take two variables low 10, high=100)

let low = 10, high = 100, i;
console.log("The numbers between 10 to 100 that are evenly divisible by four but not five are :")
for (i = low; i <= high; i++) {
    if (i % 4 == 0 && i % 5 != 0) {
        console.log(i);
    }
}








