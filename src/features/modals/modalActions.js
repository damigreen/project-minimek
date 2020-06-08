import {
  MODAL_OPEN,
  MODAL_CLOSE,
} from './modalConstants';

export function openModal(modalType, modalProps) {
  return {
    type : MODAL_OPEN,
    payload : { modalType, modalProps, }
  };
}

export function closeModal(modalType, modalProps) {
  return {
    type : MODAL_CLOSE,
  };
}


