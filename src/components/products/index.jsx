import { useContext } from 'react';
import { DataContext } from '../../context/dataprovider';
import { ProductItem } from './productItem';
import '../../index.css'

export const Products = () => {

  const value = useContext(DataContext);
  const [products] = value.products;

  return (
    <div>
      <h1 className="title">Products</h1>
      <div className="productos">
        {
          products.map(product => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
              cantidad={product.cantidad}
            />
          ))
        }
      </div>
    </div>
  );
}
