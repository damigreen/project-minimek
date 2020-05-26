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

class Mechs extends Component {
  
  render () {
    const {mechs=[]} = this.props;
    const currentMech = mechs[0] || {}

    return (
      <Segment>
        <Grid>
          <Grid.Column width={10}>
            <Header as="h3">Mechs List</Header>
              <MechList mechs={mechs} />
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
              <MechDetails mech={currentMech} />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default connect(mapState)(Mechs);
