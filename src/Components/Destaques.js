import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import "./Destaques.css";

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
  return (
    <div className="content">
      <Card>
        <CardBody>
          <CardTitle tag="h1">Destaques</CardTitle>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {recipes.map((recipe) => (
              <div key={recipe._id}>
                <Link to={`/recipe/${recipe._id}`}>
                  <div
                    style={{ backgroundImage: `url(${recipe.image})` }}
                    className="image-recipe"
                  ></div>
                </Link>
                <div>
                  <p>{recipe.name}</p>
                  <p>{recipe.type}</p>
                  <p>{recipe.time}</p>
                  <p>{recipe.rate}</p>
                  <p>{recipe.level}</p>
                </div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
