import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { selectPilot } from '../pilotsActions';
import { hideContextMenu } from '../../contextMenu/contextMenuActions';
import { deleteEntity } from '../../entities/entityActions';


const actions = {
  selectPilot,
  hideContextMenu,
  deleteEntity,
};


export class PilotListItemMenu extends Component {
  constructor(props) {
    super(props);
    this.onSelectClicked = this.onSelectClicked.bind(this);
    this.onDeleteClicked = this.onDeleteClicked.bind(this);
  }

  onSelectClicked () {
    this.props.selectPilot(this.props.pilotId);
    this.props.hideContextMenu();
  }
  
  onDeleteClicked () {
    this.props.deleteEntity('Pilot', this.props.pilotId)
    this.props.hideContextMenu();
  }

  render() {
    return (
      <Menu vertical>
        <Menu.Header>Pilot: {this.props.text}</Menu.Header>

        <Menu.Menu>
          <Menu.Item onClick={this.onSelectClicked }>Select Pilot</Menu.Item>
          <Menu.Item onClick={this.onDeleteClicked}>Delete Pilot</Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default connect(null, actions)(PilotListItemMenu);
