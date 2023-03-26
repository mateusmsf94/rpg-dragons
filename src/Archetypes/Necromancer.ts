import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _necromancerInstances: number;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this._necromancerInstances = this._necromancerInstances
      ? this._necromancerInstances + 1
      : 1;
    return this._necromancerInstances;
  }
}
