import { Model, attr, fk } from 'redux-orm';

export default class Mech extends Model {

  // Redux ORM fields getter property
  static get fields() {
    return {
      id : attr(),
      type : fk('MechDesign'),
      pilot : fk('Pilot')
    }
  }

  static parse(mechData) {
    return this.upsert(mechData);
  }

  toJSON() {
    return {...this.ref};
  }

  updateFrom(otherMech) {
    this.update(otherMech.ref)
  }
}
Mech.modelName = 'Mech';
