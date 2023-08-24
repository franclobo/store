import { useContext, useState, useEffect } from 'react';
import { DataContext } from '../../context/dataprovider';
import { useParams } from 'react-router-dom';
import { ProductItem } from './productItem';

export const ProductoDetalle = () => {
  const value = useContext(DataContext);
  const addCart = value.addCart;
  const [products] = value.products;
  const [detalle, setDetalle] = useState([]);
  const [url, setUrl] = useState(0);
  const [images, setImages] = useState([]);
  const params = useParams();
  let item = 0;

  useEffect(() => {
    products.forEach(producto => {
      item = 0;
      if (producto.id === parseInt(params.id)) {
        setDetalle(producto);
        setUrl(0)
      }
    })
  }, [params.id, products])

  useEffect(() => {
    const values = `${detalle.img1}${url}${detalle.img2}`
    setImages(values);
  }, [url, params.id, detalle.img1, detalle.img2])

  const handleInput = e => {
    const number = e.target.value.toString().padStart(2, '01')
    setUrl(number);
  }

  if (detalle.length === 0) return null;


  return (
    <>
      {
        <div className="detalles">
          <h2>{detalle.title}</h2>
          <p className="price">${detalle.price}</p>
          <div className="grid">
            <p className="nuevo">Nuevo</p>
            <div className="size">
              <select placeholder="Tamaño">
                <option value="1">1</option>
                <option value="1">2</option>
                <option value="1">3</option>
                <option value="1">4</option>
                <option value="1">5</option>
                <option value="1">6</option>
                <option value="1">7</option>
                <option value="1">8</option>
                <option value="1">9</option>
              </select>
              <p>Tamaño</p>
            </div>
          </div>
          <button className="button" onClick={() => addCart(detalle.id)}>
            {" "}
            Agregar al carrito
          </button>
          {url ? (
            <img src={images} alt={detalle.title} />
          ) : (
            <img src={detalle.image} alt={detalle.title} />
          )}
          <input
            type="range"
            min="1"
            max="36"
            value={url}
            onChange={handleInput}
          />
          <div className="descripcion">
            <p>
              <b>Desripción:</b>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum.
              <br />
              <br />
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>
          </div>
        </div>
      }

      <h2 className="relacionados">Productos Relacionados</h2>
      <div className="productos">
        {products.map((product) => {
          if((item < 6) && (product.category === detalle.category)){
            item++;
            return(
              <ProductItem
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
                category={product.category}
                cantidad={product.cantidad}
              />
            )
          }
        })}
      </div>
    </>
  );
}
