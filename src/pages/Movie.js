import { useParams, useNavigate } from "react-router";
function Movie() {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>Some Movies width id: {id}</h1>;
      <button className="btn" onClick={() => navigate(-1)}>
        Go back
      </button>
    </>
  );
}

export default Movie;
