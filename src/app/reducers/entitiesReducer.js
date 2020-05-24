import { createReducer } from '../../common/utils/reducerUtils';

import orm from '../orm';
import { DATA_LOADED } from '../../features/tools/toolConstant';

const initialState = orm.getEmptyState();

export function loadData(state, payload) {
  // Create a redux orm from our entities 'tables'
  const session = orm.session(state);

  // Get a reference to the correct version of the Pilot class for this session
  const { Pilot } = session;
  
  const { pilots } = payload;
  
  // Queue up creation commands for each pilot entry
  pilots.forEach(pilot => Pilot.parse(pilot))
  
  return session.state;
}


// export default entitiesReducer()

export default createReducer(initialState, {
  [DATA_LOADED] : loadData
});
