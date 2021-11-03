x = 1;
if (x)
    console.log(x + ": is true");

var x = -10;
if (x)
    console.log(x + ": is true");
else
    console.log(x + ": is false");

x = 0;
if (x)
    console.log(x + ": is true")
else
    console.log(x + ": is false");

x = Infinity;
if (x)
    console.log(x + ": is true");
else
    console.log(x + ": is false");

x = -Infinity;
if (x)
    console.log(x + ": is true");
else
    console.log(x + ": is false");

x = "0";
if (x)
    console.log(x + ": is true")
else
    console.log(x + ": is false");

x = "Yo Yo";
if (x)
    console.log(x + ": is true");
else
    console.log(x + ": is false");

x = NaN;
if (x)
    console.log(x + ": is true");
else
    console.log(x + ": is false");

x = undefined;
if (x)
    console.log(x + ": is true");
else
    console.log(x + ": is false");

x = null;
if (x)
    console.log(x + ": is true");
else
    console.log(x + ": is false");

x = Symbol();
if (x)
    console.log(String(x) + ": is true");
else
    console.log(String(x) + ": is false");

x = { a: 1 };
if (x)
    console.log(x + ": is true");
else
    console.log(x + ": is false");

