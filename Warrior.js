class Warrior {
    constructor(name,
                // minHitPoints,
                hitPoints,
                // maxHitPoints,
                // criticalHitPoints,
                hp) {
        this.name = name;
        // this.minHitPoints = minHitPoints;
        this.hitPoints = hitPoints;
        // this.maxHitPoints = maxHitPoints;
        // this.criticalHitPoints = criticalHitPoints;
        this.hp = hp;
    }


    setHp(hp) {
        this.hp = hp;
    }

    getHp() {
        return this.hp;
    }

// setHitPoints(){
//     function random(numbers) {
//         return numbers[Math.floor(Math.random() * numbers.length)];
//     }
//     const theHit = random([parseInt(this.minHitPoints, parseInt(this.hitPoints), parseInt(this.maxHitPoints), parseInt(this.criticalHitPoints))])
//
//     this.hitPoints = theHit;
// }


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

module.exports = {Warrior}
