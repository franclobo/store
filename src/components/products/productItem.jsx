import { useContext } from 'react';
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
        <a href="/">
          <div className="producto__img">
            <img src={image} alt={title} />
          </div>
        </a>
        <div className="producto__footer">
          <h3>{title}</h3>
          <p>{category}</p>
          <p className="price">${price}</p>
        </div>
        <div className="buttom">
          <button className="button" onClick={() => addCart(id)}> Agregar al carrito</button>
          <div>
            <a href="#" className="btn">
              Vista
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
