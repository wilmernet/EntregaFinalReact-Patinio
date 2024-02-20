import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./CategoryButton.css";
import {Link} from 'react-router-dom';

const CategoryButton = () => {

    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
      event.target.value==null?setCategory(''):setCategory(event.target.value);
    };
  
    return (
      <Box sx={{ minWidth: 220 }} className="CategoryButton" >
        <FormControl fullWidth className='formItems'>
          <InputLabel id="demo-simple-select-label">Categoría</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="Categoría"
            onChange={handleChange}
          >         
          <MenuItem value={null}><Link to={`/`}>Todas</Link></MenuItem>
          
          <MenuItem value={'Cacatua'}><Link to={`/category/${"Cacatua"}`}> Cacatua</Link></MenuItem>
          <MenuItem value={'Conejo'}><Link to={`/category/${"Conejo"}`}>Conejo</Link></MenuItem>          
          <MenuItem value={'Perico'}><Link to={`/category/${"Perico"}`}>Periquitos</Link></MenuItem>
          <MenuItem value={'Perro'}><Link to={`/category/${"Perro"}`}> Perro</Link></MenuItem>
          <MenuItem value={'Pollito'}><Link to={`/category/${"Pollito"}`}>Pollitos</Link></MenuItem>          
        </Select>
      </FormControl>
    </Box>
  );
}

export default CategoryButton;
