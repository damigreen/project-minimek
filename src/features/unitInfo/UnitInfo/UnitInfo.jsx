import React, { Component } from 'react';
import {
    Segment,
    Grid,
    Header,
} from 'semantic-ui-react';

import UnitInfoForm from './UnitInfoForm';
import UnitOrganizationTree from '../UnitOrganizationTree/UnitOrganizationTree';


class UnitInfo extends Component {
  render() {

    return (
      <Segment>
        <Grid>
          <Grid.Column width={10}>
            <Header as="h3">Units Table of Organization</Header>
            <Segment>
            <UnitOrganizationTree />
            </Segment>
          </Grid.Column>

          <Grid.Column width={6}>
            <Header as="h3">Edit Units</Header>
            <Segment>
            <UnitInfoForm />
            </Segment>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }

}

export default UnitInfo;
