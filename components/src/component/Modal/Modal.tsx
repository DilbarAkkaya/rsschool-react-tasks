import React from 'react';
import './Modal.css';

class Modal extends React.Component {
  state={
    isOpen: false,
    onCansel: false,
  }
  render() {
    return (
      <div className="modal">
        <button className="modal__close-button">
          Close
        </button>
        {this.props.children}
      </div>
    )
  }
}

export default Modal;