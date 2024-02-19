import "./CartWidget.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';

const styles = {
  link: {
    textDecoration: 'none', // Quita el subrayado del enlace
    color: 'inherit', // Hereda el color del texto del contenedor
  }
};

const CartWidget = (info) => {
    return (        
    <a href="#" id="contenedor">
      <div id="CartWidget">
          <div id="icono"> <ShoppingCartIcon/>  </div>          
          <p id="counter">
            <Link to={"/ShopPage"} style={styles.link}><b>{info.pets}</b> Mascotas</Link>            
                  
          </p>
      </div>    
    </a>

  )
}

export default CartWidget;