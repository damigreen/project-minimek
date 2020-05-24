import { Model } from 'redux-orm';

export default class Pilot extends Model {
  static parse(pilotData) {

    return this.create(pilotData)
  }
}

Pilot.modelName = 'Pilot';
