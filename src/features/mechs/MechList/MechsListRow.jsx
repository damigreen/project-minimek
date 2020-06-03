import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

import { getWeightClass } from '../mechSelectors';

import { getEntitiesSession } from '../../entities/entitySelectors';


const mapState = (state, ownProps) => {
  const session = getEntitiesSession(state);
  const {Mech} = session;

  let mech;

  if(Mech.idExists(ownProps.mechID)) {
    const mechModel = Mech.withId(ownProps.mechID)

    mech = {
      // Copy the data from the plain JS object
      ...mechModel.ref,
      // Provide a default object with a copy of the relations's data
      mechType : {}
    }

    if(mechModel.type) {
      mech.mechType = {...mechModel.type.ref }
    }
  }
  
  return {mech}
}


const MechsListRow = ({ mech = {}, onMechClick, selected }) => {
  const {
    id = null,
    type = '',
    mechType = {},
  } = mech;

  const {
    name = '',
    weight = '',
  } = mechType;

  const weightClass = getWeightClass(weight);


  return (
      <Table.Row onClick={() => onMechClick(id)} active={selected}>
        <Table.Cell>
          {id}
        </Table.Cell>
        <Table.Cell>
          {name}
        </Table.Cell>
        <Table.Cell>
          {type}
        </Table.Cell>
        <Table.Cell>
          {weight}
        </Table.Cell>
        <Table.Cell>
          {weightClass}
        </Table.Cell>
      </Table.Row>
  )
}

export default connect(mapState)(MechsListRow);
