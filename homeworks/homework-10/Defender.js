import FootballPlayer from './FootballPlayer.js';

export  class Defender extends FootballPlayer {
    constructor(name, age, club, tackles = 0) {
        super(name, age, club, "Defender");
        this.tackles = tackles;
    }

    showTackles() {
        console.log(`${this.name} совершил ${this.tackles} отборов`);
    }

    setTackles(value) {
        this.tackles = value;
    }

    getTackles() {
        return this.tackles;
    }
};
