import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IDataApi } from '../../types';
import './Modal.css';

interface ModalProps {
  active?: boolean;
  setActive: (value: boolean) => void;
  selectedCard?: IDataApi | null;
}

const Modal = (props: ModalProps) => {
  const [active, setPopapActive] = useState(false);

  function setActive() {
    props.setActive(active);
  }
 
    return (
      <div className={props.active ? 'modal active' : 'modal'} onClick={setActive}>
        <FontAwesomeIcon icon={faXmark} className="modal__close-button" onClick={setActive} />
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <h2>{props.selectedCard?.name}</h2>
          <img src={props.selectedCard?.image} alt="toy" className="card-img" />
          <div className="card-descr">
            <p>
              Status:
              <span>{props.selectedCard?.status}</span>
            </p>
            <p>
              Species:
              <span>{props.selectedCard?.species}</span>
            </p>
            <p>
              Type:
              <span>{props.selectedCard?.type}</span>
            </p>
            <p>
              Gender:
              <span>{props.selectedCard?.gender}</span>
            </p>
            <ul>
              Origin:
              <li>{props.selectedCard?.origin.name}</li>
              <li>{props.selectedCard?.origin.url}</li>
            </ul>
            <ul>
              Episode:
              <li>{props.selectedCard?.episode[0]}</li>
              <li>{props.selectedCard?.episode[1]}</li>
            </ul>
            <ul>
              Location:
              <li>{props.selectedCard?.location.name}</li>
              <li>{props.selectedCard?.location.url}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default Modal;
/* class Modal extends React.Component<ModalProps, { active: boolean }> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      active: false,
    };
    this.setActive = this.setActive.bind(this);
  }

  setActive() {
    this.props.setActive(this.state.active);
  }
  render() {
    return (
      <div className={this.props.active ? 'modal active' : 'modal'} onClick={this.setActive}>
        <FontAwesomeIcon icon={faXmark} className="modal__close-button" onClick={this.setActive} />
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          <h2>{this.props.selectedCard?.name}</h2>
          <img src={this.props.selectedCard?.image} alt="toy" className="card-img" />
          <div className="card-descr">
            <p>
              Status:
              <span>{this.props.selectedCard?.status}</span>
            </p>
            <p>
              Species:
              <span>{this.props.selectedCard?.species}</span>
            </p>
            <p>
              Type:
              <span>{this.props.selectedCard?.type}</span>
            </p>
            <p>
              Gender:
              <span>{this.props.selectedCard?.gender}</span>
            </p>
            <ul>
              Origin:
              <li>{this.props.selectedCard?.origin.name}</li>
              <li>{this.props.selectedCard?.origin.url}</li>
            </ul>
            <ul>
              Episode:
              <li>{this.props.selectedCard?.episode[0]}</li>
              <li>{this.props.selectedCard?.episode[1]}</li>
            </ul>
            <ul>
              Location:
              <li>{this.props.selectedCard?.location.name}</li>
              <li>{this.props.selectedCard?.location.url}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal; */

