import { combineReducers } from 'redux'

import tabReducer from '../../features/tabs/tabReducer';
import unitInfoReducer from '../../features/unitInfo/unitInfoReducer'
import entitiesReducer from './entitiesReducer'

const rootReducer = combineReducers({
  entities : entitiesReducer,
  unitInfo : unitInfoReducer,
  tabs : tabReducer
})

export default rootReducer;
