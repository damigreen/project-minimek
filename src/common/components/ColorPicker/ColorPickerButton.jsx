import React from  'react';

import { Button } from 'semantic-ui-react';

const ColorPickerButton = ({ value, onClick, disabled=false }) => {

  return (
    <Button
      type="button"
      style={{ padding: "4px", margin: 0 }}
      disabled={disabled}
      onClick={onClick}
    >
      <div
        style={{
          width : 30,
          height : 20,
          backgroundColor : value,
        }}
      />
    </Button>
  )
}

export default ColorPickerButton;
