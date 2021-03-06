import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Portal } from 'react-portal';

import ContextMenu from './ContextMenu';

import { selectContextMenu } from './contextMenuSelectors';
import { TestContextMenu } from './TestContextMenu'
import { PilotListItemMenu } from '../pilots/PilotList/PilotListItemMenu';

const menuType = {
  TestContextMenu,
  PilotListItemMenu,
};

export function contextMenuManagerMapState(state) {
  return {
    contextMenu : selectContextMenu(state),
  }
}

export class ContextMenuManager extends Component {
  render() {
    const { contextMenu } = this.props;
    const { show, location, type, menuArgs } = contextMenu;
    
    let menu = null;

    if(show) {
      let MenuComponent = menuType[type];

      if(MenuComponent) {
        menu = (
          <Portal isOpened={true}>
            <ContextMenu location={location}>
              <MenuComponent {...menuArgs} />
            </ContextMenu>
          </Portal>
        )
      }
    }

    return menu;
  }
}

export default connect(contextMenuManagerMapState)(ContextMenuManager);
