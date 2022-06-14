import { Link } from "react-router-dom";
function CategoryItem(props) {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;
  return (
    <div className="card">
      <div className="card-image">
        <img src={strCategoryThumb} alt="Img is not defined" />
      </div>
      <div className="card-content">
        <h3 className="card-title">
          <b>{strCategory.split(" ").splice(0, 4).join(" ")}</b>
        </h3>
        <p>{strCategoryDescription.slice(0, 60) + "..."}</p>
      </div>
      <div className="card-action">
        <Link to={`/${strCategory}`}>
          <button className="btn">Watch category</button>
        </Link>
      </div>
    </div>
  );
}

export default CategoryItem;
