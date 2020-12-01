import React from "react";
import "./../styles/App.css";

function App() {
  const [listItem, setListItem] = React.useState("");

  const [list, setList] = React.useState([]);

  const handleChange = (event) => {
    setListItem(event.target.value);
  };

  const handleClick = () => {
    let newList = [...list];
    newList.push(listItem);
    setList(newList);
  };

  return (
    <div id="main">
      <textarea id="task" onChange={handleChange}></textarea>
      <br />
      <br />
      <button id="btn" onClick={handleClick}>
        ADD
      </button>
      <ul>
        {list.map((item) => (
          <li className="list">
            {item}
            <button className="edit">Edit</button>
            <button className="delete">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
