//charAt(x)
var myString = 'I can win';
console.log(myString.charAt(7)); // i

//charCodeAt(x)
var myString = 'I can win';
console.log(myString.charCodeAt(0)); //73

//concat(v1,v2,...)
var message = "Namaste"
var final = message.concat(' "India" ', ' "Welcome to JS"');
console.log(final); //Namaste "India" "Welcome to JS"

//fromCharcode(c1,c2,...)
console.log(String.fromCharCode(97, 98, 99, 120, 121, 122)) //abcxyz
console.log(String.fromCharCode(72, 69, 76, 76, 79)) //HELLO

//indexOf()
var myString = 'Javascript rocks';
console.log(myString.indexOf('a')); //output :1

//lastIndexof()
var myString = 'Javascript rocks';
console.log(myString.lastIndexOf('r')); //output :11

//localeCompare()
var myString = 'Javascript rocks';
var myString1 = 'Javascript rocks';
var x = myString.localeCompare(myString1);
console.log(x); //output 0


