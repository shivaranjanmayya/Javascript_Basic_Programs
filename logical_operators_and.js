let o1 = true && true; //true
let o2 = false && true; //false
let o3 = true && false; //false
let o4 = false && (3 == 4); //false
let o5 = 'cat' && 'Dog'; //dog
let o6 = false && 'cat'; //false
let o7 = 'cat' && false; //false
let o8 = 'cat' && true; //true
let o9 = true && 'cat'; //cat

console.log(o1, o2, o3, o4, o5, o6, o7, o8, o9);

console.log(1 && 2 && 3 && 4);

console.log(1 && null && 3 && 4);
