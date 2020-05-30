import React, { Component } from 'react';
import {
    Segment,
    Grid,
    Header,
} from 'semantic-ui-react';

import MechList from '../MechList'
import MechDetails from '../MechDetails'


export default class Mechs extends Component {
  
  render () {

    return (
      <Segment>
        <Grid>
          <Grid.Column width={10}>
            <Header as="h3">Mechs List</Header>
              <MechList />
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
