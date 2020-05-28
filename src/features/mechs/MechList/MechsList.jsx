import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

import MechsListHeader from './MechsListHeader'
import MechsListRow from './MechsListRow';

export default class MechsList extends Component {

  render() {
    const { mechs = [], onMechClick } = this.props;
    
    const mechRows = mechs.map(mech => (
      <MechsListRow
        mech={mech}
        key={mech.id}
        onMechClick={onMechClick}
         />
    ));

    return (
      <Table celled>

        <MechsListHeader />
        {mechRows}
      </Table>
    )
  }


}