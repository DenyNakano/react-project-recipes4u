import { BarSearch } from "../Components/BarSearch";
import React, { useEffect, useState } from "react";
import { Loading } from "../Components/Loading";
import { Link } from "react-router-dom";
import { MdTimer } from "react-icons/md";
import Api from "../utils/api.utils";

export const Search = () => {
  const[results, setResults] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const inputValue = (element) => {
    setSearchInput(element.target.value);
  };
  const getSearch = async (search) => {
    try {
      const results = await Api.getSearchRecipe(search)
      setResults(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSearch(searchInput);
  }, [searchInput]);
  
  return results ? (
    <div style={{ paddingLeft: 100, paddingTop: 10 }}>
      <div>
        <BarSearch
          getSearch={getSearch}
          search={searchInput}
          inputValue={inputValue}
        />
        <div style={{ display: "flex", flexWrap: "wrap"}}>
          {results.map((recipe) => (
            <div key={recipe._id} id="container">
              <div>
                <Link
                  to={`/recipe/${recipe._id}`}
                  style={{ textDecoration: "none"}}
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
      </div>
    </div>
  ) : (
    <Loading />
  );
};
