import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import RecipeList from "./RecipeList";
import "../css/app.css";

export const RecipeContext = React.createContext()

// export const ThemeContext = React.createContext();

const LOCAL_STORAGE_KEY = 'cookingWithReactApps.recipes'


function App() {
  
  const [recipes, setRecipes] = useState(sampleRecipes);

  //For Storing the recipes value each time our app renders
  useEffect(() => {
    console.log("Rendered")
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes]) // this array tells that when to call it, whenever anyof the parameter present in the arrray changes it is called or rendered

   
  //For loading the values from the local storage and seting it the Recipes 
  useEffect(() =>{
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  const recipeContextValue = {
    // if name of key and value is same we can just specify it once
    handleRecipeAdd,
    handleRecipeDelete
  }

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

  return (
    <RecipeContext.Provider value={recipeContextValue}>
        <RecipeList recipes={recipes}  />
    </RecipeContext.Provider>);
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
