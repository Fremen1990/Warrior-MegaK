import {Warrior} from './libs/Warrior';
import {Arena} from './libs/Arena';

const enemies = require('./enemies.json')


type Enemy = {
    enemyId: string;
    id: number,
    name: string,
    minHitPoints: number,
    hitPoints: number,
    maxHitPoints: number,
    criticalHitPoints: number,
    hp: number
}

// USER ENTRY  TO DEFINE THE FIGHTER
const prompt = require('prompt');
prompt.start();


console.log("----------------------------------------------------")
console.log("         Prepare your warrior:        ")
console.log("----------------------------------------------------")

prompt.get(['name', 'hitPoints', 'hp'], async function (err: Error, result: Enemy) {
    if (err) {
        return onErr(err);
    }


    console.log("----------------------------------------------------")
    console.log("         Choose your enemy(by ID) : ")
    console.log("----------------------------------------------------")


    let n = 0;
    const enemiesList: [] = await enemies.enemies.forEach((enemy: Enemy) => console.log("Enemy" +
        " name: ", ++n, enemy.name))
    await console.log(enemiesList)


    prompt.get(['enemyId'], function (err: Error, enemyResult: Enemy) {
        if (err) {
            return onErr(err);
        }


        const enemyByUser: Enemy = enemies.enemies.find(
            (enemy: Enemy) => enemy.id === parseInt(enemyResult.enemyId)
        )

        console.log("Your enemy is: \n", enemyByUser, "\n")

        const fighter1 = new Warrior(result.name, result.hitPoints, result.hp);
        const fighter2 = new Warrior(enemyByUser.name, enemyByUser.hitPoints, enemyByUser.hp);

        const arena = new Arena(fighter1, fighter2);

        let winner: Warrior | null ;
        do {
            winner = arena.fight();
        } while (winner === null);

        winner.levelUp();
        console.log("\n -------------------------------------------------------------------")
        console.log(winner.name, 'is a winner! and still have: ', winner.hp.toFixed(), " health points" +
            " 😎 !!!\n");
        console.log("---------------------------------------------------------------------- \n")


    })

});

function onErr(err: Error) {
    console.log(err);
    return 1;
}

