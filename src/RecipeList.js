import React from "react";
import RecipeView from "./RecipeView";
function RecipeList( {recipes, deleteRecipe})  {

  return (
    <div className="recipe-list">
      <table>
        <thead>

          <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>

        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
           
            <RecipeView
              key={index}
              recipe={recipe}
              deleteRecipe={() => deleteRecipe(index)}
              />
              
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
