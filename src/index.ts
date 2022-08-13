import Battle, { PVE, PVP } from "./Battle";
import Character from "./Character";
import Dragon from "./Dragon";
import Monster from "./Monster";

const player1 = new Character('Tank');
player1.levelUp();
player1.levelUp();
player1.levelUp();
const player2 = new Character('DPS');
const player3 = new Character('Healer');
cr
const monster1 = new Monster(30, 3);
const monster2 = new Dragon(50);

const pvp = new PVP(player2, player3)
const pve = new PVE(player1, [monster1, monster2])

const runBattles = (battles: Battle[]) => {
  battles.forEach(battle => {
    battle.fight();
  });
};

export { player1, player2, player3, pvp, pve, runBattles };