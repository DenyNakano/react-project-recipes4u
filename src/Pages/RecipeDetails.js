import React, { useEffect, useState }from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'


export const RecipeDetails = () => {
  const {id} = useParams()
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    getRecipe();
  }, []);
  const getRecipe = async () => {
    try {
      const {data} = await axios.get(
        `https://ironrest.herokuapp.com/recipes4u/${id}`
      );
      
      setRecipe(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <img src={recipe?.image} alt={recipe?.image}/>
        <h1>{recipe.name}</h1>
        <h2>Descrição</h2>
        <p>
          {recipe?.description}
        </p>
        <h2>Ingredientes</h2>
        <ul>
        {recipe?.ingredients?.map((ingredient,index)=>
         <li key={index}>{ingredient}</li> 
        )}
        </ul>
        <div>
          {recipe?.time} {recipe?.level} {recipe?.rate}
        </div>
        <h2>Preparo</h2>
        <ul>
          {recipe?.preparation?.map((step,index) => 
          <li key={index}>
            {index + 1} {step}
          </li>
        )}
          </ul>
          
      </div>
      
    </div>
  )
}
