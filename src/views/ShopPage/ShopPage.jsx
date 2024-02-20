import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Button';

import { useState } from 'react'; 
import "./ShopPage.css";
import MessageConfirm from '../../components/MessageConfirm/MessageConfirm';
import DetailList from '../../components/DetailsList/DetailList';

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

import {deleteItem, clear} from "../../redux/features/shoppingCart/shoppingCartSlice";
import { useSelector, useDispatch } from "react-redux";

const initialState={
  name:"",
  lastName:"",
  city:"",
  details:[],
}

const ShopPage=()=> {

  const [values, setValues]=useState(initialState);
  const [idGenerated, setIdGenerated]= useState(null);

  const dispatch = useDispatch();
  const petsShooping = useSelector((state) => state.shoppingCart.details); //sale del alias del store y el segundo sale del nombre de la variable del slice
  const petsTotal = useSelector((state) => state.shoppingCart.petsShooping); //sale del alias del store y el segundo sale del nombre de la variable del slice
  
  const price=()=>{
    let x=0;
    for (let i = 0; i < petsSelected.length; i++) {
      x+=Number(petsSelected[i][0].precio*petsSelected[i][1]);
    }
    return x; 
  }

  const totalizar=()=>{
    let x=0;
    for (let i = 0; i < petsSelected.length; i++) {
      x+=petsSelected[i][1];               
  }  
  return x; 
}

  const [petsSelected, setPetsSelected]= useState(petsShooping);
  const [total, setTotal]= useState(totalizar());
  const [totalPrice, setTotalPrice]= useState(price());

const onChange =(e)=>{
    const {value, name}= e.target;
    setValues({...values, [name]:value});
}

const handleClear=()=>{
  dispatch(clear());
  // setAmount(0);
}

const clearCartWidget=()=>{
  dispatch(addShop({petsShooping:0, details:[petsData.petSelected]}));
  setAmount(0);
}

  // console.log("totalizar ",total);
  // console.log("pagar state",totalPrice);

  const onSubmit= async (e)=>{
    e.preventDefault();
    // console.log(values);
    const docRef= await addDoc(collection(db, "ventas"),{
      values
    });
    // console.log("DOcumment written with ID: ",docRef.id);
    setIdGenerated(docRef.id);
    setValues(initialState); 
    handleClear();   
    setPetsSelected([]);
    setTotalPrice(0);
  }


  return (
    <div className='todo'>
      {idGenerated?<MessageConfirm idGenerated={idGenerated}/>:null}
      <form className='contenedor' onSubmit={onSubmit}>        
        <Typography variant="h4" gutterBottom>
          Información del Comprador
        </Typography>
        <TextField sx={{ minWidth:"400px", margin:"5px"}} id="outlined-basic" label="Nombre" variant="outlined" name="name" value={values.name} onChange={onChange} required/>
        <TextField sx={{ minWidth:"400px", margin:"5px"}} id="outlined-basic2" label="Apellido" variant="outlined" name="lastName" value={values.lastName} onChange={onChange} required/>
        <TextField sx={{ minWidth:"400px", margin:"5px"}} id="outlined-basic3" label="Ciudad" variant="outlined" name="city" value={values.city} onChange={onChange} required/>                        
          <DetailList items={petsSelected} />
        <Typography variant="h5" gutterBottom className="precio">
          COP$ {totalPrice}
        </Typography>
        <Button type='submit' sx={{ background: "black", marginTop:"20px", padding:"15px"}} variant="contained" disableElevation>
          Confirmar Compra
        </Button>        
      </form>      
    </div>

    
    
  );
}


export default ShopPage;