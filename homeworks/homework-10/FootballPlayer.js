export default class FootballPlayer {
    constructor(name, age, club, position) {
        if (new.target === FootballPlayer) {
            throw new Error("Cannot instantiate abstract class FootballPlayer directly");
        }
        this.name = name;
        this.age = age;
        this.club = club;
        this.position = position;
    }

    showInfo() {
        console.log(`${this.name}, ${this.age}, ${this.club}, ${this.position}`);
    }

    setClub(newClub) {
        this.club = newClub;
    }

    getPosition() {
        return this.position;
    }
};