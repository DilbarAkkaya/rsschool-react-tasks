import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { IDataApi } from '../../types';
import Context from '../../Context/Context';
import './Modal.css';

interface ModalProps {
  activeModal?: boolean;
  setActive: (value: boolean) => void;
  selectedCard?: IDataApi | null;
}

const Modal = (props: ModalProps) => {
  const {state, dispatch} =useContext(Context)
 // const [open] = useState(false);

const setOpen = () => {
  dispatch({
    type: 'activemodal',
    payload: false
  })
}

  return (
    <div className={state.activeModal ? 'modal active' : 'modal'} onClick={setOpen}>
      <FontAwesomeIcon icon={faXmark} className="modal__close-button" onClick={setOpen} />
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
};

export default Modal;
