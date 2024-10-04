import React, { useState, useEffect } from "react";

export default function RecipeGenerator() {
  const [recipe, setRecipe] = useState(null);

  function handleGenerateRecipe() {
    fetch("<recipe-url>")
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  }

  return (
    <div>
      <button onClick={handleGenerateRecipe}>What should I eat?</button>
      {recipe && (
        <div>
          <h2>{recipe.name}</h2>
          <p>Ingredients:</p>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
            <p>Instructions:</p>
            <ol>
              {recipe.ingredients.map((instruction) => (
                <li key={instruction}>{instruction}</li>
              ))}
            </ol>
          </ul>
        </div>
      )}
    </div>
  );
}