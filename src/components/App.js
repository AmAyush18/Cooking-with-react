import React, { useState } from "react";
import RecipeList from "./RecipeList";
import "../css/app.css";

export const ThemeContext = React.createContext();

function App() {
  
  const [recipes, setRecipes] = useState(sampleRecipes);

  function handleRecipeAdd() {
    console.log("handleRecipeAdd Clicked")
    const newRecipe = [{
      id: Math.round(Math.random * Math.random * 1000),
      name: "New",
      servings: 1,
      cookTime: "1:00",
      instructions: "Instr..",
      ingredients: [
        {
          id: Math.round(Math.random * Math.random * 1000),
          name: "Name", 
          amount: "1 tbs",
        }
      ]
    }];
    setRecipes([...recipes, newRecipe]);
  }

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return <RecipeList recipes={recipes} handleRecipeAdd={handleRecipeAdd} handleRecipeDelete= {handleRecipeDelete} />;
}

const sampleRecipes = [
  {
    id: 1,
    name: "Plain Paneer",
    cookTime: "1:45",
    servings: 3,
    instructions:
      "1. Just Cook a plain Matar ki Sabji.\n2. Put Paneer in a sabji.\n3. Eat it garma garam.",
    ingredient: [
      {
        id: 1,
        name: "Paneer",
        amount: "400gms",
      },
      {
        id: 2,
        name: "Sabji",
        amount: "400gms",
      },
    ],
  },
  {
    id: 2,
    name: "Aloo Matar",
    cookTime: "2:00  ",
    servings: 4,
    instructions:
      "1. Just Fry Pyaz and Tamatar.\n2. Put Aloo and Matar in a Pan and close the lid.\n3. Eat it garma garam.",
    ingredient: [
      {
        id: 1,
        name: "Aloo",
        amount: "250gms",
      },
      {
        id: 2,
        name: "Matar",
        amount: "150gms",
      },
    ],
  },
];

export default App;
