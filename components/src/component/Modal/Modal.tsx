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

const Modal = React.memo((props: ModalProps) => {
  const { selectedCard, active, setActive } = props;
  const [open] = useState(false);
  const setClass = active ? 'modal active' : 'modal';
  const setOpen = () => {
    setActive(open);
  };

  return (
    <div className={setClass} onClick={setOpen}>
      <FontAwesomeIcon icon={faXmark} className="modal__close-button" onClick={setOpen} />
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <h2>{selectedCard?.name}</h2>
        <img src={selectedCard?.image} alt="toy" className="card-img" />
        <div className="card-descr">
          <p>
            Status:
            <span>{selectedCard?.status}</span>
          </p>
          <p>
            Species:
            <span>{selectedCard?.species}</span>
          </p>
          <p>
            Type:
            <span>{selectedCard?.type}</span>
          </p>
          <p>
            Gender:
            <span>{selectedCard?.gender}</span>
          </p>
          <ul>
            Origin:
            <li>{selectedCard?.origin.name}</li>
            <li>{selectedCard?.origin.url}</li>
          </ul>
          <ul>
            Episode:
            <li>{selectedCard?.episode[0]}</li>
            <li>{selectedCard?.episode[1]}</li>
          </ul>
          <ul>
            Location:
            <li>{selectedCard?.location.name}</li>
            <li>{selectedCard?.location.url}</li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default Modal;
