import { Model, fk, attr } from 'redux-orm';

export default class Pilot extends Model {
  static get fields() {
    return {
      id : attr(),
      name : attr(),
      rank : attr(),
      gunnery : attr(),
      piloting : attr(),
      age : attr(),
      mech : fk('Mech')
    }
  }

  static parse(pilotData) {
    return this.upsert(pilotData);
  }

  toJSON() {
    return {...this.ref}
  }

  updateFrom(otherPilot) {
    this.update(otherPilot.ref);
  }
}

Pilot.modelName = 'Pilot';
