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
        <img src={recipe.image} alt={recipe.image}/>
        <p>
          {recipe.description}
        </p>
        {/*<ul>
          recipe.ingredients.map((ingredient, index) => 
          
          )</ul>*/}
          {console.log(recipe.ingredients.map((ingredient) => {return ingredient}))}
        
        
        {/*<ul>
          {recipe.preparation.map ((step, index) => 
          <li>
            {index + 1} {step}
          </li>
        )}
          </ul>*/}
          
      </div>
      
    </div>
  )
}
