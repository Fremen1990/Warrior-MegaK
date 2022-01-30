  class Warrior {
    constructor(name, hitPoints, hp) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.hp = hp;
    }


    setHp(hp) {
        this.hp = hp;
    }

    getHp() {
        return this.hp;
    }

    getHitPoints() {
        return this.hitPoints;
    }

    getName() {
        return this.name;
    }

    levelUp() {
        this.hitPoints *= 1.1;
        this.hp *= 1.1;
    }
}

module.exports={Warrior}
