import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  public static instance = 0;

  public constructor(
    name: string, 
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling.instance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.instance;
  }
}

export default Halfling;