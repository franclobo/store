import { useContext } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/dataprovider';
import "../../index.css";

export const ProductItem = ({
  id,
  title,
  price,
  image,
  category,
}) => {
  const value = useContext(DataContext);
  const addCart = value.addCart;


  return (
    <div>
      <div className="producto" key={id}>
        <Link to={`/products/${id}`} className="link">
          <div className="producto__img">
            <img src={image} alt={title} />
          </div>
        </Link>
        <div className="producto__footer">
          <h3>{title}</h3>
          <p>{category}</p>
          <p className="price">${price}</p>
        </div>
        <div className="buttom">
          <button className="button" onClick={() => addCart(id)}> Agregar al carrito</button>
          <div>
            <Link to={`/products/${id}`} className="btn">
              Vista
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


ProductItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}




