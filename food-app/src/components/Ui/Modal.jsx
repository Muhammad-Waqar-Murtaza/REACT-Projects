import React from "react";
import ReactDOM from 'react-dom';

const BackDrop = (props) => {
    return <div className='backdrop' onClick={props.onClick}/>;
}

const ModalOverlay = (props) => {
    return (
        <div className='modal'>
          <div className='content'>{props.children}</div>
        </div>
      );
}

const Modal = (props) => {

    const portalElement = document.getElementById('modal-overlay')

  return (
    <div>
        {ReactDOM.createPortal(<BackDrop onClick={props.onClose}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </div>
  );
};

export default Modal;
