//without bigint
var x = 2 ** 53;
console.log(x);
var y = x + 1;
console.log(y);

//with bigint
var x = 2n ** 53n;
console.log(x);
var y = x + 1n;
console.log(y);
