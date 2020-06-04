import orm from '../../app/orm';
import { getModelByType } from '../../common/utils/modelUtils';

export function updateEditingEntitiesState(state, updatedEditingEntities) {
  return {
    ...state,
    editingEntities : updatedEditingEntities,
  };
}

export function updateEntitiesState(state, updatedEntities) {
  return {
    ...state,
    entities : updatedEntities,
  };
}

export function readEntityData(state, itemType, itemID) {
  const readSession = orm.session(state);

  // Look up the model instance for the requested item
  const model = getModelByType(readSession, itemType, itemID);
  const data = model.toJSON();

  return data;
}
