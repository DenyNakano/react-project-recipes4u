
import { BarSearch } from '../Components/BarSearch'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Loading } from '../Components/Loading';
import { Link } from "react-router-dom";
import {  MdTimer } from "react-icons/md";

export const Search = () => {
  const [recipes, setRecipes] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('')
 const inputValue = (element)=>{
  setSearchInput(element.target.value)
 }
 const searchItems = ()=>{
  if (searchInput !== '') {
 const filteredData =  recipes.filter((recipe)=>
  Object.values(recipe).join('').toLowerCase().includes(searchInput.toLowerCase())
  )
  setFilteredResults(filteredData)
}
else{
    setFilteredResults(recipes)
}
 }
useEffect(()=>{
getSearch()
},[])
  const getSearch = async () => {
    try {
      const { data } = await axios.get(`https://ironrest.herokuapp.com/recipes4u`)
      setRecipes(data)
      setFilteredResults(data)
     
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    recipes.length === 0? <Loading/>
    :<div style={{marginLeft: 100}}>
    <div>
      <BarSearch searchItems={searchItems} search={searchInput} inputValue={inputValue} />
      <div style={{display: 'flex',flexWrap:'wrap'}}>
      {filteredResults.map((recipe) =>  
            <div key={recipe._id} id="container">
            <div>               
              <Link to={`/recipe/${recipe._id}`} style={{textDecoration:'none',color:'black'}} >
                  <div
                    style={{ backgroundImage: `url(${recipe.image})` }}
                    className="image-recipe"
                  ></div></Link>
                  </div>

                <div className="overlay">
                <Link to={`/recipe/${recipe._id}`} style={{textDecoration:'none',color:'black'}} >
                <div>
                  <p><b>{recipe.name}</b></p>
                  <p>{recipe.type}</p>
                  <p> <MdTimer/> {recipe.time}</p>
                  <p style={{display:'flex'}} >
                  <h2 style={{color:'#FED143'}}>{'★'.repeat(Number(recipe.rate))}</h2>
                  <h2 style={{color:'#B3B3B3'}}>{'★'.repeat(5-Number(recipe.rate))}</h2></p>
                  <p>{recipe.level}</p>
                  </div>
                  </Link>
                  </div>

              </div> 
            )}
    </div>
    </div>
    </div>
    )
    
  }
