import "./Header.css"
import logo from "../../assets/logo.png";
import logo_transparente from "../../assets/logo_transparente.png";
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightlightIcon from '@mui/icons-material/Nightlight';

import { useSelector, useDispatch } from "react-redux";
import { modeDarkToggle } from "../../redux/features/modeDark/modeDarkSlice";

const Header = () => {

  const dispatch = useDispatch();
  
  const modeDark = useSelector((state) => state.modeDark.modeDark); //sale del alias del store y el segundo sale del nombre de la variable del slice

  const handleModeDark = () => {
    dispatch(modeDarkToggle());
  };


  return (
    <div className={modeDark?"Header Header-dark":"Header Header-ligth"}>
        {/* <img src={logo_transparente} alt="Logo Tienda de Mascotas" id="headerLogo" className={modeDark?null:"headerLogo-ligth"}/> */}
        <img src={logo_transparente} alt="Logo Tienda de Mascotas" id="headerLogo" className="headerLogo-ligth"/>
        {/* <div id="direccion"> Florencia - Caquetá CO.</div> */}
        <IconButton aria-label="delete" onClick={handleModeDark} className={modeDark?"btnModoDark":"btnModoDark btnModoDark-ligth"} sx={modeDark?{ color: "white", boxShadow: "1px 1px 10px 0px rgba(255,255,255,12.75)"}:{ boxShadow: "1px 1px 10px 0px rgba(15,12,12,12.75)"}}>          
          {modeDark?<LightModeIcon/>:<NightlightIcon/>}
        </IconButton>
    </div>
  ) 
}

export default Header;  
