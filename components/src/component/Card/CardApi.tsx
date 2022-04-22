import { useContext } from 'react';
import Context from '../../Context/Context';
import { IDataApi } from '../../types';
import './card.css';

interface cardApiProps extends IDataApi {
  handleClick: (id: number) => void;
}


const CardApi = () => {
  const {state, dispatch} = useContext(Context)
  console.log("array of cards", state.cards)
  return (
    <div className="card">
      <h2 className="card-title">{state.cards[0].name}</h2>
      <img src={state.cards[0].image} alt="toy" className="card-img" />
      <div className="card-descr">
        <p>
          Status:
          <span>{state.cards[0].status}</span>
        </p>
        <p>
          Species:
          <span>{state.cards[0].species}</span>
        </p>
        <p>
          Gender:
          <span>{state.cards[0].gender}</span>
        </p>
      </div>
    </div>
  );
};

export default CardApi;
