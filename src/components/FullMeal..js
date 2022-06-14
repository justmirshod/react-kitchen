import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealById } from "../api";
import FullMealRecipe from "./FullMealRecipe";
import Loader from "./Loader";
function FullMeal() {
  const { id } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    getMealById(id).then((data) => {
      setDetail(data.meals);
    });
  }, []);

  console.log(detail);

  return (
    <>{!detail.length ? <Loader /> : <FullMealRecipe detail={detail} />}</>
  );
}

export default FullMeal;
