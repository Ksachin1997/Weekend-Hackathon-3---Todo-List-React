import React from "react";
import "./../styles/App.css";

function App() {
  const [listItem, setListItem] = React.useState({ name: "", id: "" });

  const [list, setList] = React.useState([]);

  const handleChange = (event) => {
    setListItem({ name: event.target.value, id: list.length });
  };

  const handleClick = () => {
    if (listItem.name.trim().length === 0) {
      return;
    }
    let newList = [...list];
    newList.push(listItem);
    setList(newList);
  };

  const handleDelete = (key) => {
    let newList = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i].id === key) {
        continue;
      }
      newList.push(list[i]);
    }

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
          <li className="list" key={item.id}>
            {item.name}
            <button className="edit">Edit</button>
            <button className="delete" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
