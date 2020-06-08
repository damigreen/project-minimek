import React, { Component } from 'react';
import { connect } from 'react-redux';

import TestModal from '../modals/testModal';
import ColorPickerDialog from '../../common/components/ColorPickerDialog';

const modalComponentLookUpTable = {
  TestModal,
  ColorPickerDialog,
}

const mapState = state => ({ currentModal : state.modals});

export class ModalManager extends Component {
  render() {
    const {currentModal} = this.props;

    const renderedModal = currentModal.map( (modalDescription, index) => {
      const {modalType, modalProps = {}} = modalDescription;
      const ModalComponent = modalComponentLookUpTable[modalType];

      return <ModalComponent {...modalProps} key={modalType + index} />
    })

    return <span>{renderedModal}</span>
  }  
}

export default connect(mapState)(ModalManager);
