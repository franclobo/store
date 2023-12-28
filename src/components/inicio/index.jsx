import Portada from '../../assets/images/inicio.jpg';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className='inicio'>
      <Link to='/'>
        <h2>Inicio</h2>
      </Link>
      <Link to='/products'>
        <h2>Products</h2>
      </Link>
      <img src={Portada} alt='portada' width={500} />
    </div>
  )
}
