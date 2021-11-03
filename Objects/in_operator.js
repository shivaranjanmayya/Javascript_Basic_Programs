let user = { name: "vinay", age: 30 };

console.log("age" in user);
console.log("id" in user);

user = { age: 30 };
key = "age";
console.log(key in user);