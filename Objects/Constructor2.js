function Song(id, name, duration) {
        this.id = id,
        this.name = name,
        this.duration = duration,
        this.completeDetails = function () {
            return this.id + " " + this.name + " " + this.duration;
        },
        this.play = function () {
            console.log(this.name + " Song is playing");
        }
}

var mySong = new Song(123, "Jana Gana Mana", 1);
console.log(mySong.completeDetails());
mySong.play();

mySong.pause = function () {
    console.log(this.name + " has been paused");
}
mySong.pause();