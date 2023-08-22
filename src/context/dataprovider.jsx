import { createContext, useState, useEffect } from "react";
import Data from "../assets/Data.js";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const producto = Data.items;
    if (producto) {
      setProducts(producto);
    } else {
      setProducts([]);
    }
  }, []);

  const addCart = (id) => {
    const check = cart.every((item) => {
      return item.id !== id;
    });
    if (check) {
      const data = products.filter((product) => {
        return product.id === id;
      });
      setCart([...cart, ...data]);
    } else {
      alert("El producto ya ha sido agregado al carrito");
    }
  };

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem("dataCart"));
    if (dataCart) {
      setCart(dataCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("dataCart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    const getTotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.cantidad;
      }, 0);
      return res;
    };
    setTotal(getTotal());
  }, [cart]);



  const value = {
    products: [products],
    menu: [menu, setMenu],
    addCart: addCart,
    cart: [cart, setCart],
    total: [total, setTotal],
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
}

