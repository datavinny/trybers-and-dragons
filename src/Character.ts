import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter, { SimpleFighter } from './Fighter';
import getRandomArbitrary from './utils';
import Race, { Elf } from './Races';

class Character implements Fighter {
  name: string;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _energy: Energy;

  constructor(
    name: string,
    private _race: Race = new Elf('dark elf', getRandomArbitrary(1, 10)),
    private _archetype: Archetype = new Mage('novice'),
  ) {
    this.name = name;
    this._strength = getRandomArbitrary(1, 10);
    this._defense = getRandomArbitrary(1, 10);
    this._dexterity = getRandomArbitrary(1, 10);
    // this._race = new Elf(name, this._dexterity);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomArbitrary(1, 10),
    };
  }

  // public set race(race: Race) {
  //   this._race = race;
  // }

  // public set archetype(archetype: Archetype) {
  //   this._archetype = archetype;
  // }

  public get race(): Race {
    return this._race;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }  

  public get lifePoints(): number {
    return this._lifePoints;
  }
    
  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  public get energy(): Energy {
    const energy = { ...this._energy };
    return energy;
  }
  
  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    // const damage = Math.abs(this._defense - attackPoints);
    if (damage > 0) {
      this._lifePoints -= damage;
      if (this._lifePoints <= 0) {
        this._lifePoints = -1;
      }
    }
    return this._lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._strength += getRandomArbitrary(1, 10);
    this._defense += getRandomArbitrary(1, 10);
    this._dexterity += getRandomArbitrary(1, 10);
    this._energy.amount = 10;
    // const newEnergyAmount = this._energy.amount + getRandomArbitrary(1, 10);
    // if (newEnergyAmount > 10) {
    //   this._energy.amount = 10;
    // }
    this._maxLifePoints += getRandomArbitrary(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
  }

  public special(): void {
    this._energy.amount = 7;
    this._lifePoints = this._maxLifePoints;
    console.log(`${this.name} used FULL RESTORE!`);
  }
}

export default Character;