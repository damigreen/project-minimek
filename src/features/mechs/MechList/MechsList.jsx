import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

import MechsListHeader from './MechsListHeader'
import MechsListRow from './MechsListRow';

export default class MechsList extends Component {

  render() {
    const {mechs = []} = this.props;
    // console.log(mechs)


    const mechRows = mechs.map(mech => (
      <MechsListRow mech={mech} key={mech.id} />
    ));

    return (
      <Table celled>

        <MechsListHeader />
        {mechRows}
      </Table>
    )
  }


}