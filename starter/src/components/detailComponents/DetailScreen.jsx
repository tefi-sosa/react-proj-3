import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams} from 'react-router-dom';

const DetailScreen = () => {  
  const { id } = useParams();  
  const [recipe, setRecipe] = useState({});

  const url = `https://recipes.devmountain.com`
  let imgURL = recipe.image_url
  console.log(recipe);


  useEffect(() => {
    axios
        .get(`${url}/recipes/${id}`)
        .then((res) => {
            setRecipe(res.data);
        });
}, []);

  return (
    <section className='detail-section'>
      <div       
      style={{
        background: `linear-gradient(
          100deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${imgURL})`,
        backgroundSize: "cover",
      }}
      className='detail-header'>
        <h1>{recipe.recipe_name}</h1>
      </div>
      <div className='detail-container'>
        <div className='ingredients-container'>
          <div className='ingredient-title'>
            <h2>Recipe</h2>
            <p>Prep Time: {recipe.prep_time}</p>
            <p>Cook Time: {recipe.cook_time}</p>
            <p>Serves: {recipe.serves}</p>
          </div>
          <div className='ingredient-title'>
            <h2>Ingredients</h2>
            {recipe.ingredients && recipe.ingredients.map((ing, index) => {
              return <h4>{ing.quantity} {ing.ingredient}</h4>
            })}
          </div>

        </div>
        <div className='instructions-container'>
          <div>
          <h2>Instructions</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
