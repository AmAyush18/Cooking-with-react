import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import RecipeList from "./RecipeList";
import "../css/app.css";


export const ThemeContext = React.createContext();

const uid = function(){
  return Date.now().toString(36) + Math.random().toString(36);
}

function App() {
  
  const [recipes, setRecipes] = useState(sampleRecipes);

  

  function handleRecipeAdd() {
    console.log("handleRecipeAdd Clicked")
    const newRecipe = [
      {
        id: uuidv4(),
        name: "New Item",
        cookTime: "1:00",
        servings: 2,
        instructions:
          "1. Just Cook a plain Matar ki Sabji.\n2. Put Paneer in a sabji.\n3. Eat it garma garam.",
        ingredient: [
          {
            id: uuidv4(),
            name: "Paneer",
            amount: "400gms"
          }
        ],
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
    id: uuidv4(),
    name: "Plain Paneer",
    cookTime: "1:45",
    servings: 3,
    instructions:
      "1. Just Cook a plain Matar ki Sabji.\n2. Put Paneer in a sabji.\n3. Eat it garma garam.",
    ingredient: [
      {
        id: uuidv4(),
        name: "Paneer",
        amount: "400gms",
      },
      {
        id: uuidv4(),
        name: "Sabji",
        amount: "400gms",
      },
    ],
  },
  {
    id: uuidv4(),
    name: "Aloo Matar",
    cookTime: "2:00  ",
    servings: 4,
    instructions:
      "1. Just Fry Pyaz and Tamatar.\n2. Put Aloo and Matar in a Pan and close the lid.\n3. Eat it garma garam.",
    ingredient: [
      {
        id: uuidv4(),
        name: "Aloo",
        amount: "250gms",
      },
      {
        id: uuidv4(),
        name: "Matar",
        amount: "150gms",
      },
    ],
  },
];

export default App;
