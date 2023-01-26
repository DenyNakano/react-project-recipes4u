import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RecipeDetails.css";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Loading } from "../Components/Loading";
import { MdTimer, MdStar } from "react-icons/md";
import { AddComment } from "../Components/AddComment";
import { CommentRecipe } from "../Components/CommentRecipe";
import Api from "../utils/api.utils";

export const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [authorInput, setAuthorInput] = useState("");
  const [commentsInput, setCommentsInput] = useState("");
  const [rating, setRating] = useState(null);

  const getRecipe = async (id) => {
    try {
      const recipe = await Api.getRecipe(id)
      setRecipe(recipe);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipe(id)
  }, [id]);

  const changeInputAuthor = (event) => {
    setAuthorInput(event.target.value);
  };

  const changeInputComments = (event) => {
    setCommentsInput(event.target.value);
  };

  const changeInputRating = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const comment = {
      idRecipe: id,
      user: authorInput,
      comment: commentsInput,
      rate: rating,
    };
    setAuthorInput("");
    setCommentsInput("");
    setRating(null);
    try {
      await Api.postComment(id,comment)
      getRecipe(id)
    } catch (error) {
      console.log(error);
    }
  };

  return Object.values(recipe).length === 0 ? (
    <Loading />
  ) : (
    <div className="main content" style={{padding:"30px 0",margin:0}} >
      <Card>
        <CardBody>
          <div style={{ width: "80%" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <div
                  className="image"
                  style={{ backgroundImage: `url(${recipe?.image})` }}
                ></div>
              </div>
              <div style={{ width: 500 }}>
                <CardTitle tag="h1">{recipe?.name}</CardTitle>
                <CardSubtitle tag="h2">Descrição</CardSubtitle>
                <CardText>{recipe?.description}</CardText>
              </div>
            </div>
          </div>
          <h2>Ingredientes</h2>
          <ul>
            {recipe?.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <div
            style={{
              display: "flex",
              width: "50%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h5>
              <MdTimer />
              {recipe?.time}
            </h5>
            <h5>{recipe?.level}</h5>
            <p style={{ display: "flex" }}>
              <span>
                {[...Array(recipe?.rate)].map((star, index) => (
                  <MdStar key={index} color="#ffc107" size={50} />
                ))}
                {[...Array(5 - recipe?.rate)].map((star, index) => (
                  <MdStar key={index} color="#e4e5e9" size={50} />
                ))}
                {recipe?.comments.length}{" "}
                {recipe?.comments.length < 2 ? "voto" : "votos"}
              </span>
            </p>
          </div>
          <h2>Preparo</h2>
          <ul>
            {recipe?.preparation?.map((step, index) => (
              <li key={index}>
                <span style={{color:"#978f84",fontSize:40}}><b>{index + 1}</b></span> {step}
              </li>
            ))}
          </ul>
          <AddComment
            handleSubmit={handleSubmit}
            changeInputAuthor={changeInputAuthor}
            changeInputComments={changeInputComments}
            changeInputRating={changeInputRating}
            authorInput={authorInput}
            commentsInput={commentsInput}
            rating={rating}
          />
          <CommentRecipe filteredComments={recipe.comments} />
        </CardBody>
      </Card>
    </div>
  );
};
