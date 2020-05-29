import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react';

import MechsListHeader from './MechsListHeader'
import MechsListRow from './MechsListRow';

import orm from '../../../app/orm/';

import { selectCurrentMech } from '../mechSelectors';
import { selectMech } from '../mechsActions'

const mapState = (state) => {
  const session = orm.session(state.entities);

  const {Mech} = session;

  const mechs = Mech.all().toModelArray().map(mechModel => mechModel.getId())

  const currentMech = selectCurrentMech(state);

  return {mechs, currentMech}
}


const actions = {
  selectMech,
}


class MechsList extends Component {

  render() {
    const { mechs = [], currentMech, selectMech } = this.props;
    
    const mechRows = mechs.map(mechID => (
      <MechsListRow
        mechID={mechID}
        key={mechID}
        onMechClick={selectMech}
        selected={mechID === currentMech}
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

export default connect(mapState, actions)(MechsList);
