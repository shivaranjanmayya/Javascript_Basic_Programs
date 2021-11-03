var superHero1 = {
    name: 'Ironman',
    age: 40,
    power: 'armor suit',
    like: 'He is always ready to sacrifice',
    suit: function () {
        console.log(this.name + ' gets his superpowers by wearing ' + this.power);
    }

};
superHero1.suit();

var superHero2 = {
    name: 'Thor Ragnarok',
    age: 35,
    power: 'thunder',
    like: 'sense of loyalty',
    hammer: function () {
        console.log(this.name + ' is a God of ' + this.power);
    }
};
superHero2.hammer();

var superHero3 = {
    name: 'Doctor Strange',
    age: 60,
    power: 'magic',
    like: 'he uses spells and save a day',
    useSpells: function () {
        console.log(this.name + ' has a mastery of ' + this.power);
    }
};
superHero3.useSpells();



