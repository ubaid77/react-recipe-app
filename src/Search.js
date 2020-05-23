import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import Spinner from "./Spinner";
import "./Search.css";

function Search() {
  const APP_ID = "a74475bc";
  const APP_KEY = "7a94da0cecc0dffe3d93ad7ea951df20";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  const [loading, setLoading] = useState(true);
  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    setLoading(false);
  };

  const setText = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  useEffect(() => {
    getRecipe();
  }, [query]);

  let main;
  if (loading) {
    main = <Spinner />;
  } else {
    main = (
      <div className="food-row">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            img={recipe.recipe.image}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
            source={recipe.recipe.source}
          />
        ))}
      </div>
    );
  }

  return (
    <div>
      <form className="Search" onSubmit={getSearch}>
        <input
          type="text"
          value={search}
          onChange={setText}
          placeholder="Search for food recipes"
        ></input>
        <button type="submit">
          <i className="fas fa-utensils"></i>
        </button>
      </form>
      {main}
    </div>
  );
}

export default Search;
