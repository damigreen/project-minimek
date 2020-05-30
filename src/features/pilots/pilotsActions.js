import { PILOT_SELECT,
  PILOT_EDIT_START,
  PILOT_EDIT_STOP
} from './pilotsConstant';


export function selectPilot(pilotId) {
  return {
    type : PILOT_SELECT,
    payload: { currentPilot: pilotId }
  };
}

export function startEditingPilot() {
  return {
    type: PILOT_EDIT_START,
  }
}

export function stopEditingPilot() {
  return {
    type: PILOT_EDIT_STOP,
  }
}