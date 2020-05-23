import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Form,
    Dropdown,
    Segment
} from 'semantic-ui-react';

import { selectUnitInfo } from '../unitInfoSelector';

const FACTIONS = [
    // fill the rest later
    {value : "lc", text : "Lyran Commonwealth"},
    {value : "wd", text : "Wolf's Dragoons"}
]

const mapState = state => ({
  unitInfo : selectUnitInfo(state)
})

class UnitInfo extends Component {

  render() {
    const {unitInfo} = this.props;
    const {name, affiliation} = unitInfo;

    console.log(this.props);

    return(
        <Segment attached="bottom">
            <Form sizee="large">
                <Form.Field name="name" width={6} >
                    <label>Unit Name</label>
                    <input placeholder="Name" value={name} />
                </Form.Field>
                <Form.Field name="Affiliation" width={6} >
                    <label>Affiliation</label>
                    <Dropdown 
                        selection 
                        options={FACTIONS}
                        value={affiliation} />
                </Form.Field>
            </Form>
        </Segment>
    )
  }
}

export default connect(mapState)(UnitInfo);

