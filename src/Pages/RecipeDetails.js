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
      console.log(data)
      setRecipe(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div>
        <img src={recipe?.image} alt={recipe?.image}/>
        <p>
          {recipe?.description}
        </p>
        <ul>
        {recipe?.ingredients?.map((ingredient,index)=>
         <li key={index}>{ingredient}</li> 
        )}
      </ul>

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
