import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  public static instance = 0;

  public constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger.instance += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.instance;
  }
}

export default Ranger;