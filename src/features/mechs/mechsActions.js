import { MECH_SELECT } from './mechsConstants';

export function selectMech(mechId) {
  return {
    type: MECH_SELECT,
    payload: { currentMech: mechId }
  }
}
