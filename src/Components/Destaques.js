import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Destaques = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        getRecipes()
    }, [])
    const getRecipes = async () => {

        try {
            const {data} = await axios.get('https://ironrest.herokuapp.com/recipes4u')
            setRecipes(data)
        }
        catch (error) {
            console.log(error)
        }

    }
    return (
    <div>
        <div>
            Destaques
        </div>
        {recipes.map(recipe => 
            <div>
                <img src={recipe.image} alt={recipe.image}/>
            </div>
            )}
    </div>
  )
}
