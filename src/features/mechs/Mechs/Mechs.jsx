import React, { Component } from 'react';
import {
    Segment,
    Grid,
    Header,
} from 'semantic-ui-react';

import MechList from '../MechList'
import MechDetails from '../MechDetails'

const mechs =[
  {
      id : 1,
      name : 'Warhammer',
      type : 'WHM-6R',
      weight : 70,
  }
] 

class Mechs extends Component {
    state = {
        mechs : mechs
    }

    render () {
        const {mechs} = this.state

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

export default Mechs;
