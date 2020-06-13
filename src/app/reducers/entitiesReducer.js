import { createReducer } from '../../common/utils/reducerUtils';

import orm from '../orm';
import { DATA_LOADED } from '../../features/tools/toolConstant';

const initialState = orm.getEmptyState();

export function loadData(state, payload) {
  // Create a Redux-ORM Session from our entities 'tables'
  const session = orm.session(state);

  // Get a reference to the correct version of the Pilot class for this session
  const { Unit, Pilot, Mech, MechDesign } = session;
  
  const { unit, designs } = payload;

  [Unit, Pilot, Mech, MechDesign].forEach(modelType => {
    modelType.all().toModelArray().forEach(model => model.delete());
  })

  // Imutably update the Unit session state as we insert items
  Unit.parse(unit);

  designs.forEach(design => MechDesign.parse(design));
  
  // Apply the queue update
  // Return the new 'tables' object containing the updates
  return session.state;
}


export default createReducer(initialState, {
  [DATA_LOADED] : loadData
});
