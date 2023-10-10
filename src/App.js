import { useEffect, useState } from "react";
import "./App.css";
import { BD_SEARCH_BASE_URL } from "./urls";
import { RecipeList } from "./components/RecipeList";
import { Categories } from "./components/Categories";
import { SearchButton } from "./components/SearchButton";
import { Header } from "./components/Header";
import { RecipeDetail } from "./components/RecipeDetail";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log(BD_SEARCH_BASE_URL + searchQuery);
    fetch(BD_SEARCH_BASE_URL + searchQuery)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) return setRecipes(data.meals);
      })
      .catch((error) => setRecipes([]));
  };

  const fetchData = () => {
    fetch(BD_SEARCH_BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) return setRecipes(data.meals);
      })
      .catch((error) => setRecipes([]));
  };

  useEffect(fetchData, []);

  const filterRecipesByCategory = (category) => {
    const filtered = recipes.filter(
      (recipe) => recipe.strCategory === category
    );
    setFilteredRecipes(filtered);
  };

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseRecipeDetail = () => {
    setSelectedRecipe(null);
  };

  return (
    <div className="App">
      <Header
        filterRecipesByCategory={filterRecipesByCategory}
        setSearchQuery={setSearchQuery}
        fetchData={fetchData}
        setSelectedRecipe={setSelectedRecipe}
      />
      <SearchButton
        handleSearch={handleSearch}
        setSearchQuery={setSearchQuery}
        filterRecipesByCategory={filterRecipesByCategory}
        recipes={recipes}
        searchQuery={searchQuery}
      />
      <Categories
        recipes={recipes}
        filterRecipesByCategory={filterRecipesByCategory}
      />
      <RecipeList
        recipes={filteredRecipes.length > 0 ? filteredRecipes : recipes}
        handleSelectRecipe={handleSelectRecipe}
        selectedRecipe={selectedRecipe}
      />
      {selectedRecipe ? (
        <RecipeDetail
          selectedRecipe={selectedRecipe}
          onClose={handleCloseRecipeDetail}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
