let obj = {
    for: 1,
    let: 2,
    return: 3,
    0: "test"
};


console.log(obj.for + obj.let + obj.return);

console.log(obj["0"]);
console.log(obj[0]);