import CardPet from "../../components/CardPet/CardPet";
import CardPet_horizontal from "../../components/CardPet/CardPet_horizontal";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import React,{useEffect, useState} from 'react';
import "./HomePage.css";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { modeDarkToggle } from "../../redux/features/modeDark/modeDarkSlice";
// import { viewOption } from "../../redux/features/viewOption/viewOptionSlice";


const HomePage = () => {

  const dispatch = useDispatch();
  
  const modeDark = useSelector((state) => state.modeDark.modeDark); //sale del alias del store y el segundo sale del nombre de la variable del slice
  const viewOption = useSelector((state)=> state.activeViewOption.activeViewOption); //sale del alias del store y el segundo sale del nombre de la variable del slice

  console.log("se encuentra en ",viewOption);
  const handleModeDark = () => {
    dispatch(modeDarkToggle());
  };

  const [petsData, setPetsData] = useState([]);
  
  useEffect(()=>{
    const getPets=async ()=>{
      const q = query(collection(db, "pets"));
      const querySnapshot = await getDocs(q);
      const docs=[];
      querySnapshot.forEach((doc) => {                
        docs.push({...doc.data(), id: doc.id})
      });       
      setPetsData(docs);    
    };
    getPets();
    
  },[])

  return (
    <div className={modeDark?"listPets_dark":"listPets_ligth"}>
      {petsData.map((pet)=>{
        return  <>                  
            {viewOption?<CardPet key={pet.id} petsData={pet}/>:<CardPet_horizontal key={pet.id} petsData={pet}/>}                
        </>
      })}      
    </div>
  )
}

export default HomePage