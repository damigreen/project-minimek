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

  toJSON() {
    return {...this.ref}
  }

  updateFrom(otherPilot) {
    this.update(otherPilot.ref);
  }
}

Pilot.modelName = 'Pilot';
