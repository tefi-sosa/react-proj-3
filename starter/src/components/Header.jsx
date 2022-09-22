import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
          <Link to=""><button className="nav">Home</button></Link>
          <Link to="/newRecipe"><button className="nav">Add Recipe</button></Link>
      </nav>
    </header>
  );
};

export default Header;
