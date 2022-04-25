import { IDataApi } from '../../types';
import './card.css';

interface cardApiProps extends IDataApi {
  handleClick: (id: number) => void;
}

const CardApi = (props: cardApiProps) => {
  const { handleClick, id, image, name, status, species, gender } = props;
  const handleCard = () => {
    handleClick(id);
  };
  return (
    <div className="card" onClick={handleCard}>
      <h2 className="card-title">{name}</h2>
      <img src={image} alt="toy" className="card-img" />
      <div className="card-descr">
        <p>
          Status:
          <span>{status}</span>
        </p>
        <p>
          Species:
          <span>{species}</span>
        </p>
        <p>
          Gender:
          <span>{gender}</span>
        </p>
      </div>
    </div>
  );
};

export default CardApi;
