import { combineReducers } from 'redux';

import tabReducer from '../../features/tabs/tabReducer';
import unitInfoReducer from '../../features/unitInfo/unitInfoReducer';
import entitiesReducer from './entitiesReducer';
import pilotsReducer from '../../features/pilots/pilotsReducer';

const rootReducer = combineReducers({
  entities : entitiesReducer,
  pilots: pilotsReducer,
  unitInfo : unitInfoReducer,
  tabs : tabReducer
})

export default rootReducer;
