import React from 'react';
import { connect } from 'react-redux';

import {
  Form,
  Dropdown
} from 'semantic-ui-react';

import orm from '../../../app/orm/';

import { selectCurrentPilot } from '../pilotsSelector';

const RANKS = [
  {value: "Private", text : "Private"},
  {value: "Corporal", text : "Corporal"},
  {value: "Sergeant", text : "Sergeant"},
  {value: "Lieutenant", text : "Lieutenant"},
  {value: "Captain", text : "Captain"},
  {value: "Major", text : "Major"},
  {value: "Colonel", text : "Colonel"},
];

const MECHS = [
  {value: 'WHM-6R', text : 'Warhammer WHM-6R'}
];

const mapState = state => {
  let pilot;

  const session = orm.session(state.entities);

  const {Pilot} = session;

  const currentPilot = selectCurrentPilot(state);
  
  if (Pilot.idExists(currentPilot)) {
    pilot = Pilot.withId(currentPilot);
  }

  return {pilot}
}

const PilotDetails = ({pilot={}}) => {
  
  const {
    name = "",
    rank = "",
    age = "",
    gunnery = "",
    piloting = "",
    mechType = "",
  } = pilot

  return (
    <Form size="large">
      <Form.Field name="name" width={16}>
        <label>Name</label>
        <input
          placeholder="name"
          value={name}
          disabled={true}
          />
      </Form.Field>
      <Form.Field name="rank" width={16}>
        <label>Rank</label>
        <Dropdown
          fluid
          selection
          options={RANKS}
          value={rank}
          disabled={true}
          />
      </Form.Field>
      <Form.Field name="age" width={6}>
        <label>Age</label>
        <input
          placeholder="Age"
          value={age}
          disabled={true}
          />
      </Form.Field>
      <Form.Field name="gunnery" width={6}>
        <label>Gunnery</label>
        <input
          value={gunnery}
          disabled={true}
          />
      </Form.Field>
      <Form.Field name="piloting" width={6}>
        <label>Piloting</label>
        <input
          value={piloting}
          disabled={true}
          />
      </Form.Field>
      <Form.Field name="mech" width={16}>
        <label>Mech</label>
        <Dropdown
          fluid
          selection
          options={MECHS}
          value={mechType}
          disabled={true}
          />
      </Form.Field>
    </Form>       
  )
}

export default connect(mapState)(PilotDetails);
