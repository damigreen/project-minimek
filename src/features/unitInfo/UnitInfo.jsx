import React from 'react';
import {
    Form,
    Dropdown,
    Segment
} from 'semantic-ui-react';

const FACTIONS = [
    // fill the rest later
    {value : "lc", text : "Lyran Commonwealth"},
    {value : "wd", text : "Wolf's Dragoons"}
]

const UnitInfo = () => {

    return(
        <Segment attached="bottom">
            <Form sizee="large">
                <Form.Field name="name" width={6} >
                    <label>Unit Name</label>
                    <input placeholder="Name" value="Black Widow company" />
                </Form.Field>
                <Form.Field name="Affiliation" width={6} >
                    <label>Affiliation</label>
                    <Dropdown 
                        selection 
                        options={FACTIONS}
                        value="lc" />
                </Form.Field>
            </Form>
        </Segment>
    )
}

export default UnitInfo;

