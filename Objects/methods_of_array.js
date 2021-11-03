let array = [123, true, false, null, 'felight', { x: 'yo yo' }, 30.1, Infinity];

array.push('shiva');
console.log(array);


array.forEach(function(item){
    console.log(item);
});

console.log(array.length);


console.log(array.join('|'));

let array1 = [123, true, false, null, 'felight', { x: 'yo yo' }, 30.1, Infinity];

console.log(array1.concat(array));


console.log(array.copyWithin(3,0));

let array2 = [123, true, false, null, 'felight', { x: 'yo yo' }, 30.1, Infinity];
let x =array2.entries();
for(let items of x)
console.log(items);