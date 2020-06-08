import { Model, attr } from 'redux-orm'

export default class MechDesign extends Model {
  static get fields() {
    return {
      id : attr(),
      name : attr(),
      weight : attr(),
    }
  }
  
  static parse(designData) {
    return this.upsert(designData);
  }

  toJSON() {
    return {...this.ref}
  }

  updateform(otherDesign) {
    this.update(otherDesign)
  }
}
MechDesign.modelName = 'MechDesign';
