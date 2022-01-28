import Warrior from './Warrior.js'
import Arena from './Arena.js'

const fighter1 = new Warrior('Baba Yaga', 9, 120);
const fighter2 = new Warrior('Yanosik', 7, 140);

const arena = new Arena(fighter1, fighter2);

let winner;
do {
    winner = arena.fight();
} while (winner === null);

winner.levelUp();
console.log(winner.getName(), 'is a winner!');




// USER ENTRY  TO DEFINE THE FIGHTER
// import prompt from 'prompt';
// prompt.start();
//
// const userWarrior ={
//     name:'',
//     hitPoints:0,
//     hp:0,
// }
//
// const AiWarrior ={
//     name:'',
//     hitPoints:0,
//     hp:0,
// }
//
//  function setUser(){
//
//     prompt.get(['name', 'hitPoints', 'hp'], function (err, result) {
//         if (err) {
//             return onErr(err);
//         }
//         userWarrior.name = name;
//         userWarrior.hitPoints = hitPoints;
//         userWarrior.hp = hp;
//
//         console.log('Your warrior stats:');
//         console.log('  name: ' + result.name);
//         console.log('  hitPoints: ' + result.hitPoints);
//         console.log('  hp: ' + result.hp);
//     });
//     function onErr(err) {
//         console.log(err);
//         return 1;
//     }
//
// }
