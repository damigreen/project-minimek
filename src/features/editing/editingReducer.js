import {
  createEntity,
  updateEntity,
  deleteEntity,
} from '../entities/entityReducer';

import {
  EDIT_ITEM_EXISTING,
  EDIT_ITEM_UPDATE,
  EDIT_ITEM_STOP,
} from './editingConstants';

import { createReducer } from '../../common/utils/reducerUtils';

import { selectEntities } from '../entities/entitySelectors';
import { selectEditingEntities } from './editingSelectors';
import {
  readEntityData,
  updateEditingEntitiesState,
} from './editingUtils';


// Duplicate Model instance for the 'draft data'
export function copyEntity(sourceEntities, destinationEntities, payload){
  const { itemID, itemType } = payload;

  const newItemAttributes = readEntityData(sourceEntities, itemType, itemID);
  const creationPayload = { itemType, itemID, newItemAttributes };

  const updatedEntities = createEntity(destinationEntities, creationPayload);
  return updatedEntities;
}



export function editItemExisting(state, payload) {
  const entities = selectEntities(state);
  const editingEntities = selectEditingEntities(state);

  const updateEditingEntities = copyEntity(entities, editingEntities, payload);

  return updateEditingEntitiesState(state, updateEditingEntities);
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



const editingFeatureReducer = createReducer({}, {
  [EDIT_ITEM_STOP] : editItemStop,
  [EDIT_ITEM_EXISTING] : editItemExisting,
  [EDIT_ITEM_UPDATE] : editItemUpdate,
});

export default editingFeatureReducer;
