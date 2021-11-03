console.log('--------------------Function Assignment Programs Bigins------------------------------------------\n');

// 1. Write a function which accepts three numbers as arguments and returns addition of three numbers.

function add(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log('The addition of three numbers are :' + add(12, 15, 17));

console.log('-------------------------------------------------------------------------');

// 2. Write a function takes time and distance as input and retruns speed.

function speed(time, distance) {
    return distance / time;
}

console.log('The speed is : '+speed(200, 600));

console.log('-------------------------------------------------------------------------');

// 3. Write a function which accepts radius as input and return area of a circle as output.

function areaOfCircle(radius) {
    return radius * radius * 3.142;
}

console.log('The area of a cirlce is :' + areaOfCircle(123, 123));

console.log('-------------------------------------------------------------------------');

// 4. Write a function which accepts a number as input and returns factorial of that number.

function factorial(num) {
    let fact = 1;
    if (num == 0 || num == 1)
        return 1;

    for (var i = num; i >= 1; i--) {
        fact = fact * i;
    }
    return fact;
}

console.log('Factorial of 0 is ' + factorial(0));
console.log('Factorial of 5 is ' + factorial(5));
console.log('Factorial of 7 is ' + factorial(7));

console.log('-------------------------------------------------------------------------');

// 5. Write a function which takes an integer as input and returns true if it is even false if it's not.

function isEven(num) {
    return num % 2 == 0;
}

console.log(isEven(123));
console.log(isEven(10));

console.log('-------------------------------------------------------------------------');

// 6. Write a function which takes an integer as input and returns true if it is odd false if it's not.

function isOdd(num) {
    return num % 2 != 0;
}

console.log(isOdd(123));
console.log(isOdd(10));

console.log('-------------------------------------------------------------------------');

// 7. An integer as input and returns true if it is prime false if it's not.

function isPrime(num) {
    if (num == 1 || num == 0)
        return false;

    for (var i = 2; i < num; i++) {

        if (num % i == 0)
            return false;
    }
    return true;

}

console.log(isPrime(2));
console.log(isPrime(0));
console.log(isPrime(55));

console.log('-------------------------------------------------------------------------');

// 8. An integer as input and returns true if it is palindrome false if it is not.

function isPalindrome(num) {
    let rev = 0;
    for (let i = num; i > 0;) {
        rem = i % 10;
        rev = rev * 10 + rem;
        i = parseInt(i / 10);
    }

    return rev == num;
}

console.log(isPalindrome(121));
console.log(isPalindrome(4545));
console.log(isPalindrome(4554));

console.log('-------------------------------------------------------------------------');

// 9. An integer as input and returns a Fibonacci series of that size and store all the numbers in a string and return the string itself.

function Fibonacci(num) {

    let f1 = "0", f2 = "1", f3, string = "";
    for (let i = 1; i <= num; i++) {
        string += f1 + '\t';
        f3 = parseInt(f1 + f2);
        f1 = parseInt(f2);
        f2 = parseInt(f3);

    }
    return string;

}

console.log('Fibonacci series are : ' + Fibonacci(11));

console.log('-------------------------------------------------------------------------');

// 10. An integer as input and returns true if it is divisible by 6 false if it's not.

function isdivisible(num) {
    return num % 6 == 0;
}

console.log(isdivisible(16));
console.log(isdivisible(26));
console.log(isdivisible(18));
console.log(isdivisible(24));

console.log('-------------------------------------------------------------------------');

// 11. A function accepts the time in seconds and returns the time in hours.

function time(seconds) {
    return hours = seconds / 3600;
}
console.log('hour = ' + time(3600));

console.log('-------------------------------------------------------------------------');

// 12. A function that counts the number of Digits in an Integer.

function countDigits(num) {
    let count = 0;
    while (num != 0) {
        num = parseInt(num / 10);
        count++;
    }
    return count;
}

console.log(countDigits(100));
console.log(countDigits(12345));
console.log(countDigits(6));

console.log('-------------------------------------------------------------------------');

// 13. Write a function that accepts an integer and returns the digits repeated twice.

function makeTwice(num) {
    let count = countDigits(num);

    switch (count) {
        case 1: return num * 10 + num;
        case 2: return num * 100 + num;
        case 3: return num * 1000 + num;
        case 4: return num * 10000 + num;
        case 5: return num * 100000 + num;
    }

}

console.log(makeTwice(123));
console.log(makeTwice(1567));

console.log('-------------------------------------------------------------------------');

// 14. Given a 4 digit number as input, find the value of its hundredth digit.

function hundreds_place_value(num) {
    return hun = parseInt(num / 100) % 10;
}

console.log(hundreds_place_value(1234));
console.log(hundreds_place_value(8943));

console.log('-------------------------------------------------------------------------');

/* 15. Calculate RequiredRunRate: A team is chasing the target set in a one-day international match. The objective is to compute the required run rate. The following have been provided as input:
target,maxOvers, currentScore, oversBowled.*/

function requiredrunRate(target, maxOvers, currentScore, oversBowled) {
    let requiredRun = target - currentScore;
    let remainedOvers = maxOvers - oversBowled;
    return requiredRun / remainedOvers;
}

console.log('The required run rate for one-day international match is : '+requiredrunRate(200, 20, 140, 16.4));

console.log('-------------------------------------------------------------------------');

// 16. MakeDecimal: Given 3 digits a,b and c as input, return a double of the form a.bc.

function makeDecimal(num1, num2, num3) {

    return ((num1 * 100) + (num2 * 10) + num3) / 100;
}

console.log(makeDecimal(1, 2, 3));

console.log('-------------------------------------------------------------------------');

// 17. Sum2Digit: Given a 2 digit number as input, compute the sum of its digits. Assume that the number has 2 digits.

function sum2Digit(num) {
    let unit_place, tens_place;
    if (num <= 99 && num > 9)
        unit_place = num % 10;
    tens_place = parseInt(num / 10) % 10;
    return unit_place + tens_place;
}

console.log('Sum of 2 digits is : '+sum2Digit(34));

console.log('-------------------------------------------------------------------------');

// 18. AndBooleans: Given three booleans as input, return the AND of the all three booleans.

function andBooleans(boolean1, boolean2, boolean3) {

    return boolean1 && boolean2 && boolean3;

}
console.log(andBooleans(true, false, false));
console.log(andBooleans(true, false, true));
console.log(andBooleans(true, true, true));

console.log('-------------------------------------------------------------------------');

/* 19. LargerThanOne: Given three numbers as input, num1,num2 and num3, return true if num1 is greater than atleast one of num2 and num3. 
Do not use if statement to solve this problem.*/

function largerThanOne(num1, num2, num3) {
    return num1 > num2 || num1 > num3;
}

console.log(largerThanOne(30, 20, 10));

console.log('-------------------------------------------------------------------------');

/* 20. NumberInAscendingOrder: Given 3 numbers- num1,num2 and num3 as input, return true if they are ascending order. 
Important- Do not use if statement in solution.*/

function numberInAscendingOrder(num1, num2, num3) {
    return num1 < num2 && num2 < num3;
}

console.log(numberInAscendingOrder(10, 20, 30));

console.log('-------------------------------------------------------------------------');

// 21. SumOf4Digits: Given a number as input, compute the sum of its last 4 digits. Assume that the number has at least 4 digits.

function sumOf4Digits(num) {
    let unit_place, tens_place, hundreds_place, thousands_place;
    if (num >= 1000)
        unit_place = num % 10;
    tens_place = parseInt(num / 10) % 10;
    hundreds_place = parseInt(num / 100) % 10;
    thousands_place = parseInt(num / 1000) % 10;
    return parseInt(unit_place + tens_place + hundreds_place + thousands_place);
}

console.log('Sum of 4 digits are : '+sumOf4Digits(3434));

console.log('-------------------------------------------------------------------------');

/* 22. AreaOfSquare: You have been given 4 inputs x1,y1,x2 and y2. 
The points(x1,y1) and (x2,y2) represent the end points of the diagonal of a square. Return the area of the square.*/

function areaOfSquare(x1, y1, x2, y2) {
    s1 = x2 - x1;
    s2 = y2 - y1;
    return ((Math.sqrt(s1 ** 2 + s2 ** 2)) ** 2) / 2;
}

console.log('Area of a square is :'+areaOfSquare(2, 4, 8, 10));

console.log('-------------------------------------------------------------------------');

// 23. AddDigitNumbers : Given three digits as input, create a 4 digit number out of each input in which all the digits are the same and then add all the 3 numbers and return the value.

function addDigitNumbers(digit1, digit2, digit3) {

    let num1 = 0, num2 = 0, num3 = 0;
    for (let i = 10; i <= 1000; i = i * 10) {
        num1 = num1 + digit1 * i; //0+1*10= 10 ; 10+1*100=110; 110+1*1000=1110
        num2 = num2 + digit2 * i;
        num3 = num3 + digit3 * i;

    }
    return (num1 + digit1) + (num2 + digit2) + (num3 + digit3);
}

console.log(addDigitNumbers(1, 2, 3));

console.log('-------------------------------------------------------------------------');

// 24. Multiple37 : Given a number n, return true if it is divisble by either 3 or 7.

function multiple3Or7(num) {
    return num % 3 == 0 || num % 7 == 0 ? true : false;
}

console.log(multiple3Or7(37));
console.log(multiple3Or7(21));
console.log(multiple3Or7(54));

console.log('-------------------------------------------------------------------------');

//25. LargestOfThree: Given three numbers as input return the largest number.

function largestOfThree(num1, num2, num3) {

    return (num1 > num2 && num1 > num3) ? num1 : num2 > num3 ? num2 : num3;

}

console.log('The largest number is : '+largestOfThree(31, 40, 30));

console.log('-------------------------------------------------------------------------');

// 26. DaysInMonth: Gven the number of the month and year as input (1 for January, 12 for December), return the number of days in it.

function daysInMonth(month, year) {

    let numOfDays;

    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            numOfDays = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            numOfDays = 30;
            break;
        case 2:
            if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))
                numOfDays = 29;
            else
                numOfDays = 28;
    }
    return numOfDays;

}

