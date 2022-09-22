import React, {useState} from "react";
import { Formik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const NewRecipeScreen = () => {
  const navigate = useNavigate()

  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState("")
  const [quantity, setQuantity] = useState("")

  // const url = "https://recipes.devmountain.com";    

  const addIngredient = () => {
    setIngredients([...ingredients,{ name, quantity} ])
    setName("");
    setQuantity("");
  }

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
      console.log(values)
      values.ingredients = ingredients;
      console.log(values);
      
    axios
      .post(`https://recipes.devmountain.com/recipes`, values)
      .then((res) => {
        console.log(res.data);
        navigate('/')

      })
      .catch((err) => {
        console.log(err);
      });

  }
  
  const ingredientDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

//   const handleSubmit = () => {
//     navigate(``)
// }

  return (
    <section className="newRecipe-section">
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (

        <form onSubmit={handleSubmit}>
          <div className="new-recipe-input">
            <input 
              placeholder="Name"
              value={values.recipeName}
              onChange={handleChange}
              name="recipeName"
              />
            <input 
              type="text" 
              placeholder="Image URL"
              value={values.imageURL}
              onChange={handleChange}
              name="imageURL"
              />
          </div>
          <div className="checkbox-container">
          <span className="ckeckbox">
              <input
                type="radio"
                value="Cook"
                onChange={handleChange}
                name="type"
                className="checkbox-circle"
              />
              <h5>Cook</h5>
            </span>
            <span className="ckeckbox">
              <input
                type="radio"
                value="Bake"
                onChange={handleChange}
                name="type"
                className="checkbox-circle"
              />
              <h5>Bake</h5>
            </span>
            <span className="ckeckbox">
              <input
                type="radio"
                value="Drink"
                onChange={handleChange}
                name="type"
                className="checkbox-circle"
              />
              <h5>Drink</h5>
            </span>
          </div>
          <div className="new-recipe-input">
            <input 
              type="text" 
              placeholder="Prep Time"
              value={values.prepTime}
              onChange={handleChange}
              name="prepTime"
              className="small-input"
              />
            <input 
              type="text" 
              placeholder="Cook Time"
              value={values.cookTime}
              onChange={handleChange}
              name="cookTime"
              className="small-input"
              />
            <input 
              type="text" 
              placeholder="Serves"
              value={values.serves}
              onChange={handleChange}
              name="serves"
              className="small-input"
              />
          </div>
          <div className="new-recipe-input">
            <div className="ingredient-container">
              <input
                  placeholder="Ingredient"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
              />
              <input
                  placeholder="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <ul>
              {ingredientDisplay}
            </ul>
          </div>
          <button 
            className="orange-btn"
            type="button"
            onClick={addIngredient}
            >Add Another</button>
          <textarea 
            type="text" 
            rows={7}
            placeholder="What are the instructions?"
            value={values.instructions}
            onChange={handleChange}
            name="instructions"
            />
          <button type="submit" className="save-btn" >Save</button>
        </form>
      )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
