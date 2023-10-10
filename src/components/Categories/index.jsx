import "./styles.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

export const Categories = ({ recipes, filterRecipesByCategory }) => {
  const uniqueCategories = new Set();

  const handleCategorySelect = (selectedCategory) => {
    filterRecipesByCategory(selectedCategory);
  };

  recipes.forEach((recipe) => {
    uniqueCategories.add(recipe.strCategory);
  });

  const uniqueCategoryList = Array.from(uniqueCategories);

  function getCategoryThumbnail(category) {
    const recipe = recipes.find((r) => r.strCategory === category);
    return recipe ? recipe.strMealThumb : "";
  }

  return (
    <div className="category-container">
      <Splide
        options={{
          perMove: 2,
          perPage: 6,
          arrows: true,
          pagination: false,
          drag: "free",
          gap: "5rem",
          padding: 50,
        }}
      >
        {uniqueCategoryList.map((category, index) => {
          return (
            <SplideSlide key={index}>
              <div
                className="category-item"
                key={index}
                onClick={() => handleCategorySelect(category)}
                style={{
                  backgroundImage: `url(${getCategoryThumbnail(category)})`,
                }}
              >
                {category}
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
};

{
  /* <div>
        {uniqueCategoryList.map((category, index) => {
          return (
            <Card
              className="category-item"
              key={index}
              style={{
                backgroundImage: `url(${getCategoryThumbnail(category)})`,
              }}
            >
              {category}
            </Card>
          );
        })}
      </div> */
}