console.log('Number of days = '+daysInMonth(1, 2019));
console.log('Number of days = '+daysInMonth(2, 2020));

console.log('-------------------------------------------------------------------------');

// 27. ChangeCharCase : A method which accepts a char as intput and returns a char whose case if changed.

function changeCharCase(ch) {

    if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90)
        return String.fromCharCode(ch.charCodeAt(0) + 32);
    else
        return String.fromCharCode(ch.charCodeAt(0) - 32);
}

console.log(changeCharCase('S'));
console.log(changeCharCase('s'));

console.log('-------------------------------------------------------------------------');

// 28. isDigit : Given a char as input, return true if it is a digit (i.e between 0 to 9)

function isDigit(ch) {
    return ch.charCodeAt(0) >= 48 && ch.charCodeAt(0) <= 57;
}

console.log(isDigit('7'));

console.log('-------------------------------------------------------------------------');

/* 29. MiddleChar : Given three chars as input, return the char that would come in the middle if the chars were arranged in order. 
Note that > operator can be used for chars.*/

function middleChar(ch1, ch2, ch3) {
    if (ch1 < ch2 && ch1 > ch3)
        return ch1;
    else if (ch2 < ch1 && ch2 > ch3)
        return ch2;
    else
        return ch3;
}

console.log(middleChar('a', 'b', '1'));

