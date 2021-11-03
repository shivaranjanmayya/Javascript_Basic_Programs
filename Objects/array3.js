var myArray = new Array(true, "Blue", "Orange", "Yellow", 5, 6, 4, 10);
console.log(myArray);
for (let i = 0; i < myArray.length; i++)
    console.log(myArray[i]);

for (item of myArray)
    console.log(item);


function x(a) {
    a();
}

x(function () {
    console.log('Annonymus function called');

});