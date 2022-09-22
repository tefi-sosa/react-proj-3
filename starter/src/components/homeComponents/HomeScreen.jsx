import React, { useEffect, useState } from 'react'
import axios from 'axios'

import AdBanner from './AdBanner'

import RecipeSection from './RecipeSection';

const HomeScreen = () => {  
  const [recipes, setRecipes] = useState([])

  const getRecipes = () => {
    axios
      .get(`https://recipes.devmountain.com/recipes`)
      .then((res) => {
        console.log(res.data)        
        setRecipes(res.data)
      })
  }

  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
      <AdBanner />
      <RecipeSection recipes={recipes}></RecipeSection>
    </div>
  )
}

export default HomeScreen