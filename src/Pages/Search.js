
import { BarSearch } from '../Components/BarSearch'
import React, { useEffect, useState } from "react";
import axios from "axios";


export const Search = () => {
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')
 
  console.log(recipes)
  const getSearch = async (event) => {
    setSearch(event.target.value)
    try {
      //const { data } = await axios.get(`https://ironrest.herokuapp.com/recipes4u/search?q=${search}`)
      const { data } = await axios.get('https://ironrest.herokuapp.com/recipes4u')

      //setRecipes(data)
      console.log(data)
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <BarSearch getSearch={getSearch} search={search} />
      {/*{recipes.map}*/}
    </div>
  )
}
