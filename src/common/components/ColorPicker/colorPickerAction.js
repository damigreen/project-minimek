import _ from 'lodash';

import {
  openModal
} from '../../../features/modals/modalActions';

export function showColorPicker(initialColor, onColorPickedAction) {
  // Define props we want to "pass" to the ColorPicker dialog,
  // includes the body of the action that should be dispatches when
  // the dialog is used to select a color.
  const colorPickerProps = {
    color : initialColor,
    onColorPicked : onColorPickedAction,
  }

  return openModal('ColorPickerDialog', colorPickerProps);
}

export function colorSelected(color, actionToDispatch) { 
  
  return (dispatch) => {
    if(actionToDispatch) {
      const newAction = _.cloneDeep(actionToDispatch);
      newAction.payload.color = color;

      dispatch(newAction);
    }
  }
}
