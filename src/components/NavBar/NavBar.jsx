import "./NavBar.css";

import {Link} from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
// import CategoryButton from '../CategoryButton/CategoryButton';
// import ViewItems from '../ViewItems/ViewItems';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import TableRowsIcon from '@mui/icons-material/TableRows';

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../redux/features/shoppingCart/shoppingCartSlice";
import { modeDarkToggle } from "../../redux/features/modeDark/modeDarkSlice";
import { switchViewModule, switchViewRow } from "../../redux/features/viewOption/viewOptionSlice";


const NavBar = () => {  

  const dispatch = useDispatch();

  const petsShooping = useSelector((state) => state.shoppingCart.petsShooping); //sale del alias del store y el segundo sale del nombre de la variable del slice
  const modeDark = useSelector((state) => state.modeDark.modeDark); //sale del alias del store y el segundo sale del nombre de la variable del slice
  const viewOption = useSelector((state)=> state.activeViewOption.activeViewOption); //sale del alias del store y el segundo sale del nombre de la variable del slice

  // console.log("Mascotas en el Carrito ",petsShooping);

  const handleViewOptionRow = () => {
    dispatch(switchViewRow());
  };

const handleViewOptionModule = () => {
    dispatch(switchViewModule());
  };

  return (
    <nav className={modeDark?"NavBar NavBar_dark":"NavBar NavBar_ligth"}>        
       
        <ul>
            <Link to={"/"} className={modeDark?"button button_dark":"button button_ligth"}>Inicio</Link>
            <Link to={`/category/${"Perro"}`} className={modeDark?"button button_dark":"button button_ligth"}>Categorías</Link>            
            <Link to={"/about"} className={modeDark?"button button_dark":"button button_ligth"}>Quienes somos</Link>            
            <Link to={"/ShopPage"} className={modeDark?"button button_dark":"button button_ligth"}>COMPRAR</Link>            
            <Link to={"/"} className={modeDark?"viewOption viewOption_dark":"viewOption viewOption_ligth"} onClick={handleViewOptionModule}><ViewModuleIcon/></Link>
            <Link to={"/"} className={modeDark?"viewOption viewOption_dark":"viewOption viewOption_ligth"} onClick={handleViewOptionRow}><TableRowsIcon/></Link>
        </ul>
        
         
        <div id="cartWidget">
          <CartWidget pets={petsShooping}/>
        </div>
    </nav>
  )
}

export default NavBar