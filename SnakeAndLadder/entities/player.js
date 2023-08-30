module.exports = class Player {
    constructor(name) {
        this.name = name;
        this.position = 0;
    }

    move(steps) {
        this.position += steps;
    }
}