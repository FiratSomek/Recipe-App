import "./styles.css";

export const RecipeList = ({ recipes, handleSelectRecipe, selectedRecipe }) => {
  return (
    <div className="recipes-board">
      <h1 className="recipes-title">Just For You</h1>{" "}
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li
            className="recipe-item"
            key={recipe.idMeal}
            onClick={() => handleSelectRecipe(recipe)}
            style={{
              display: selectedRecipe
                ? selectedRecipe.idMeal === recipe.idMeal
                  ? "block"
                  : "none"
                : "block",
            }}
          >
            <img
              className="recipe-img"
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
            />
            <p style={{ margin: "5px", fontWeight: 400 }}>{recipe.strMeal}</p>
            <p style={{ margin: "5px", color: "grey" }}>{recipe.strArea}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
