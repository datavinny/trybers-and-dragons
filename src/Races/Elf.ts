import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  public static instance = 0;

  public constructor(
    name: string, 
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 99;
    Elf.instance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return this.instance;
  }
}

export default Elf;