import React from "react";
import "./../styles/App.css";

function App() {
  const [listItem, setListItem] = React.useState({
    name: "",
    id: "",
    editOption: false
  });

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

  const handleEdit = (key) => {
    let newList = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i].id === key && list[i].editOption === true) {
        return;
      }
      if (list[i].id === key) {
        let newListItem = {
          name: list[i].name,
          id: list[i].id,
          editOption: true
        };
        newList.push(newListItem);
        continue;
      }
      newList.push(list[i]);
    }

    setList(newList);
  };

  let edited = "";

  const handleSave = (key) => {
    if (edited.trim().length === 0) {
      return;
    }

    let newList = [];

    for (let i = 0; i < list.length; i++) {
      if (list[i].id === key) {
        let newListItem = {
          name: edited,
          id: list[i].id,
          editOption: false
        };
        newList.push(newListItem);
        continue;
      }
      newList.push(list[i]);
    }

    setList(newList);
  };

  const handleEditTask = (event) => {
    edited = event.target.value;
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
            <button className="edit" onClick={() => handleEdit(item.id)}>
              Edit
            </button>
            <button className="delete" onClick={() => handleDelete(item.id)}>
              Delete
            </button>
            {item.editOption ? (
              <div>
                <textarea
                  className="editTask"
                  onChange={handleEditTask}
                ></textarea>
                <br />
                <button
                  className="saveTask"
                  onClick={() => handleSave(item.id)}
                >
                  Save
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
