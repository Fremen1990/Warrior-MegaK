import {Warrior} from "./Warrior";

enum ActiveWarrior {
    First,
    Second,
}

export class Arena {

    activeWarrior: ActiveWarrior = ActiveWarrior.Second;

    constructor(
        public warrior1: Warrior,
        public warrior2: Warrior) {
        this.activeWarrior = 2;
    }


    fight(): Warrior | null {


        const attacker = this.activeWarrior === ActiveWarrior.First ? this.warrior1 : this.warrior2;
        const attacked = this.activeWarrior ===  ActiveWarrior.First? this.warrior2 : this.warrior1;

        const attackingHitPoints = attacker.getHitPoints();
        const attackedOldHp = attacked.getHp();
        const attackedNewHp = attackedOldHp - attackingHitPoints;

        console.log(attacker.getName(), 'is attacking', attacked.getName(), 'and how he has', attackedNewHp, 'hp');

        attacked.setHp(attackedNewHp);

        this.activeWarrior = this.activeWarrior === ActiveWarrior.First
            ? ActiveWarrior.Second
            : ActiveWarrior.First;
        /**
         if (this.activeWarrior === 1) {
        this.activeWarrior = 2;
      } else {
        this.activeWarrior = 1;
      }
         */

        if (attackedNewHp <= 0) {
            console.log(attacked.getName(), 'goes to Valhalla');
            return attacker;
        }

        return null;
    }
}

