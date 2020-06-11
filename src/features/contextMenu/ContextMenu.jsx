import React, { Component } from 'react';
import { connect } from 'react-reduc';

import AbsolutePosition from '../../common/components/AbsolutePosition';

import { hideContextMenu } from './contextMenuActions'


const actions = {
  hideContextMenu,
};

export class ContextMenu extends Component {
  constructor(props) {
    super(props);

    this.handleClickOutside = this.handleClickOutside.bind(this);
  };

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.addEventListener('click', this.handleClickOutside, true)
  }

  handleClickOutside (e) {
    if(!this.node || this.node.contains(e.target)) {
      return this.props.hideContextMenu();
    }
  }

  render () {
    const { location } = this.props;

    return (
      <AbsolutePosition
      left={location.x + 2}
      right={location.y}
      className='contextMenu'
      nodeRef={node => this.node = node}
      >
        {this.props.children}
      </AbsolutePosition>
    )
  }
}

export default connect(null, actions)(ContextMenu);
