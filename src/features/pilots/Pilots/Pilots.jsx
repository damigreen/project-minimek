import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    Grid,
    Segment,
    Header,
} from 'semantic-ui-react';

import PilotList from '../PilotList'
import PilotDetails from '../PilotDetails';

import { selectPilot } from '../pilotsActions';
import { selectCurrentPilot } from '../pilotsSelector';

import orm from '../../../app/orm/';


const mapState = state => {
  // Create a Redux-ORM Session from our 'entities' slice, 
  // which contains the 'tables' from each model types
  const session = orm.session(state.entities);

    // Retrieve the model class that we need.  Each Session
    // specifically "binds" model classes to itself, so that
    // updates to model instances are applied to that session.
    // These "bound classes" are available as fields in the sesssion.
  const {Pilot} = session;

  // Query the session for all Pilot instances.
  // The QuerySet that is returned from all() can be used to
  // retrieve instances of the Pilot class, or retrieve the
  // plain JS objects that are actually in the store.
  // The toRefArray() method will give us an array of the
  // plain JS objects for each item in the QuerySet.
  const currentPilot = selectCurrentPilot(state);


  const pilots = Pilot.all().toModelArray().map(pilotModel => {
    // Access the underlying plain JS object using the "ref" field,
    // and make a shallow copy of it
    const pilot = {
      ...pilotModel.ref
    };

    // Look up the associated Mech instance using the foreign-key
    // field that we defined in the Pilot Model class
    const {mech} = pilotModel;
    
    // If there actually is an associated mech, include the
    // mech type's ID as a field in the data passed to the component
    if(mech && mech.type) {
      pilot.mechType = mech.type.id;
      
    }

    return pilot;
  })

  // return array of all pilot obhects, as a prop
  return {pilots, currentPilot}
}

const actions = {
  selectPilot,
}


export class Pilots extends Component {

  render() {
    const {pilots = [], selectPilot, currentPilot} = this.props;

    // only displays the selected pilot
    const currentPilotEntry = pilots.find(pilot => pilot.id === currentPilot)

    return (
        <Segment>
            <Grid>
                <Grid.Column width={10}>
                    <Header as="h3">Pilot List</Header>
                    <PilotList 
                      pilots={pilots}
                      onPilotClicked={selectPilot}
                      currentPilot={currentPilot} />
                </Grid.Column>
                <Grid.Column width={6}>
                  <Header as="h3">Pilot Details</Header>
                  <Segment>
                    <PilotDetails pilot={currentPilotEntry} />
                  </Segment>
                </Grid.Column>
            </Grid>
        </Segment>
    );
  }
}

export default connect(mapState, actions)(Pilots);
