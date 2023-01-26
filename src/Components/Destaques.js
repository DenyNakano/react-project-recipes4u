import Api from '../utils/api.utils'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./Destaques.css";
import { MdTimer } from "react-icons/md";
import { Loading } from "./Loading";
export const Destaques = () => {
  const [recipes, setRecipes] = useState(null);
  useEffect(() => {
    getRecipes();
  }, []);
  const getRecipes = async () => {
    try {
      const bestRecipes = await Api.bestRecipes()
      setRecipes(bestRecipes);
    } catch (error) {
      console.log(error);
    }
  }
  return recipes ? (
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
            {recipes.map((recipe, index) => (
              <div key={index} id="container">
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
                        <b>{recipe.title}</b>
                      </p>
                      <p>{recipe.category}</p>
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
  ) : (
    <Loading />
  );
};
