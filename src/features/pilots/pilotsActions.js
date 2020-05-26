import { PILOT_SELECT } from './pilotsConstant';

export function selectPilot(pilotId) {
  return {
    type : PILOT_SELECT,
    payload: { currentPilot: pilotId }
  };
}
