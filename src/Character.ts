import Archetype, { Mage } from './Archetypes';
import Energy, { EnergyType } from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomNumber from './utils/randomNumbers';

export default class Character implements Fighter {
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _dexterity: number;

  constructor(name: string) {
    this._dexterity = getRandomNumber(1, 10);
    this._race = new Elf(name, this.dexterity);
    this._archetype = new Mage(name);

    this._lifePoints = this._race.maxLifePoints;
    this._strength = getRandomNumber(1, 10);
    this._defense = getRandomNumber(1, 10);
    this._energy = {
      amount: getRandomNumber(1, 10),
      type_: this._archetype.energyType,
    };
    this._maxLifePoints = this._race.maxLifePoints / 2;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get energy(): Energy {
    return { ...this._energy };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomNumber(1, 10);
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._strength += getRandomNumber(1, 10);
    this._defense += getRandomNumber(1, 10);
    this._dexterity += getRandomNumber(1, 10);
    this._energy.amount = 10;
  }

  receiveDamage(attackPoints: number): number {
    const damage = Math.max(attackPoints - this.defense, 1);
    this._lifePoints = Math.max(this._lifePoints - damage, -1);
    
    return this.lifePoints;
  }
  
  get energyType(): EnergyType {
    return this.archetype.energyType;
  }
}