import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardImg, CardTitle } from 'reactstrap'
import './Destaques.css'

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
    <div className='content' >
    <Card>
        <CardBody>
           <CardTitle tag='h1' >
            Destaques
           </CardTitle>
           <div style={{display:'flex', flexWrap:'wrap',justifyContent:'center'}} >
        {recipes.map(recipe => 
                <div style={{backgroundImage: `url(${recipe.image})`}} className='image-recipe'></div>
            
            )}
            </div>
        </CardBody>
    </Card>
    </div>
  )
}
