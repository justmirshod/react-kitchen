import React from "react";
import { Link } from "react-router-dom";

const filteredItem = (props) => {
  const { strMeal, strMealThumb, idMeal } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strMealThumb} alt="Img is not defined" />
      </div>
      <div className="card-content">
        <h3 className="card-title">
          <b>{strMeal.split(" ").splice(0, 4).join(" ")}</b>
        </h3>
      </div>
      <div className="card-action">
        <Link to={`/meal/${idMeal}`}>
          <button className="btn">Show recipe </button>
        </Link>
      </div>
    </div>
  );
};

export default filteredItem;
