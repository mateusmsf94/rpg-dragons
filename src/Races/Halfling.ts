import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static _numbersInstanceHalfling = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._numbersInstanceHalfling += 1;
  }

  public static createdRacesInstances(): number {
    return Halfling._numbersInstanceHalfling;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
