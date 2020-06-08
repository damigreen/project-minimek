import React, { Component } from 'react';
import { connect } from 'react-redux';

import TestModal from '../modals/testModal';

const modalComponentLookUpTable = {
  TestModal
}

const mapState = state => ({ currentModal : state.modals});

export class ModalManager extends Component {
  render() {
    const {currentModal} = this.props;

    let renderedModal;

    if(currentModal) {
      const { modalType, modalProps = {} } = currentModal;
      const ModalComponent = modalComponentLookUpTable[modalType];

      renderedModal = <ModalComponent {...modalProps} />
    }

    return <span>{renderedModal}</span>
  }
}

export default connect(mapState)(ModalManager);
