import FootballPlayer from './FootballPlayer.js';

export  class Goalkeeper extends FootballPlayer {
    constructor(name, age, club, dryMatches = 0) {
        super(name, age, club, "Goalkeeper");
        this.dryMatches = dryMatches;
    }

    showDryMatches() {
        console.log(`${this.name} ${this.dryMatches} сухих матчей`);
    }

    setDryMatches(value) {
        this.dryMatches = value;
    }

    getDryMatches() {
        return this.dryMatches;
    }
};
