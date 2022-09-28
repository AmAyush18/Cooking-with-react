import React from "react";
import Recipe from "./Recipe";

function RecipeList({ recipes, handleRecipeAdd }) {
  return (
    <div className="recipe-list">
      <div>
        {recipes.map((recipe) => {
          // using this spread operator ...recipe would send all our value in a object in the form of key-value pairs
          return (
            <Recipe key={recipe.id} 
                    {...recipe} 
            />);
        })}
      </div>

        <div className="recipe-list_add-recipe-btn">
          <button 
            className="btn btn--primary" 
            onClick={()=>  handleRecipeAdd()}
            >
            Add Recipe</button>
        </div>

    </div>
  );
}

export default RecipeList;
