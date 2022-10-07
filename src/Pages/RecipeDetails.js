import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import "./RecipeDetails.css"
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap'
import { Loading } from '../Components/Loading'
import {  MdTimer } from "react-icons/md";

export const RecipeDetails = () => {
  const { id } = useParams()
  const [recipe, setRecipe] = useState({});

  

  useEffect(() => {
    const getRecipe = async () => {
      try {
        const { data } = await axios.get(
          `https://ironrest.herokuapp.com/recipes4u/${id}`
        );
  
        setRecipe(data);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipe();
  }, [id]);
  
  return(
    Object.values(recipe).length === 0 
      ? 
      <Loading/>
    :<div className="main content">
      <Card>
      <CardBody>
       <div style={{width:'80%'}}>
       <div style={{display:'flex',justifyContent:'space-between'}}>
       <div>
        <div className='image' style={{backgroundImage: `url(${recipe?.image})`}}></div>
        </div>
        <div style={{width:500}}>
        <CardTitle tag="h1">{recipe?.name}</CardTitle>
        <CardSubtitle tag="h2">Descrição</CardSubtitle>
        <CardText>
          {recipe?.description}
        </CardText>
        </div>
        </div>
        </div>
        <h2>Ingredientes</h2>
        <ul>
          {recipe?.ingredients?.map((ingredient, index) =>
            <li key={index}>{ingredient}</li>
          )}
        </ul>
        <div style={{display:'flex',width:'25%',justifyContent:'space-between',alignItems:'center'}}>
          <h5><MdTimer/>{recipe?.time}</h5> 
          <h5>{recipe?.level}</h5>
          <p style={{display:'flex'}} >
                  <h3 style={{color:'#FED143'}}>{'★'.repeat(Number(recipe?.rate))}</h3>
                  <h3 style={{color:'#B3B3B3'}}>{'★'.repeat(5-Number(recipe?.rate))}</h3></p>
        </div>
        <h2>Preparo</h2>
        <ul>
          {recipe?.preparation?.map((step, index) =>
            <li key={index}>
              {index + 1} {step}
            </li>
          )}
        </ul>
        </CardBody>
      </Card>
    </div>
    
)
}
