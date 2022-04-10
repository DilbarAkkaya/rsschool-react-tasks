
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';



class Modal extends React.Component {
  state={
    isOpen: false,
    onCansel: false,
  }
  render() {
    return (
      <div className="modal">
       <FontAwesomeIcon icon={faXmark} className="modal__close-button"/>
        {this.props.children}
      </div>
    )
  }
}

export default Modal;