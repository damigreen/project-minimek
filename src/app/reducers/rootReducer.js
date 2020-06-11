import { combineReducers } from 'redux';

import { reduceReducers } from '../../common/utils/reducerUtils';

import tabReducer from '../../features/tabs/tabReducer';
import unitInfoReducer from '../../features/unitInfo/unitInfoReducer';
import entitiesReducer from './entitiesReducer';
import pilotsReducer from '../../features/pilots/pilotsReducer';
import mechsReducer from '../../features/mechs/mechsReducer';
import editingEntitiesReducer from '../reducers/editingEntitiesReducer';
import modalReducer from '../../features/modals/modalReducer';
import contextMenuReducer from '../../features/contextMenu/contextMenuReducer';

import entityCrudReducer from '../../features/entities/entityReducer';
import editingFeatureReducer from '../../features/editing/editingReducer';


const combinedReducer = combineReducers({
  entities : entitiesReducer,
  editingEntities: editingEntitiesReducer,
  pilots: pilotsReducer,
  mechs: mechsReducer,
  unitInfo : unitInfoReducer,
  tabs : tabReducer,
  modals : modalReducer,
  contextMenu: contextMenuReducer,
});


const rootReducer = reduceReducers(
 combinedReducer,
 entityCrudReducer,
 editingFeatureReducer
);

export default rootReducer;
