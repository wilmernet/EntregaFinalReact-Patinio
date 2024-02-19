import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react'; 
import "./ShopPage.css";
import MessageConfirm from '../../components/MessageConfirm/MessageConfirm';

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const initialState={
  name:"",
  lastName:"",
  city:"",
}

const ShopPage=()=> {

  const [values, setValues]=useState(initialState);
  const [idGenerated, setIdGenerated]= useState(null);

  // console.log(values);
  const onChange =(e)=>{
    const {value, name}= e.target;
    setValues({...values, [name]:value});
  }

  const onSubmit= async (e)=>{
    e.preventDefault();
    console.log(values);
    const docRef= await addDoc(collection(db, "ventas"),{
      values
    });
    // console.log("DOcumment written with ID: ",docRef.id);
    setIdGenerated(docRef.id);
    setValues(initialState);
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
        <Button type='submit' sx={{ background: "black", marginTop:"20px", padding:"15px"}} variant="contained" disableElevation>
          Confirmar Compra
        </Button>
      </form>      
    </div>

    
    
  );
}


export default ShopPage;