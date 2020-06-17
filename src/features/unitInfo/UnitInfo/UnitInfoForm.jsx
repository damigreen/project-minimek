import React, { Component} from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Dropdown,
  Segment,
} from 'semantic-ui-react';

import { selectCurrentUnitInfo } from '../unitInfoSelector';
import { updateUnitInfo, setUnitColor } from '../unitInfoActions';
import { showColorPicker } from '../../../common/components/ColorPicker/colorPickerAction';

import { getValueFromEvent } from '../../../common/utils/clientUtils';

import ColorPickerButton from '../../../common/components/ColorPicker/ColorPickerButton';

import { getEntitiesSession } from '../../entities/entitySelectors';


const mapState = (state) => {
  const session = getEntitiesSession(state);
  const { Faction } = session;

  const factions = Faction.all().toRefArray();

  const unitInfo = selectCurrentUnitInfo(state);

  return {
    factions,
    unitInfo,
  };
}


const actions = {
  updateUnitInfo,
  showColorPicker,
  setUnitColor
}

class UnitInfoForm extends Component {
  onAffiliationChanged = (e, result) => {
    const {name, value} = result;

    const newValues = { [name] : value};
    this.props.updateUnitInfo(newValues);
  }

  onNameChanged = (e) => {
    const newValues = getValueFromEvent(e)
    this.props.updateUnitInfo(newValues);
  }

  
  // Handler to display the color picker dialog
  onColorClicked = () => {
    const onColorPickedAction = setUnitColor();
    
    this.props.showColorPicker(this.props.unitInfo.color, onColorPickedAction);
  }

  render() {
    const {unitInfo, factions} = this.props;
    const isDisplayUnit = Boolean(unitInfo);
    let name="", affiliation=null, color=null;

    if(isDisplayUnit) {
      ({name, affiliation, color} = unitInfo);
    }

    const displayFactions = factions.map(faction => {
      return {
        value : faction.id,
        text : faction.name,
      };
    })

    return(
        <Segment attached="bottom">
            <Form size="large">
              <Form.Group>
                <Form.Field name="name">
                    <label>Unit Name</label>
                    <input
                      name="name"
                      placeholder="Name"
                      value={name}
                      onChange={this.onNameChanged}
                      />
                </Form.Field>
              </Form.Group>

              <Form.Group>
                <Form.Field name="Affiliation" width={12} >
                    <label>Affiliation</label>
                    <Dropdown 
                        name="affiliation"
                        selection 
                        options={displayFactions}
                        value={affiliation}
                        onChange={this.onAffiliationChanged}
                    />
                </Form.Field>
                <Form.Field name="color">
                  <label>Color</label>
                  <ColorPickerButton
                    value={color}
                    onClick={this.onColorClicked}
                    disabled={!isDisplayUnit}
                  />
                </Form.Field>
              </Form.Group>

            </Form>
        </Segment>
    )
  }
}

export default connect(mapState, actions)(UnitInfoForm);
