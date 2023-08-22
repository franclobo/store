import { useContext } from 'react';
import "boxicons";
import { DataContext } from '../../context/dataprovider';

export const Carrito = () => {
  const value = useContext(DataContext);
  const [menu, setMenu] = value.menu;
  const [cart, setCart] = value.cart;
  const [total] = value.total;

  const togglefalse = () => {
    setMenu(false);
  };

  const show1 = menu ? "carritos show" : "carritos";
  const show2 = menu ? "carrito show" : "carrito";

  const resta = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.cantidad === 1 ? (item.cantidad = 1) : (item.cantidad -= 1);
      }
    });
    setCart([...cart]);
  };

  const suma = (id) => {
    cart.forEach((item) => {
      if (item.id === id) {
        item.cantidad += 1;
      }
    });
    setCart([...cart]);
  };

  const removeProduct = (id) => {
    if (window.confirm("¿Quieres eliminar este producto?")) {
      cart.forEach((item, index) => {
        if (item.id === id) {
          item.cantidad = 1;
          cart.splice(index, 1);
        }
      });
      setCart([...cart]);
    }
  };

  return (
    <div className={show1}>
      <div className={show2}>
        <div className="carrito__close" onClick={togglefalse}>
          <box-icon name="x"></box-icon>
        </div>
        <h2>Carrito</h2>

        { cart.length === 0 ? (
          <h2 style={{ textAlign: "center", fontSize: "2rem" }}>
            Carrito vacío
          </h2>
        ) : (
          <>
            {cart.map((product) => (
              <div className="carrito__item" key={product.id}>
                <img src={product.image} alt="" />
                <div>
                  <h3>{product.title}</h3>
                  <p className="price">${product.price}</p>
                </div>
                <div>
                  <box-icon name="up-arrow" type="solid" onClick={() => suma(product.id)}></box-icon>
                  <p className="cantidad">{product.cantidad}</p>
                  <box-icon name="down-arrow" type="solid" onClick={() => resta(product.id)}></box-icon>
                </div>
                <div className="remove__item" onClick={() => removeProduct(product.id)}>
                  <box-icon name="trash"></box-icon>
                </div>
              </div>
            ))}
          </>
        )}
        <div className="carrito__footer">
          <h3>Total: ${total}</h3>
          <button className="btn">Pagar</button>
        </div>
      </div>
    </div>
  );
}
