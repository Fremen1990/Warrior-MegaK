const {Warrior} = require('./Warrior.js');
const {Arena} = require('./Arena.js')

const enemies = require('./enemies.json')

// USER ENTRY  TO DEFINE THE FIGHTER
const prompt = require('prompt');
prompt.start();


console.log("----------------------------------------------------")
console.log("         Prepare your warrior:        ")
console.log("----------------------------------------------------")

    prompt.get(['name', 'hitPoints', 'hp'], async function (err, result) {
        if (err) {
            return onErr(err);
        }


        console.log("----------------------------------------------------")
        console.log("         Choose your enemy(by ID) : ")
        console.log("----------------------------------------------------")


        let n = 0;
        const enemiesList = await  enemies.enemies.forEach(enemy => console.log("Enemy name: ", ++n, enemy.name))
        await console.log(enemiesList)


        prompt.get(['enemyId'], await function (err, enemyResult) {
            if (err) {
                return onErr(err);
            }


            const enemyByUser =  enemies.enemies.find(
                enemy=> enemy.id === parseInt(enemyResult.enemyId)
            )

             console.log("Your enemy is: \n", enemyByUser ,"\n")

            const fighter1 = new Warrior(result.name, result.hitPoints, result.hp);
            const fighter2 = new Warrior(enemyByUser.name, enemyByUser.hitPoints, enemyByUser.hp);

            const arena = new Arena(fighter1, fighter2);

            let winner;
            do {
                winner = arena.fight();
            } while (winner === null);

            winner.levelUp();
            console.log("\n -------------------------------------------------------------------")
            console.log( winner.getName(), 'is a winner! and still have: ', winner.hp.toFixed(), " health points" +
                " 😎 !!!\n");
            console.log("---------------------------------------------------------------------- \n")


        })

    });

    function onErr(err) {
        console.log(err);
        return 1;
    }

