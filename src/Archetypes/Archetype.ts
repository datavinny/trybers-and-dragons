import { EnergyType } from '../Energy';

abstract class Archetype {
  private _special = 0;
  private _cost = 0;

  public constructor(private _name: string) {
  }

  abstract get energyType(): EnergyType;
  
  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this.special;
  }

  public get cost(): number {
    return this.cost;
  }
}

export default Archetype;