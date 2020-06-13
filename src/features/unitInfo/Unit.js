import { Model, fk, attr, many } from 'redux-orm';

export default class Unit extends Model {
  // static modelName = "Unit";
  static get fields() {
    return {
      id : attr(),
      name : attr(),
      affiliation : attr(),
      color : attr(),
      pilots : many('Pilot'),
      mechs : many('Mech'),
    }
  }

  static parse(unitData) {
    const {Pilot, Mech} = this.session;

    const parseData = {
      ...unitData,
      pilots : unitData.pilots.map(pilotEntry => Pilot.parse(pilotEntry)),
      mechs : unitData.mechs.map(mechEntry => Mech.parse(mechEntry))
    }

    return this.upsert(parseData);
  }
}

Unit.modelName = 'Unit';
