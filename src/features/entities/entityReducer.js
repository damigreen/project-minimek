import {
  ENTITY_UPDATE,
  ENTITY_DELETE,
  ENTITY_CREATE
} from './entityConstants';

import { createConditionalSliceReducer } from '../../common/utils/reducerUtils';

import orm from '../../app/orm/';

export function updateEntity(state, payload) {  
  const { itemType, itemID, newItemAttributes } = payload;

  const session = orm.session(state);
  const ModelClass = session[itemType];


  let newState = state;

  if(ModelClass.idExists(itemID)) {
    const modelInstance = ModelClass.withId(itemID);

    modelInstance.update(newItemAttributes)

    newState = session.state;
  }

  return newState;
}

export function deleteEntity(state, payload) {  
  const { itemType, itemID } = payload;

  const session = orm.session(state);
  const ModelClass = session[itemType];

  let newState = state;

  if(ModelClass.idExists(itemID)) {
    const modelInstance = ModelClass.withId(itemID);
    
    modelInstance.delete();

    // Imutably apply the updates and return the new entities structure
    newState = session.state;
  }

  return newState;
}


export function createEntity(state, payload) {
  const { itemType, newItemAttributes } = payload;

  const session = orm.session(state);
  const ModelClass = session[itemType];

  ModelClass.parse(newItemAttributes);

  const newState = session.state;

  return newState;
}

const entityHandlers = {
  [ENTITY_UPDATE] : updateEntity,
  [ENTITY_DELETE] : deleteEntity,
  [ENTITY_CREATE] : createEntity,
}

const entityCrudFeatureReducer = createConditionalSliceReducer("entities", entityHandlers);

export default entityCrudFeatureReducer;
