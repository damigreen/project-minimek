import React, { Component } from 'react';
import { connect } from 'react-redux';

import TestModal from './testModal';
import ColorPickerDialog from '../../common/components/ColorPicker/ColorPickerDialog';

// A table containing a list of the Modal components
const modalComponentLookUpTable = {
  TestModal,
  ColorPickerDialog,
}

const mapState = state => ({ currentModal : state.modals});

export class ModalManager extends Component {
  render() {
    const {currentModal} = this.props;
    console.log(currentModal)

    const renderedModal = currentModal.map( (modalDescription, index) => {
      const {modalType, modalProps = {}} = modalDescription;
      const ModalComponent = modalComponentLookUpTable[modalType];

      return <ModalComponent {...modalProps} key={modalType + index} />
    })

    return <span>{renderedModal}</span>
  }  
}

export default connect(mapState)(ModalManager);
