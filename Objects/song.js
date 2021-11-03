let song1 = {
    artistName: 'Shreya Ghoshal',
    songName: 'Ondu Malebillu',
    released: 2017,

    playSong: function () {
        console.log('Name of the song: ' + this.songName);
    },
    play: function () {
        console.log(this.songName + ' playing....')
    }
};

song1.playSong();
song1.play();

let song2 = {

    artistName: 'S. Janaki, S. P. Balasubrahmanyam',
    songName: 'Naguva Nayana',
    released: 1976,

    playSong: function () {
        console.log('Name of the song: ' + this.songName);
    },
    play: function () {
        console.log(this.songName + ' playing.....')
    }
};

song2.playSong();
song2.play();


