import { Model, attr, many } from  'redux-orm';

export class Lance extends Model {
  static get fields() {
    return {
      id : attr(),
      name : attr(),
      pilots : many('Pilot')
    }
  }

  static parse(lanceData) {
    return this.upsert(lanceData);
  }
}

Lance.modelName = 'Lance';