console.log('-------------------------------------------------------------------------');

// 30. SameLastDigit : Given 2 non negative numbers a and b,return true if both of them have the same last digit.

function sameLastDigit(num1, num2) {
    return num1 % 10 == num2 % 10;
}
console.log(sameLastDigit(12, 22));
console.log(sameLastDigit(12, 24));

console.log('-------------------------------------------------------------------------');

// 31. AddForThird : Given three numbers a, b and c,return true if the sum of any two equals the third number.

function addForThird(num1, num2, num3) {

    return num1 + num2 == num3 || num1 + num3 == num2 || num2 + num3 == num1;

}

console.log(addForThird(50, 50, 100));

console.log('-------------------------------------------------------------------------');

/* 32. LotteryPrize: Jack bought a lottery ticket. He will get a reward based on the number of the lottery ticket. The rules are as follows – If the ticket number is divisible by 4,
he gets 6 – If the ticket number is divisible by 7,he gets 10 – If the ticket number is divisible by both 4 and 7,he gets 20 Otherwise, he gets 0. Given the
number of the lottery ticket as input, compute the reward he will receive.*/

function lotteryPrize(ticket_num) {
    return ticket_num % 4 == 0 ? 6 : ticket_num % 7 == 0 ? 10 : (ticket_num % 4 == 0 && ticket_num % 7 == 0) ? 20 : 0;
}

console.log(lotteryPrize(20));

console.log('-------------------------------------------------------------------------');

