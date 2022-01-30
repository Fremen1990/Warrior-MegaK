const {Warrior} = require('./Warrior.js');
const {Arena} = require('./Arena.js')

// USER ENTRY  TO DEFINE THE FIGHTER
const prompt = require('prompt');
prompt.start();
//

    prompt.get(['name', 'hitPoints', 'hp'], function (err, result) {
        if (err) {
            return onErr(err);
        }

        const userWarrior = {
            name: '',
            minHitPoints: 0,
            maxHitPoints:0,
            cryticalHitPoints:0,
            hp: 0,
        }

        const AiWarrior = {
            name: '',
            hitPoints: 0,
            hp: 0,
        }



        userWarrior.name = result.name;
        userWarrior.hitPoints = result.hitPoints;
        userWarrior.hitPoints = result.hitPoints;
        userWarrior.hitPoints = result.hitPoints;
        userWarrior.hp = result.hp;

        console.log("----------------------------------------------------")
        console.log( '\n Your warrior stats: \n');
        console.log('  name: ' + result.name);
        console.log('  hitPoints: ' + result.hitPoints);
        console.log('  hp: ' + result.hp,"\n");


        const fighter1 = new Warrior(result.name, result.hitPoints, result.hp);
        const fighter2 = new Warrior('Yanosik', 7, 140);

        const arena = new Arena(fighter1, fighter2);

        let winner;
        do {
            winner = arena.fight();
        } while (winner === null);

        winner.levelUp();
        console.log("\n",winner.getName(), 'is a winner! and still have: ', winner.hp.toFixed(), " health points" +
            " 😎 !!!\n");

        console.log("Winner Stats: " , userWarrior.name, userWarrior.hp)

    });

    function onErr(err) {
        console.log(err);
        return 1;
    }

