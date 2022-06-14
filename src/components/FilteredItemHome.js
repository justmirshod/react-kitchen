import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getFilterCategory } from "../api";
import Loader from "./Loader";
import FilteredItemList from "./FilteredItemList";
function FilteredItemHome() {
  const { id } = useParams();
  const [meals = [], setMeals] = useState([]);

  useEffect(() => {
    getFilterCategory(id).then((data) => {
      setMeals(data.meals);
    });
  }, []);

  return <>{!meals.length ? <Loader /> : <FilteredItemList meals={meals} />}</>;
}

export default FilteredItemHome;
