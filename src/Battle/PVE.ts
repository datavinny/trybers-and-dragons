import Fighter from "../Fighter";
import Monster from "../Monster";
import Battle from "./Battle";

class PVE extends Battle {
  constructor(private _player: Fighter, private _monsters: Monster[]) {
    super(_player);
  }

  fight(): number {
    const results = this._monsters.map(monster => {
      do {
        this._player.attack(monster);
        monster.attack(this._player);
      } while (this._player.lifePoints > 0 && monster.lifePoints > 0); 
      return super.fight();
    })
    const win = results.every((element: number) => element === 1);
    return win === false ? -1 : 1;
  }
};

export default PVE;