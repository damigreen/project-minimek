import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';
import { connect } from 'react-redux';

import PilotListHeader from './PilotListHeader'
import PilotListRow from './PilotListRow'

import { selectCurrentPilot } from '../pilotsSelector';
import { selectPilot } from '../pilotsActions'

import { getEntitiesSession } from '../../entities/entitySelectors';


const mapState = (state) => {
  // Create a Redux-ORM Session from the entities slice, which
  // contains the 'table' for each model class.
  const session = getEntitiesSession(state)


  // Retreive the model class that is needed. Each Session
  // specifically "binds" model classes to itself, so that
  // updates to model instances are applied to that session.
  // These "bound classes" are available as fields in the sesssion.
  const {Pilot} = session; 

  // Query the sessions for all instances.
  // The Queryset returned from the all() can be used to 
  // retreive instances of the pilot class, or receive the plain
  // JS object that are in the store

  // The toModels modifiers will let us map over Model instances
  // for each entry rather than the plain JS object

  // Extract the list of IDs for each Pilot entry
  const pilots = Pilot.all().toModelArray().map(pilotModel => pilotModel.getId());

  const currentPilot = selectCurrentPilot(state);

  // return the list of IDs and the current pilot ID as props
  return {pilots, currentPilot};
}


const actions = {
  selectPilot
}


class PilotList extends Component {
    render() {
        const {pilots, selectPilot, currentPilot} = this.props;
        
        const pilotRows = pilots.map(pilotID => (
            <PilotListRow
               key={pilotID}
               pilotID={pilotID}
               onPilotClicked={selectPilot}
               selected={pilotID === currentPilot} />
        ))

        return (
          <Table celled>
            <PilotListHeader />
            <Table.Body>
              {pilotRows}
            </Table.Body>
          </Table>
        )
    }
}

export default connect(mapState, actions)(PilotList);
