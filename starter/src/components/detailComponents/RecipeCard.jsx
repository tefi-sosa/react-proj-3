
import React from 'react'
import { Link } from "react-router-dom";

function RecipeCard( {recipe} ) {
  let imgURL = recipe.image_url

  return (
    <section className='recipes'>
    <div className='recipe-card'>
      <img src={imgURL} alt=''></img>
      <h2>{recipe.recipe_name}</h2>
      <Link to={`/recipe/${recipe.recipe_id}`}><button>See More</button></Link>
    </div>
    </section>    
  )
}

export default RecipeCard