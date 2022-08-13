import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    private _player: Fighter,
    private _player2: Fighter,
  ) {
    super(_player);
  }

  fight(): number {
    do {
      this._player.attack(this._player2);
      this._player2.attack(this._player);
    } while (this._player.lifePoints > 0 && this._player2.lifePoints > 0); 
    return super.fight();
  }
}

export default PVP;