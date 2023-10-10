import React from "react";
import "./styles.css";
import { HiPlusCircle } from "react-icons/hi";

export const RecipeDetail = ({ selectedRecipe, onClose }) => {
  const getIngredients = () => {
    const ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredientKey = `strIngredient${i}`;
      const measureKey = `strMeasure${i}`;

      const ingredient = selectedRecipe[ingredientKey];
      const measure = selectedRecipe[measureKey];

      if (!ingredient || !measure) {
        break;
      }
      ingredients.push(`${measure} -- ${ingredient}`);
    }
    return ingredients;
  };
  const recipeIngredients = getIngredients();

  return (
    <div className="detail-container">
      <div className="recipe-info">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <h2>{selectedRecipe.strMeal}</h2>
            <p>
              Video link:{" "}
              <a
                href={selectedRecipe.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "blue" }}
              >
                {" "}
                Click here ...{" "}
              </a>
            </p>
          </div>
          <div>
            <img
              style={{ width: "100%", borderRadius: "10px" }}
              src={selectedRecipe.strMealThumb}
              alt="#"
            />
          </div>
          <button
            style={{
              height: "2rem",
              width: "50%",
              fontSize: "1rem",
              borderRadius: "5px",
              fontWeight: "600",
              marginTop: "10px",
            }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
      <div className="ingredient-info">
        <h2>Ingredients</h2>

        <ul>
          {recipeIngredients.map((ingredient) => (
            <li className="ingredients-list" key={ingredient}>
              <HiPlusCircle
                style={{ marginRight: "5px", color: "skyblue" }}
              ></HiPlusCircle>{" "}
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="instruction-info">
        <h2>Instruction</h2>
        <p>{selectedRecipe.strInstructions}</p>
      </div>
    </div>
  );
};
