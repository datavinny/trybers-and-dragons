import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  public static instance = 0;

  public constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.instance += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return this.instance;
  }
}

export default Necromancer;