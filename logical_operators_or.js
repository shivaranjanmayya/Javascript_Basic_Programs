let o1 = true || true; //true
let o2 = false || true; //true
let o3 = true || false; //true
let o4 = false || (3 == 4); //false
let o5 = 'cat' || 'Dog'; //cat
let o6 = false || 'cat'; //cat
let o7 = 'cat' || false; //cat
let o8 = 'cat' || true; //cat
let o9 = true || 'cat'; //cat

console.log(o1, o2, o3, o4, o5, o6, o7, o8, o9);

if (1 || 0) {
    console.log("Yes it's true");
}