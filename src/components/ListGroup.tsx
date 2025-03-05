import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  const items = ["Feed", "Favourites", "Account", "Settings"];

  return (
    <Fragment>
      <h1>Musication</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
