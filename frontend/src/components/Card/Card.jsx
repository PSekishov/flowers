// import styles from './Card.module.css';
import { shortString } from "../../utils/functions";

const Card = ({id, category, price, desc, img, isNew, isSale, product }) => {

  return (
    <div className="col">
      <div className="card h-100 w-75">
        <img src={img} className="card-img-top" alt={product} />
        <div className="card-body">
          <h5 className="card-title">{product}</h5>
          <h6 className="card-title">Category: {category}</h6>
          <p className="card-text">{shortString(desc, 70)}</p>
          <p>${price}</p>
        </div>
      </div>
    </div>
  );

};

export default Card;