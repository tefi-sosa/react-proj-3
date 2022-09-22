import React , {useState} from 'react'
import { BiSearchAlt2 } from "react-icons/bi";
import RecipeCard from '../detailComponents/RecipeCard';

function RecipeSection( {recipes} ) {

  const [search, setSearch] = useState("")

  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase()
      let searchParams = search.toLowerCase()
      return title.includes(searchParams)
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe}></RecipeCard>
    })

  return (
    <div className='recipe-section'>
      <span className='search'>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input 
          className='input-search'
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"></input>
      </span>
      <div className='recipe-container'>
        {recipeDisplay ? recipeDisplay : <h2>No Recipes</h2>}
      </div>
    </div>
  )
}

export default RecipeSection