/* 33. LotteryPrize3: Jack bought 3 lottery tickets. He will get a reward based on the number of the lottery ticket. The rules are as follows – If the ticket number is divisible by 4,
he gets 6 – If the ticket number is divisible by 7,he gets 10 – If the ticket number is divisible by both 4 and 7,he gets 20 Otherwise, he gets 0. Given the
number of the 3 lottery ticket as input, compute the reward he will receive. In this problem define a function to compute the reward given the ticket number and use that function to calculate the total reward*/

function lotteryPrize3(ticket_num1, ticket_num2, ticket_num3) {
    return lotteryPrize(ticket_num1) + lotteryPrize(ticket_num2) + lotteryPrize(ticket_num3);
}

console.log(lotteryPrize3(20, 70, 30));

console.log('-------------------------------------------------------------------------');

// 34. SumLast3 : Given a number as input, return the sum of its last 3 digits.

function sumLast3(num) {
    let rem = 0;
    for (let i = 0; i < 3; i++) {
        rem = num % 10 + rem;
        num = parseInt(num / 10);
    }
    return rem;
}

console.log('Sum of last 3 digits are : '+sumLast3(343));

console.log('-------------------------------------------------------------------------');

/* 35 . Blackjack : Given 2 int values greater than 0, return whichever value is nearest to 21 without being greater than 21. 
Return -1 if the values are greater than 21.Also return -2 if both the values are same and less or equal to 21.*/

function blackjack(num1, num2) {

    return (num1 > 21 && num2 > 21) ? -1 : (num1 == num2 && num1 <= 21 && num2 <= 21) ? -2 : (num1 <= 21 && num2 <= 21) ? num1 : num2

}

console.log(blackjack(65, 65));
console.log(blackjack(18, 18));
console.log(blackjack(21, 18));

console.log('-------------------------------------------------------------------------');

// 36. Reverse3 : Given a 3 digit number as input, reverse it.

function reverse(num) {

    let rev = 0;
    for (let i = num; i > 0;) {
        rem = i % 10;
        rev = rev * 10 + rem;
        i = parseInt(i / 10);
    }
    return rev;
}

console.log('Reverse of the number is : '+reverse(344));

console.log('-------------------------------------------------------------------------');

/* 37. PerfectNumber: A perfect number is a positive integer that is equal to the sum of its factors.
Given a number n, the objective is find out whether it is a perfect number or not.*/

function isperfectNumber(num) {

    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i == 0) {
            sum = sum + i;
        }
    }
    return sum == num;

}

console.log(isperfectNumber(24));
console.log(isperfectNumber(6));

console.log('-------------------------------------------------------------------------');

// 38. A function accepts a number as input and returns a string filled with natural numbers as many as the input.

function naturalNumber(num) {

    let string = "";
    for (let i = 1; i < num; i++) {
        string += i + '\t';
    }

    return string;
}

console.log('Natural numbers from 1 to 10 are : '+naturalNumber(10));

console.log('-------------------------------------------------------------------------');

// 39. A function accepts a number as input and returns a string filled with random integers as many times as the input.

function randomNumber(num) {
    let string = "";
    for (let i = 1; i < num; i++) {
        string += parseInt(Math.random() * 20) + '\t';

    }
    return string;
}
console.log('The 10 Random numbers are: '+randomNumber(10));

console.log('-------------------------------------------------------------------------');

// 40. Write a function to generate even numbers from FROM to TO.

function evennum(from, to) {

    let string = "";
    for (let i = from; i <= to; i++) {
        if (isEven(i)) {

            string += i + '\t';
        }
    }

    return string;
}

console.log('Even numbers from 1 to 10 are : '+evennum(1, 10));

console.log('-------------------------------------------------------------------------');

// 41. Write a function to generate odd numbers from FROM to TO.

function oddnum(from, to) {

    let string = "";
    for (let i = from; i <= to; i++) {

        if (isOdd(i)) {

            string += i + '\t';
        }
    }

    return string;
}

console.log('Odd numbers from 1 to 10 are : '+oddnum(1, 10));

console.log('-------------------------------------------------------------------------');

// 42. Write a generate prime numbers between from and to

function genPrimes(from, to) {
    let string = "";
    for (var i = from; i <= to; i++) {
        if (isPrime(i)) {
            string += i + '\n';

        }
    }
    return string;
}

console.log('Prime numbers from 1 to 100 are :\n'+genPrimes(1, 100));

console.log('-------------------------END OF FUNCTION PROGRAMS-----------------------------------');
