let array = [123, true, false, null, 'felight', { x: 'yo yo' }, 30.1, Infinity];
let myArray = new Array(100);

for (var i = array.length - 1; i >= 0; i--)
    console.log(array[i]);

console.log('--------------');

for (var item of array)
    console.log(item);