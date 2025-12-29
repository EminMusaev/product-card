import FootballPlayer from './FootballPlayer.js';

export  class Midfielder extends FootballPlayer {
    constructor(name, age, club, assists = 0) {
        super(name, age, club, "Midfielder");
        this.assists = assists;
    }

    showAssists() {
        console.log(`${this.name} отдал ${this.assists} ассистов`);
    }

    setAssists(value) {
        this.assists = value;
    }

    getAssists() {
        return this.assists;
    }
};
