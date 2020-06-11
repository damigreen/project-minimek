import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Segment,
  Button,
} from 'semantic-ui-react';

import { loadUnitData } from '../toolActions';
import { openModal } from '../../modals/modalActions';
import { showContextMenu } from '../../contextMenu/contextMenuActions';

const actions = {
  loadUnitData,
  openModal,
  showContextMenu,
}

class Tools extends Component {
  constructor(props) {
    super(props)
    this.onOpenModalClicked = this.onOpenModalClicked.bind(this);
    this.onOpenTestModalClicked = this.onOpenTestModalClicked.bind(this);
    this.onShowContextMenuClicked = this.onShowContextMenuClicked.bind(this);
  }

  onShowContextMenuClicked () {
    this.props.showContextMenu(600, 200, 'TestContextMenu', {text: 'Blah'});
  }

  onOpenModalClicked () {
    this.props.openModal('ColorPickerDialog');
  }
  
  onOpenTestModalClicked () {
    this.props.openModal('TestModal', {counter : 1});
  }

  render() {
    const { loadUnitData } = this.props;
  
    return (
      <Segment attached="bottom">
        <Button onClick={loadUnitData}>Reload Unit Data</Button>
        <Button primary onClick={this.onOpenModalClicked}>Show Color Picker</Button>
        <Button secondary onClick={this.onOpenTestModalClicked}>Show Test Modal</Button>
        <Button secondary onClick={this.onShowContextMenuClicked}>Show Test Context Menu</Button>

      </Segment>
    )
  }
}

export default connect(null, actions)(Tools);
