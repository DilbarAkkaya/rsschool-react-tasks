
import React from 'react';
import Portal from '../Portal/Portal';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './Modal.css';
import { IDataApi } from '../../types';

interface ModalProps {
  active?: boolean,
  setActive: (value: boolean)=> void,
  selectedCard?: IDataApi| null
}

class Modal extends React.Component<ModalProps, any> {
  constructor(props: ModalProps) {
  super(props);
  this.state={
    active: false,
  }
  this.setActive = this.setActive.bind(this);
  }

setActive() {
  console.log('ok1')
  this.props.setActive(this.state.active);
}
  render() {
    return ( 
        <div className={this.props.active ? "modal active" : "modal"} onClick={this.setActive}>
          <FontAwesomeIcon icon={faXmark} className="modal__close-button" onClick={this.setActive}/>
          <div className="modal__content" onClick={e=> e.stopPropagation()}>
            <h1>{this.props.selectedCard?.name}</h1>
          </div>
        </div>
       )
  }
}

export default Modal;