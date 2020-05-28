import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';


import PilotListHeader from './PilotListHeader'
import PilotListRow from './PilotListRow'

class PilotList extends Component {
    render() {
        const {pilots, onPilotClicked, currentPilot} = this.props;

        const pilotRows = pilots.map(pilot => (
            <PilotListRow
               key={pilot.name}
               pilot={pilot}
               onPilotClicked={onPilotClicked}
               selected={pilot.id === currentPilot} />
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

export default PilotList;