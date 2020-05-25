import { connect } from 'react-redux';

import TabBar from './TabBar';

import { selectCurrentTab } from './tabSelectors';
import { selectTab } from './tabAction';

const mapState = (state) => {
    const currentTab = selectCurrentTab(state);
    
    return { currentTab }
}

// dispatch 
const actions = { onTabClick : selectTab };

export default connect(mapState, actions)(TabBar);
