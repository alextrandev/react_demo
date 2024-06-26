const Book = ({
  title,
  author,
  description,
  showDescription,
  visibilityHandler,
}) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{author}</p>
      {/* TODO: Include a button to toggle the visibility of the description. 
      The button text should change based on the description's visibility state.*/}
      <button onClick={visibilityHandler}>{showDescription ? "Hide" : "Show"} description</button>
      {/* TODO: show description only when showDescription is true */}
      {showDescription && <p className="description">{description}</p>}
    </div>
  );
}
export default Book;
