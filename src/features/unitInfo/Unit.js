import { Model, fk, attr, many } from 'redux-orm';

export default class Unit extends Model {
  // static modelName = "Unit";
  static get fields() {
    return {
      id : attr(),
      name : attr(),
      affiliation : fk('Faction'),
      color : attr(),
      lances : many('Lance'),
      pilots : many('Pilot'),
      mechs : many('Mech'),
    }
  }

  static parse(unitData) {
    const {Pilot, Mech, Lance} = this.session;

    const parseData = {
      ...unitData,
      pilots : unitData.pilots.map(pilotEntry => Pilot.parse(pilotEntry)),
      mechs : unitData.mechs.map(mechEntry => Mech.parse(mechEntry)),
      lances : unitData.lances.map(lanceEntry => Lance.parse(lanceEntry)),
    };

    return this.upsert(parseData);
  }
}

Unit.modelName = 'Unit';
