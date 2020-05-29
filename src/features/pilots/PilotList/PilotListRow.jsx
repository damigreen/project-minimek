import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';
import _ from 'lodash';

import orm from '../../../app/orm/';

const mapState = (state, ownProps) => {
  const session = orm.session(state.entities);
  const {Pilot} = session;

  let pilot = {};

  if(Pilot.idExists(ownProps.pilotID)) {
    const pilotModel = Pilot.withId(ownProps.pilotID);

    // Access the plain JS object using the 'ref' field,
    // and make a shallow copy of it.
    pilot = {
      ...pilotModel.ref
    };

    // Look up the pilotModel.mech.mechType
    // Just in case the relational fields are null.
    const {mech} = pilotModel;

    // If there is an associated mech, Include the 
    // mech type's ID as a field in the data passes to the component.
    if(mech && mech.type){
      pilot.mechType = mech.type.id;
    }
  }

  return {pilot};
}

const PilotListRow = ({ pilot={}, onPilotClicked=_.noop, selected }) => {

  const {
      id = null,
      name = "",
      rank = "",
      age = "",
      gunnery = "",
      piloting = "",
      mechType = "",
  } = pilot;

    return (
      <Table.Row onClick={() => onPilotClicked(id)} active={selected}>
        <Table.Cell>
          {name}
        </Table.Cell>
        <Table.Cell>
          {rank}
        </Table.Cell>
        <Table.Cell>
          {age}
        </Table.Cell>
        <Table.Cell>
          {gunnery} / {piloting}
        </Table.Cell>
        <Table.Cell>
          {mechType}
        </Table.Cell>

      </Table.Row>
  )
}

export default connect(mapState)(PilotListRow);
