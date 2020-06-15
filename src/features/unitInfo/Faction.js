import { Model, attr } from 'redux-orm';

export default class Faction extends Model {
  static get fields() {
    return {
      id : attr(),
      name : attr(),
    };
  }

  static parse(factionData) {
    return this.upsert(factionData);
  }
}

Faction.modelName = 'Faction';
