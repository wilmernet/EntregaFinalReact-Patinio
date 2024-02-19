import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import "./CardPetShop.css";
import CarouselImagePet from '../CarouselImagePet/CarouselImagePet';
import ButtonBox from '../ButtonBox/ButtonBox';

import {Link} from "react-router-dom";

const styles = {
  link: {
    textDecoration: 'none', // Quita el subrayado del enlace
    color: 'inherit', // Hereda el color del texto del contenedor
  }
};

const CardPetShop=({petsData})=> {
  return (
    <div className='containerShop'>      
        <div className='targetShop'>  
        {/* sx={{ display: 'flex', alignItems:"center" ,textDecoration:"none", flexDirection:"row", backgroundColor:"#ffffff9f",  margin:"30px", width: "90%"}}> */}
        {/* <CardActionArea sx={{ display: 'flex', justifyContent:"space-evenly", margin:"30px"}}> */}
        <div className='imagenShop'>
          <CardMedia
            component="img"
            height="340px"          
            image={petsData.img}
            alt="Pet"          
            sx={{maxWidth: 345}}
          />        
        </div>        
        <div className="ButtonBoxShop"><ButtonBox petSelected={petsData}/></div>
        <div className='InfoContainerShop'>
          <CardContent>
              <div className='petNameShop'>
              <Typography gutterBottom variant="h4" component="div">
                {petsData.nombre}
              </Typography>              
              </div>              
              <Typography variant="body2" color="text.secondary" className='containerBlockShop'>
                <p className='blockShop'>
                  <Typography variant="subtitle1" component="div" >
                    <p> <b>Tipo de Mascota:</b> {petsData.tipo}</p>
                  </Typography> 
                  <p> <b>Raza:</b>{petsData.raza} </p>                  
                </p>
                <p className='blockShop'>
                  <p> <b>Sexo:</b>{petsData.sexo=="hembra"?<FemaleIcon/>:petsData.sexo=="macho"?<MaleIcon/>:<spam><FemaleIcon/><MaleIcon/></spam>} {petsData.sexo} </p>
                  <p> <b>Edad:</b>{petsData.edad} meses </p>
                </p>
                
                
              </Typography>
              <div className='priceShop'>
                <Typography gutterBottom variant="h5" component="div"  >
                  COP$ {petsData.precio}.oo
                </Typography>            
              </div>              
          </CardContent>
        </div>        
      </div>          
      <div className='containerCarouselShop' sx={{ display: 'flex', alignItems:"center" ,textDecoration:"none", flexDirection:"row", backgroundColor:"#ffffff9f",  margin:"30px", width: "90%"}}>
        <h2 className='subtitleShop'>Imágenes de tu futura mascota.</h2>        
        <CarouselImagePet key={petsData.id} imgList={petsData.imgList} id={petsData.id}/>         
      </div>        
    </div>
  );
}

export default CardPetShop;
