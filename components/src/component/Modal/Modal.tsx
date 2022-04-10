
import React from 'react';
import Portal from '../Portal/Portal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

interface ModalProps {
  active: boolean,
  setActive: ()=>void,
}

class Modal extends React.Component<ModalProps, any> {
  constructor(props: ModalProps) {
  super(props)
  }
  render() {
    return ( 
        <div className="modal">
          <FontAwesomeIcon icon={faXmark} className="modal__close-button"/>
        </div>
       )
  }
}

export default Modal;