import { TAB_SELECTED } from './tabConstants';

export function selectTab(tabName) {
    return {
        type: TAB_SELECTED,
        paylaod: {tabName}
    };
}