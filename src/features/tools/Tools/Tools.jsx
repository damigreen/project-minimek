import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Segment,
  Button,
} from 'semantic-ui-react';

import { loadUnitData } from '../toolActions';

const actions = {loadUnitData}

class Tools extends Component {
  render() {
    const {loadUnitData} = this.props;
  
    const data = this.props;

    return (
      <Segment attached="bottom">
        <Button onClick={loadUnitData}>Reload Unit Data</Button>
        {/* {data.unit.name} */}
      </Segment>
    )
  }
}

export default connect(null, actions)(Tools);
