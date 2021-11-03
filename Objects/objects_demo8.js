let user = {
    name: "Shivaranjan",
    age: 1000
};

var clone = {};

/*for (let key in user) {
    clone[key] = user[key];
}*/

Object.assign(clone, user);

console.log(user);
console.log(clone);