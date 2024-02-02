import "./CartWidget.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = (info) => {
    return (        
    <a href="#" id="contenedor">
      <div id="CartWidget">
          <div id="icono"> <ShoppingCartIcon/>  </div>          
          <p id="counter">
            <b>{info.pets}</b> Mascotas      
          </p>
      </div>    
    </a>

  )
}

export default CartWidget;