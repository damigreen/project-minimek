import {createSelector} from "reselect";

export const selectTabs = state => {

    return state.tabs;
}

export const selectCurrentTab = createSelector(
    selectTabs,
    tabs => tabs.currentTab
);
