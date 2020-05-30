import { createReducer } from '../../common/utils/reducerUtils';

import {
  PILOT_SELECT,
  PILOT_EDIT_START,
  PILOT_EDIT_STOP
} from './pilotsConstant';

const initialState = {
  currentPilot : null,
  isEditing: false,
};


export const selectPilot = (state, payload) => {

  const prevSelectedPilot = state.currentPilot;
  const newSelectedPilot = payload.currentPilot;

  const isSamePilot = prevSelectedPilot === newSelectedPilot;

  return {
    ...state,
    // Deselect entirely if it's a second click on the same pilot,
    // otherwise go ahead and select the one that was clicked
    currentPilot : isSamePilot ? null : newSelectedPilot,
    // Any time we select a diffent pilot, we stop editing
    isEditing: false,
  }
}

export const startEditingPilot = (state, payload) => {
  return {
    ...state,
    isEditing: true,
  };
}

export const stopEditingPilot = (state, payload) => {
  return {
    ...state,
    isEditing: false,
  };
}

export default createReducer(initialState, {
  [PILOT_SELECT] : selectPilot,
  [PILOT_EDIT_START] : startEditingPilot,
  [PILOT_EDIT_STOP] : stopEditingPilot,
})
