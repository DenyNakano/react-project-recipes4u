import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./Destaques.css";
import { MdTimer } from "react-icons/md";
import { Loading } from "./Loading";
export const Destaques = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes = async () => {
    try {
      const { data } = await axios.get(
        "https://ironrest.herokuapp.com/recipes4u"
      );
      setRecipes(data);
    } catch (error) {
      console.log(error);
    }
  }
  const bestRecipesSobremesa =()=>{
   const filteredSobremesa =  recipes.filter((recipe)=> recipe.type === "sobremesa")
   const filteredRateSobremesa = filteredSobremesa.map((recipe)=> Number(recipe.rate) )
    return filteredSobremesa.filter((sobremesa) => Number(sobremesa.rate) === Math.max(...filteredRateSobremesa))[0]
  }
  const bestRecipesDrinks =()=>{
    const filteredDrinks =  recipes.filter((recipe)=> recipe.type === "drinks")
    const filteredRateDrinks = filteredDrinks.map((recipe)=> Number(recipe.rate) )
     return filteredDrinks.filter((drink) => Number(drink.rate) === Math.max(...filteredRateDrinks))[0]
   }
   const bestRecipesPratos =()=>{
    const filteredPratos =  recipes.filter((recipe)=> recipe.type === "Prato Principal")
    const filteredRatePratos = filteredPratos.map((recipe)=> Number(recipe.rate) )
     return filteredPratos.filter((prato) => Number(prato.rate) === Math.max(...filteredRatePratos))[0]
   }
   const bestRecipesMassas =()=>{
    const filteredMassas =  recipes.filter((recipe)=> recipe.type === "massas")
    const filteredRateMassas = filteredMassas.map((recipe)=> Number(recipe.rate) )
     return filteredMassas.filter((massa) => Number(massa.rate) === Math.max(...filteredRateMassas))[0]
   }
  const arrBestRecipes = [bestRecipesSobremesa(),bestRecipesDrinks(),bestRecipesPratos(),bestRecipesMassas()] 
  return recipes.length === 0 ? (
    <Loading />
  ) : (
    <div className="content">
      <Card>
        <CardBody>
          <CardTitle style={{ textAlign: "center" }} tag="h1">
            Destaques
          </CardTitle>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {arrBestRecipes.map((recipe) => (
              <div key={recipe._id} id="container">
                <div>
                  <Link
                    to={`/recipe/${recipe._id}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <div
                      style={{ backgroundImage: `url(${recipe.image})` }}
                      className="image-recipe"
                    ></div>
                  </Link>
                </div>

                <div className="overlay">
                  <Link
                    to={`/recipe/${recipe._id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <div>
                      <p>
                        <b>{recipe.name}</b>
                      </p>
                      <p>{recipe.type}</p>
                      <p>
                        {" "}
                        <MdTimer /> {recipe.time}
                      </p>
                      <p style={{ display: "flex" }}>
                        <h2 style={{ color: "#FED143" }}>
                          {"★".repeat(Number(recipe.rate))}
                        </h2>
                        <h2 style={{ color: "#B3B3B3" }}>
                          {"★".repeat(5 - Number(recipe.rate))}
                        </h2>
                      </p>
                      <p>{recipe.level}</p>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
