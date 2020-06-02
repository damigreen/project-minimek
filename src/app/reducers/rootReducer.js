import { combineReducers } from 'redux';

import { reduceReducers } from '../../common/utils/reducerUtils';

import tabReducer from '../../features/tabs/tabReducer';
import unitInfoReducer from '../../features/unitInfo/unitInfoReducer';
import entitiesReducer from './entitiesReducer';
import pilotsReducer from '../../features/pilots/pilotsReducer';
import mechsReducer from '../../features/mechs/mechsReducer';

import entityCrudReducer from '../../features/entities/entityReducer';

const combinedReducer = combineReducers({
  entities : entitiesReducer,
  pilots: pilotsReducer,
  mechs: mechsReducer,
  unitInfo : unitInfoReducer,
  tabs : tabReducer
})


const rootReducer = reduceReducers(
 combinedReducer,
 entityCrudReducer
)

export default rootReducer;
