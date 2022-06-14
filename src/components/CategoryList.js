import CategoryItem from "./CategoryItem";

function CategoryList({ catalog = [] }) {
  return (
    <div className="list">
      {catalog.map((item) => (
        <CategoryItem key={item.idCategory} {...item} />
      ))}
    </div>
  );
}

export default CategoryList;
