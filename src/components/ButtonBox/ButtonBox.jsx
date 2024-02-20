import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
// import { useState } from 'react';
import "./ButtonBox.css";
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";

import {addShop} from "../../redux/features/shoppingCart/shoppingCartSlice";

 
const ButtonBox = (petsData) => {  
  
  const [amount, setAmount] = React.useState(0);

  const dispatch = useDispatch();
  const modeDark = useSelector((state) => state.modeDark.modeDark); //sale del alias del store y el segundo sale del nombre de la variable del slice
  
  const handleAddShop=()=>{
    dispatch(addShop({petsShooping:amount, details:[petsData.petSelected]}));
    setAmount(0);
  }

  const hanleClickNext=()=>{    
    {amount<petsData.petSelected.cant?setAmount(amount+1):null;}
  }
  
  const hanleClickBack=()=>{
    {amount>=1?setAmount(amount-1):null;}
  }

  return (
    <div className='containerButtonBox'>
          <Typography gutterBottom variant="h6" component="div">
              Cantidad de Mascotas               
          </Typography>
            <Stack direction="row" spacing={2} className='Buttons'>
            <Button onClick={hanleClickBack} variant="outlined">-</Button>
            <TextField className='ButtonBox'
                id="outlined-number"
                label="Cantidad"
                type="text"
                value={amount}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <Button onClick={hanleClickNext} variant="outlined" >+</Button>            
        </Stack>  
        <Typography gutterBottom variant="h6" component="div">
              De {petsData.petSelected.cant} Disponible(s)               
          </Typography>
          {/* <Link to={"/ShopPage"} className={modeDark?"buttonShop button button_dark":"button button_ligth"}>AGREGAR AL CARRITO</Link>             */}
          <Link to={"/"} onClick={handleAddShop} className={modeDark?"buttonShop button button_dark":"button button_ligth"}>AGREGAR AL CARRITO</Link>            
    </div>
  )
}

export default ButtonBox
