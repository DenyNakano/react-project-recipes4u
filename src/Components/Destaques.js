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
  };
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
            {recipes.map((recipe) => (
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
                    style={{ textDecoration: "none", color: "black" }}
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
