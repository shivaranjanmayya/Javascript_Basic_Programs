var msg1 = {
    to: 9449587385,
    msg: "How are you?",
    delivered: true,
    read: false,
    from: 8217566178
};
//get all the properties defined in the object msg1
for (prop in msg1)
    console.log(prop);

//properties and values
console.log(msg1["delivered"]);
var keyX = "delivered";
console.log(msg1[keyX]);



