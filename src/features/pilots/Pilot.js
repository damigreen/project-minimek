import { Model, fk, attr } from 'redux-orm';

const defaultAttributes = {
  name : 'New Pilot',
  rank : 'Private',
  gunnery : 4,
  piloting : 5,
  age : 27
};

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

  static generate(newAttributes = {}) {
    const combinedAttributes = {
      ...defaultAttributes,
      ...newAttributes,
    };

    return this.create(combinedAttributes);
  }

  toJSON() {
    return {...this.ref}
  }

  updateFrom(otherPilot) {
    this.update(otherPilot.ref);
  }
}

Pilot.modelName = 'Pilot';
