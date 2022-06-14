import React from "react";
import { useNavigate } from "react-router-dom";

const FullMealRecipe = (props) => {
  const { detail } = props;
  const navigate = useNavigate();

  return (
    <div className="meal">
      {detail.map((el) => (
        <div className="wrapper" key={el.idMeal}>
          <div className="meal-img">
            <img src={el.strMealThumb} alt="Img is not found!" />
            <h5>{el.strMeal}</h5>
            {!el.strYouTube ? (
              <div className="row">
                <h5>Video recipe</h5>
                <iframe
                  title="You tube Video"
                  src={`https://www.youtube.com/embed/${el.strYoutube.slice(
                    -11
                  )}`}
                  allowFullScreen
                />
              </div>
            ) : null}
          </div>

          <div className="recipe">
            <div className="strRecipe">
              <p>
                {" "}
                <span>Recipe</span> : {el.strIngredient1}, {el.strIngredient2},{" "}
                {el.strIngredient3}, {el.strIngredient4}, {el.strIngredient5},{" "}
                {el.strIngredient6}, {el.strIngredient7}, {el.strIngredient8},{" "}
                {el.strIngredient9}
              </p>
              <p>
                <span>Preparation</span> : {el.strInstructions}
              </p>
            </div>
          </div>
        </div>
      ))}
      <button className="btn btn-back" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default FullMealRecipe;
