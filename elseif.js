var time = 15;
var greeting = 'Not set Yet';
if (time < 10)
    greeting = "Good morning";
else if (time < 20)
    greeting = "Good day";
else
    greeting = "Good evening";

console.log(greeting);