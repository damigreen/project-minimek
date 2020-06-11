import { createReducer } from '../../common/utils/reducerUtils';

import {
  PILOT_SELECT,
  PILOT_EDIT_START,
  PILOT_EDIT_STOP
} from './pilotsConstant';
import { ENTITY_DELETE } from '../entities/entityConstants';

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
  }
}

export function startEditingPilot(state, payload) {
  return {
    ...state,
    isEditing: true,
  };
}

export function stopEditingPilot(state, payload) {
  return {
    ...state,
    isEditing: false,
  };
}

export function stopEditingIfDeleted(state, payload) {
  const { currentPilot } = state;
  const { itemType, itemID } = payload;

  if(itemType === 'Pilot' && itemID === currentPilot) {
    return {
      ...state,
      isEditing : false,
      currenttPilot : null
    }
  }

  return state;
}

export default createReducer(initialState, {
  [PILOT_SELECT] : selectPilot,
  [PILOT_EDIT_START] : startEditingPilot,
  [PILOT_EDIT_STOP] : stopEditingPilot,
  [ENTITY_DELETE] : stopEditingIfDeleted,
})
