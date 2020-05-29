import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Segment,
    Grid,
    Header,
} from 'semantic-ui-react';

import MechList from '../MechList'
import MechDetails from '../MechDetails'

import orm from '../../../app/orm/';

import { selectMech } from '../mechsActions'


const mapState = (state) => {
  const session = orm.session(state.entities);

  const {Mech} = session;

  const mechs = Mech.all().toModelArray().map(mechModel => {
    const mech = {
      // copy the data from the plain JS Object
      ...mechModel.ref,
      // Providee a default empty  object for the
      mechType: {},
    };
    
    if(mechModel.type) {
      // Replace the default object with a copy of the relation's data
      mech.mechType = {...mechModel.type.ref}
    }
    return mech;
  })
  
  return {mechs}
}

const actions = {
  selectMech
}


class Mechs extends Component {
  
  render () {
    const {mechs=[], currentMech, selectMech} = this.props;


    return (
      <Segment>
        <Grid>
          <Grid.Column width={10}>
            <Header as="h3">Mechs List</Header>
              <MechList
                mechs={mechs}
                onMechClick={selectMech}
                currentMech={currentMech} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
              <MechDetails />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default connect(mapState, actions)(Mechs);
