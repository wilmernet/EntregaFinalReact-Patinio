import CardPet from "../../components/CardPet/CardPet";
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import React,{useEffect, useState} from 'react';
import "./HomePage.css";

const HomePage = () => {

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
    <div className="listPets">
      {petsData.map((pet)=>{
        return  <CardPet key={pet.id} petsData={pet}/>;
      })};      
    </div>
  )
}

export default HomePage