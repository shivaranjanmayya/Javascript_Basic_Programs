//Create a constructor called Song() with at least 5 properties and 2 behaviours and instantiate it 3 times.

/**
 * 
 * @param {Number} id 
 * @param {string} songName 
 * @param {Number} duration 
 * @param {String} artistName 
 * @param {Number} yearOfRelease 
 */
function Song(id, songName, duration, artistName, yearOfRelease) {
    this.id = id,
        this.songName = songName,
        this.duration = duration,
        this.artistName = artistName,
        this.yearOfRelease = yearOfRelease,
        this.completeDetails = function () {
            return this.id + " " + this.songName + " " + this.duration + " " + this.artistName + " " + this.yearOfRelease;
        },
        this.play = function () {
            console.log(this.songName + " Song is playing");
        }
        
}

var mySong = new Song(123, "Jana Gana Mana", 1, "Rabindranath Tagore", 1919);
console.log(mySong.completeDetails());
mySong.play();

var mySong = new Song(124, "Nannavale Nannavale", 2, "Sonu Nigam", 2020);
console.log(mySong.completeDetails());
mySong.play();

var mySong = new Song(125, "matthe maleagide", 3, "Shreya Ghoshal, Sonu Nigam", 2017);
console.log(mySong.completeDetails());
mySong.play();

