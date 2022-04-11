
import React from 'react';
import Portal from '../Portal/Portal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';

interface ModalProps {
  active: boolean,
  setActive: ()=> void,
}

class Modal extends React.Component<ModalProps, any> {
  constructor(props: ModalProps) {
  super(props);
  this.state={
    active: true,
  }
  this.setActive = this.setActive.bind(this);
  }

setActive() {
  console.log('ok1')
  this.setState({active: false})
}
  render() {
    return ( 
        <div className="modal" onClick={this.setActive}>
          <FontAwesomeIcon icon={faXmark} className="modal__close-button" onClick={this.setActive}/>
          <div className="modal__content" onClick={e=> e.stopPropagation()}>
            
          </div>
        </div>
       )
  }
}

export default Modal;