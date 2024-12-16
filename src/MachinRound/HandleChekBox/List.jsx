import React, { useState } from "react";

const List = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "play games", checked: false },
    { id: 2, text: "read book", checked: false },
    { id: 3, text: "play chess", checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginBottom: "10px" }}>
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => handleCheckboxChange(task.id)}
            />
            <span style={{ marginLeft: "10px" }}>{task.text}</span>
            {task.checked && (
              <button
                onClick={() => handleDelete(task.id)}
                style={{ marginLeft: "10px" }}
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
