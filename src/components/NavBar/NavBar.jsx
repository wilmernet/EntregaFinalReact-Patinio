import "./NavBar.css";

import {Link} from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
// import CategoryButton from '../CategoryButton/CategoryButton';
// import ViewItems from '../ViewItems/ViewItems';

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/features/shoppingCart/shoppingCartSlice";


const NavBar = () => {  

  const dispatch = useDispatch();

  const petsShooping = useSelector((state) => state.shoppingCart.petsShooping); //sale del alias del store y el segundo sale del nombre de la variable del slice
  
  // console.log("Mascotas en el Carrito ",petsShooping);

  return (
    <nav className="NavBar">        
       
        <ul>
            <Link to={"/"} className="button">Inicio</Link>
            <Link to={"/about"} className="button">Quienes somos</Link>            
        </ul>
        
         
        <div id="cartWidget">
          <CartWidget pets={petsShooping}/>
        </div>
    </nav>
  )
}

export default NavBar