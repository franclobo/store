import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../../context/dataprovider';
import Nike from '../../assets/images/Nike.jpg';
import "boxicons";
import '../../index.css';

export const Header = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart] = value.cart;

  const toggleMenu = () => {
    setMenu(!menu);
  };


  return (
    <header>
      <Link to="/" className="logo">
        <img src={Nike} alt="logo" width={150} />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <div className="cart" onClick={toggleMenu}>
        <box-icon name="cart"></box-icon>
        <span className="item__total">{cart.length}</span>
      </div>
    </header>
  );
}
