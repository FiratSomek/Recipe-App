import React from "react";
import { BiHome } from "react-icons/bi";

export const Header = ({
  filterRecipesByCategory,
  setSearchQuery,
  fetchData,
  setSelectedRecipe,
}) => {
  const handleHomeClick = () => {
    setSearchQuery("");
    fetchData();
    setSelectedRecipe("");
    if (filterRecipesByCategory) {
      filterRecipesByCategory(null);
    }
  };

  return (
    <div>
      {" "}
      <div className="home-page">
        <h3 onClick={handleHomeClick}>
          <BiHome style={{ marginRight: "10px" }} />
          Home
        </h3>
      </div>
    </div>
  );
};
