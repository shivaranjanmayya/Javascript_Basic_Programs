/*
Write a Clock() constructor for dealing with the daytime represented by hours, minutes, and seconds. Your constructor must have the following features:
Three properties for the hours (range 0 - 23), minutes (range 0 - 59), and seconds (range 0 - 59).
A function called setClock() with one parameter seconds since midnight (to be converted into the time value in hours, minutes, and seconds as above).
Getters to get hours, minutes & seconds.
Setter to set hours, minutes & seconds.
function tick() with no parameters that increments the time stored in a Clock object by one second.
function addClock() accepting an object of Clock as a parameter. The function should add the time represented by the parameter object to the time represented in the current object.
Add an function called now() which should return a String representation of the Clock object in the form "(hh:mm:ss)", for example "(03:02:34)".
Add an function tickDown() which decrements the time stored in a Clock object by one second.
*/
function Clock(hours, minutes, seconds) {

    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;

    this.tick = function () {
        this.seconds++;
        if (this.seconds == 60) {
            this.minutes++;
            this.seconds = 0;

        }
        if (this.minutes == 60) {
            this.hours++;
            this.minutes = 0;
        }
        if (this.hours == 13) {
            this.hours = 1;

        }

    }

    this.getHours = function () {
        return this.hours;
    },
        this.getMinutes = function () {
            return this.minutes;
        },
        this.getSeconds = function () {
            return this.seconds;
        },
        this.setHours = function () {
            this.hours = hours;
        },
        this.setMinutes = function () {
            this.minutes = minutes;
        },
        this.setSeconds = function () {
            this.seconds = seconds;
        }

    this.setClock = function (seconds) {

        this.hours = parseInt(seconds / 3600);
        this.minutes = parseInt((seconds - (this.hours * 3600)) / 60);
        this.seconds = parseInt(seconds - ((this.hours * 3600) + (this.minutes * 60)));

    },
        this.printClock = function () {

            console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
        },
        this.resetTime = function () {
            this.hours = 0;
            this.minutes = 0;
            this.seconds = 0;
        },
        this.addClock = function (clock1) {
            this.hours = this.hours + clock1.hours;
            this.minutes = this.minutes + clock1.minutes;
            this.seconds = this.seconds + clock1.seconds;
        },
        this.now = function () {
            console.log(this.hours + ":" + this.minutes + ":" + this.seconds);
        },

        this.tickDown = function () {
            this.seconds--;
            if (this.seconds == 0) {
                this.minutes--;
                this.seconds = 59; 
            }
            if (this.minutes == 0) {
                this.hours--;
                this.minutes = 59;
            }
            if (this.hours == 13) {
                this.hours = 1;
            }

        }
};

let clock1 = new Clock(12, 60, 59);
let clock2 = new Clock(1, 1, 1);
clock1.tick();
clock2.tickDown();


//clock1.resetTime();
//clock1.setClock(10000);

clock1.printClock();
clock2.printClock();

//clock1.addClock(clock2);
//clock1.now();
//clock2.now();



