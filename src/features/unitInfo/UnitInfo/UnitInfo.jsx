import React, { Component } from 'react';
import {
    Segment,
    Grid,
    Header,
} from 'semantic-ui-react';

import UnitInfoForm from './UnitInfoForm';
import UnitOrganizationTree from './UnitOrganizationTree'

class UnitInfo extends Component {
  render() {

    return (
      <Segment>
        <Grid>
          <Grid.Column width={10}>
            <Header as="h3">Units of Organization</Header>
            <UnitOrganizationTree />
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Column width={10}>
            <Header as="h3">Edit Units</Header>
            <UnitInfoForm />
          </Grid.Column>
        </Grid>

      </Segment>
    )
  }

}

export default UnitInfo;
