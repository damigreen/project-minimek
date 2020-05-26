import { createSelector } from 'reselect'

const selectPilots = (state) => state.pilots;

export const selectCurrentPilot = createSelector(
  selectPilots,
  pilots => pilots.currnetPilot
);
