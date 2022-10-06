import React, {useContext} from "react";
import Recipe from "./Recipe";
import {RecipeContext} from './App'

function RecipeList({recipes}) {

  // we just want handleRecipeAdd so we destructure it

  const { handleRecipeAdd } = useContext(RecipeContext)
  
  return (
    
    <div className="recipe-list">
      <div>
        {recipes && recipes.map((recipe) => {
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
