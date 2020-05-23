import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Segment,
  Button,
} from 'semantic-ui-react';

import { loadUnitData } from '../toolActions';
// import { displayData } from '../toolReducer'

// const mapState = state => ({
//   data: displayData(state)
// });

const actions = {loadUnitData}

class Tools extends Component {
  render() {
    const {loadUnitData} = this.props;
  
    const data = this.props;
    console.log(data)

    return (
      <Segment attached="bottom">
        <Button onClick={loadUnitData}>Reload Unit Data</Button>
        {/* {data.unit.name} */}
      </Segment>
    )
  }
}

export default connect(null, actions)(Tools);
