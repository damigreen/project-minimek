import { createReducer } from '../../common/utils/reducerUtils';

import orm from '../orm';
import { DATA_LOADED } from '../../features/tools/toolConstant';

const initialState = orm.getEmptyState();

export function loadData(state, payload) {
  // Create a Redux-ORM Session from our entities 'tables'
  const session = orm.session(state);

  // Get a reference to the correct version of the Pilot class for this session
  const { Pilot } = session;
  
  const { pilots } = payload;
  
  // Queue up creation commands for each pilot entry
  pilots.forEach(pilot => Pilot.parse(pilot))
  
  // apply the queue update and return the updated 'tables'
  return session.state;
}

// export default entitiesReducer()

export default createReducer(initialState, {
  [DATA_LOADED] : loadData
});
