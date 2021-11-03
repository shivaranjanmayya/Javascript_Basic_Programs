let song = {
    songName: 'asdf',
    artistDetails: {
        name: 'Adelo',
        age: 124,
        address: {
            street: 'The usual street',
            city: 'Delhi',
            state: 'Dl'
        }
    },
    year: 2021,
    play: function () {
        console.log(this.songName + ' is playing');

    }
}

console.log(song.artistDetails);
console.log(song.artistDetails.address.city);