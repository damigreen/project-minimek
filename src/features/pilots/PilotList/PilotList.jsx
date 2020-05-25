import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';


import PilotListHeader from './PilotListHeader'
import PilotListRow from './PilotListRow'

class PilotList extends Component {
    render() {
        const {pilots} = this.props;
        // console.log(this.props)

        const pilotRows = pilots.map(pilot => (
            <PilotListRow pilot={pilot} key={pilot.name} />
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