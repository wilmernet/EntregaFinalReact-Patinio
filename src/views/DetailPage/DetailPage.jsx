import CardPetShop from "../../components/CardPetShop/CardPetShop";
import { db } from "../../firebase/firebaseConfig";
import { collection,where, documentId, query, getDocs } from "firebase/firestore";
import React,{useEffect, useState} from 'react';
import { Link, useParams } from "react-router-dom";
import "./DetailPage.css";
import { useSelector, useDispatch } from "react-redux";
import { modeDarkToggle } from "../../redux/features/modeDark/modeDarkSlice";

// import CardProducto from "../../components/CardProduct/CardProduct";

const DetailPage = () => {

  const {id}= useParams()
  // console.log("DATO ENVIADO POR URL",id);

  const dispatch = useDispatch();
  
  const modeDark = useSelector((state) => state.modeDark.modeDark); //sale del alias del store y el segundo sale del nombre de la variable del slice
  const viewOption = useSelector((state)=> state.activeViewOption.activeViewOption); //sale del alias del store y el segundo sale del nombre de la variable del slice

  const handleModeDark = () => {
    dispatch(modeDarkToggle());
  };

  const [petData, setPetData] = useState([]);
  
  useEffect(()=>{
    const getPets=async ()=>{
      const q = query(collection(db, "pets"), where(documentId(),"==",id));
      const querySnapshot = await getDocs(q);
      const docs=[];
      querySnapshot.forEach((doc) => {                
        docs.push({...doc.data(), id: doc.id})
      });       
      setPetData(docs);    
    };
    getPets();
    
  },[id])

  return (
    <div className={modeDark?"listPets_dark":"listPets_ligth"}>
      {petData.map((pet)=>{
        return  <>                  
            <CardPetShop key={pet.id} petsData={pet}/>
        </>
      })}      
    </div>
  )
};

export default DetailPage;
