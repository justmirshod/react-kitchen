import React from "react";
import FilteredItem from "./FilteredItem";

const FilteredItemList = (props) => {
  const { meals } = props;
  console.log(meals);
  return (
    <div className="list">
      {meals.map((item) => (
        <FilteredItem key={item.idMeal} {...item} />
      ))}
    </div>
  );
};

export default FilteredItemList;
