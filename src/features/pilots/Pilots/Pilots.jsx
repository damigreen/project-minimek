import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Grid,
    Segment,
    Header,
} from 'semantic-ui-react';

import PilotList from '../PilotList'
import PilotDetails from '../PilotDetails';

const pilots = [
  {
    name: 'Natasha Kerensky',
    rank: 'Captain',
    age: 52,
    gunnery : 2,
    piloting : 3,
    mechType : 'WHM-6R',
  }
]

export class Pilots extends Component {

  state = {
    pilots : pilots
  }
  
  render() {
    const {pilots} = this.state

    // use the first pilot as the 'current' one for display
    const currentPilot = pilots[0] || {};


    return (
        <Segment>
            <Grid>
                <Grid.Column width={10}>
                    <Header as="h3">Pilot List</Header>
                    <PilotList pilots={pilots} />
                </Grid.Column>
                <Grid.Column width={6}>
                  <Header as="h3">Pilot Details</Header>
                  <Segment>
                    <PilotDetails pilot={currentPilot} />
                  </Segment>
                </Grid.Column>
            </Grid>
        </Segment>
    );
  }
}

export default connect()(Pilots);
