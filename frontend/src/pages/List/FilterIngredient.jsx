import fetchFilterIngredientApi from "../../utils/fetchFilterIngredientApi";

function FilterIngredient({ renderApi }) {
  // INGREDIENT FILTERS
  const ingredientFilter = [
    "Gin",
    "Scotch",
    "Tequila",
    "Vodka",
    "Whiskey",
    "Ricard",
    "Milk",
    "Coffee",
    "Lemon",
    "Yoghurt",
  ]; // Every filters i=
  return (
    <ul className="filter-list">
      {ingredientFilter.map((ele) => (
        // Create a div for every alcoholic filters
        <li key={ele}>
          <a
            href="#ingredient_filter"
            className="button"
            onClick={() =>
              fetchFilterIngredientApi(ele).then((resPosts) =>
                renderApi(resPosts)
              )
            }
          >
            {ele}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default FilterIngredient;
