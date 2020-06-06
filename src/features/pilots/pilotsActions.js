import {
  editExistingItem,
  stopEditingItem,
} from '../../features/editing/editingActions'

import {
  PILOT_SELECT,
  PILOT_EDIT_START,
  PILOT_EDIT_STOP
} from './pilotsConstant';

import { selectCurrentPilot, selectIsEditingPilot } from './pilotsSelector';

export function selectPilot(pilotId) {
  return (dispatch, getState) => {
    const state = getState();
    
    const isEditing = selectIsEditingPilot(state);

    if(isEditing) {
      dispatch(stopEditingPilot())
    }

    dispatch({
      type : PILOT_SELECT,
      payload : {currentPilot: pilotId}
    })
  }
}

export function startEditingPilot(pilotID) {
  return (dispatch, getState) => {
    const currentPilot = selectCurrentPilot(getState());

    dispatch(editExistingItem('Pilot', currentPilot))
    dispatch({
      type: PILOT_EDIT_START
    });
  }
}

export function stopEditingPilot() {
  return (dispatch, getState) => {
    const currentPilot = selectCurrentPilot(getState());

    dispatch({
      type: PILOT_EDIT_STOP
    });
    dispatch(stopEditingItem('Pilot', currentPilot));
  }
}
