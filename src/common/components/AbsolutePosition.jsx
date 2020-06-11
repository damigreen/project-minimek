import React from 'react';
import PropTypes from 'prop-types';

const AbsolutePosition = (props) => {
  const { children, nodeRef } = props;

  const style = {
    position : 'absolute',
    top : 400,
    bottom : 100,
    left : props.left,
    right : props.right,
    width : props.width,
  };

  return (
    <div style={style} className={props.className} ref={nodeRef}>
      {children}
    </div>
  )
}

AbsolutePosition.propTypes = {
  top : PropTypes.number,
  bottom : PropTypes.number,
  left : PropTypes.number,
  right : PropTypes.number,
  width : PropTypes.number,
}

export default AbsolutePosition;
