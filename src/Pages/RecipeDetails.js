import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./RecipeDetails.css";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Loading } from "../Components/Loading";
import { MdTimer, MdStar } from "react-icons/md";
import { AddComment } from "../Components/AddComment";
import { CommentRecipe } from "../Components/CommentRecipe";

export const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [authorInput, setAuthorInput] = useState("");
  const [commentsInput, setCommentsInput] = useState("");
  const [star, setStar] = useState(0);
  const [rating, setRating] = useState(null);
  useEffect(() => {
    const getRecipe = async () => {
      try {
        const { data } = await axios.get(
          `https://ironrest.herokuapp.com/recipes4u/${id}`
        );

        setRecipe(data);
      } catch (error) {
        console.log(error);
      }
    };
    getRecipe();
  }, [id]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const { data } = await axios.get(
          "https://ironrest.herokuapp.com/commentsRecipes"
        );
        setComments(data);
      } catch (error) {
        console.log(error);
      }
    };
    getComments();
  }, []);
  useEffect(() => {
    const commentsByRecipe = () => {
      const commentsRecipe = comments.filter(
        (comment) => comment.idRecipe === id
      );
      setFilteredComments(commentsRecipe);
    };
    commentsByRecipe();
  }, [comments, id]);

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
      author: authorInput,
      comment: commentsInput,
      rate: rating,
      created_at: new Date(),
    };
    setAuthorInput("");
    setCommentsInput("");
    setRating(null);
    try {
      await axios.post(
        "https://ironrest.herokuapp.com/commentsRecipes",
        comment
      );
      setComments([...comments, comment]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const filteredRate = async () => {
      try {
        if (filteredComments.length === 0) {
          await axios.put(`https://ironrest.herokuapp.com/recipes4u/${id}`, {
            rate: 0,
          });
          setStar(0);
        } else {  
          let number =
            filteredComments
              .map((element) => Number(element.rate))
              .reduce((acc, cur) => acc + cur, 0) / filteredComments.length;
          await axios.put(`https://ironrest.herokuapp.com/recipes4u/${id}`, {
            rate: Math.round(number),
          });
          setStar(Math.round(number));
        }
      } catch (error) {
        console.log(error);
      }
    };
    filteredRate();
  }, [filteredComments, id]);

  return Object.values(recipe).length === 0 ? (
    <Loading />
  ) : (
    <div className="main content" style={{/*backgroundColor:"#d9d9db",*/padding:"30px 0",margin:0}} >
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
                {[...Array(star)].map((star, index) => (
                  <MdStar key={index} color="#ffc107" size={50} />
                ))}
                {[...Array(5 - star)].map((star, index) => (
                  <MdStar key={index} color="#e4e5e9" size={50} />
                ))}
                {filteredComments.length}{" "}
                {filteredComments.length < 2 ? "voto" : "votos"}
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
          <CommentRecipe filteredComments={filteredComments} />
        </CardBody>
      </Card>
    </div>
  );
};
