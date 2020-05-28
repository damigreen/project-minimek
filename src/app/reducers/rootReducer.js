import { combineReducers } from 'redux';

import tabReducer from '../../features/tabs/tabReducer';
import unitInfoReducer from '../../features/unitInfo/unitInfoReducer';
import entitiesReducer from './entitiesReducer';
import pilotsReducer from '../../features/pilots/pilotsReducer';
import mechsReducer from '../../features/mechs/mechsReducer';

const rootReducer = combineReducers({
  entities : entitiesReducer,
  pilots: pilotsReducer,
  mechs: mechsReducer,
  unitInfo : unitInfoReducer,
  tabs : tabReducer
})

export default rootReducer;
