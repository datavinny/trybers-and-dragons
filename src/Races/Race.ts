abstract class Race {
  private _name: string;
  private _dexterity: number;

  public constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  static createdRacesInstances(): void {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;

  public get name():string {
    return this._name;
  }

  public get dexterity():number {
    return this.dexterity;
  }
}

export default Race;