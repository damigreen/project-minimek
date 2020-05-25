import { Model, fk } from 'redux-orm';

export default class Pilot extends Model {
  static get fields() {
    return {
      mech : fk('Mech')
    }
  }

  static parse(pilotData) {
    return this.create(pilotData);
  }
}

Pilot.modelName = 'Pilot';
