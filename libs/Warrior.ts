export class Warrior {
    constructor(
        private name: string,
        // public minHitPoints:number,
        private hitPoints: number,
        // public maxHitPoints:number,
        // public criticalHitPoints:number,
        private hp: number) {
    }

// setHitPoints():number{
//     function random(numbers) {
//         return numbers[Math.floor(Math.random() * numbers.length)];
//     }
//     const theHit = random([parseInt(this.minHitPoints, parseInt(this.hitPoints), parseInt(this.maxHitPoints), parseInt(this.criticalHitPoints))])
//
//     this.hitPoints = theHit;
// }

    setHp(hp: number): void {
        this.hp = hp;
    }

    getHp(): number {
        return this.hp;
    }

    getHitPoints(): number {
        return this.hitPoints;
    }

    getName(): string {
        return this.name;
    }

    levelUp(): void {
        this.hitPoints *= 1.1;
        this.hp *= 1.1;
    }
}

