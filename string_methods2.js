//match()
var myString = 'Javascript rocks';
console.log(myString.match(/roc/g)); //output [ 'roc' ]

//replace(substr, replacetext)
var myString = "Felight Javascript Coders";
console.log(myString.replace(/coders/i, "Developers")); //output : Felight Javascript Developers

//search()
var myString = "Welcome to Felight!";
console.log(myString.search("Felight")); //output : 11

//slice()
var text = "excellent";
console.log(text.slice(0, 4)); //output : "exce"
console.log(text.slice(2, 4)); //output : "ce"

//split()
var message = "welcome to Felight"
var word = message.split("l");
console.log(word[0]); // we
console.log(word[1]); //come to Fe
console.log(word[2]); //ight

//substr(start,length)
var str = "Hello Felight";
console.log(str.substr(1, 4));  // ello

//substring(start,end)
var str = "Hello Felight";
console.log(str.substring(1, 4)); //ell
