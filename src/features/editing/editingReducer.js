import {
  createEntity,
  updateEntity,
  deleteEntity,
} from '../entities/entityReducer';
import {
  EDIT_ITEM_EXISTING,
  EDIT_ITEM_NEW,
  EDIT_ITEM_UPDATE,
  EDIT_ITEM_STOP,
  EDIT_ITEM_APPLY,
  EDIT_ITEM_RESET,
} from './editingConstants';
import { createReducer } from '../../common/utils/reducerUtils';
import { selectEntities } from '../entities/entitySelectors';
import { selectEditingEntities } from './editingSelectors';
// Return data for the editingEntities fields in the Redux-ORM session 
import { readEntityData, updateEditingEntitiesState, updateEntitiesState } from './editingUtils';
import orm from '../../app/orm/'
import { getModelByType } from '../../common/utils/modelUtils';
import { create } from 'lodash';


// Duplicate Model instance for the 'draft data'
export function copyEntity(sourceEntities, destinationEntities, payload){
  const { itemID, itemType } = payload;

  // get the json object of the requested data
  const newItemAttributes = readEntityData(sourceEntities, itemType, itemID);

  const creationPayload = { itemType, itemID, newItemAttributes };

  const updatedEntities = createEntity(destinationEntities, creationPayload);
  return updatedEntities;
}


export function updateEditedEntity(sourceEntities, destinationEntities, payload) {
  // Reading the 'work in progress' data
  const readSession = orm.session(sourceEntities);
  
  const { itemType, itemID } = payload;

  // Look up the model instance for the requested item
  const model = getModelByType(readSession, itemType, itemID);

  let writeSession = orm.session(destinationEntities);

  const ModelClass = writeSession[itemType];

  if(ModelClass.idExists(itemID)) {
    // Look up the original model instance from the top item
    const existingItem = ModelClass.withId(itemID);

    if (existingItem.updateFrom) {
      // Each model class should know how to properly update itself and its
      // relations from another model of the same type.  Ask the original model to
      // update itself based on the "work-in-progress" model, which queues up a
      // series of immutable add/update/delete actions internally
      existingItem.updateFrom(model);
    }
  }
  else {
    const itemContents = model.toJSON();
    ModelClass.parse(itemContents);
  }

  // Imutably apply the changes to generate our new 'current' relational data
  const updatedEntities = writeSession.state;
  return updatedEntities;
}



export function editItemExisting(state, payload) {
  const entities = selectEntities(state);

  const editingEntities = selectEditingEntities(state);
  
  const updateEditingEntities = copyEntity(entities, editingEntities, payload);

  return updateEditingEntitiesState(state, updateEditingEntities);
}


export function editItemNew(state, payload) {
  const editingEntities = selectEditingEntities(state);

  const updatedEditingEntities = createEntity(editingEntities, payload);
  return updateEditingEntitiesState(state, updatedEditingEntities);
}


export function editItemUpdate(state, payload) {
  const editingEntities = selectEditingEntities(state);

  const updatedEditingEntities = updateEntity(editingEntities, payload);
  return updateEditingEntitiesState(state, updatedEditingEntities);
}


export function editItemStop(state, payload) {
  const editingEntities = selectEditingEntities(state);
  
  const updatedEditingEntities =  deleteEntity(editingEntities, payload);
  return updateEditingEntitiesState(state, updatedEditingEntities);
}


export function editItemApply(state, payload) {
  const editingEntities = selectEditingEntities(state);
  const entities = selectEntities(state);

  const updatedEntities = updateEditedEntity(editingEntities, entities, payload);

  return updateEntitiesState(state, updatedEntities);
}


export function editItemReset(state, payload) {
  const stateWithoutItem = editItemStop(state, payload);
  const stateWithCurrentItem = editItemExisting(stateWithoutItem, payload);

  return stateWithCurrentItem;
}



const editingFeatureReducer = createReducer({}, {
  [EDIT_ITEM_STOP] : editItemStop,
  [EDIT_ITEM_EXISTING] : editItemExisting,
  [EDIT_ITEM_NEW] : editItemNew,
  [EDIT_ITEM_UPDATE] : editItemUpdate,
  [EDIT_ITEM_APPLY] : editItemApply,
  [EDIT_ITEM_RESET] : editItemReset,
});

export default editingFeatureReducer;
