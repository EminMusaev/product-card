import FootballPlayer from './FootballPlayer.js';

export  class ForwardPlayer extends FootballPlayer {
    constructor(name, age, club, goals = 0) {
        super(name, age, club, "Forward");
        this.goals = goals;
    }

    showGoals() {
        console.log(`${this.name} забил ${this.goals} голов за карьеру`);
    }

    setGoals(value) {
        this.goals = value;
    }

    getGoals() {
        return this.goals;
    }
};