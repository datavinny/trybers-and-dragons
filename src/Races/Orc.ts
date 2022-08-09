import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  public static instance = 0;

  public constructor(
    name: string, 
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 74;
    Orc.instance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.instance;
  }
}

export default Orc;