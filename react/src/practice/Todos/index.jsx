/*
Task: Implement a Simple Todo List
Create a simple todo list application using React. The application should have the following features:

Display a list of todos.
Allow users to add new todos.
Allow users to mark todos as completed.
Provide the ability to remove todos.
*/

import React, { useState } from "react";
import "./index.css";
const Todos = () => {
  const [todosInput, setTodosInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [checked, setChecked] = useState(false);

  const handleTodoInput = (e) => {
    setTodosInput(e);
  };
  const handleTodoSubmit = () => {
    if (todosInput.trim() !== "") {
      setTodoList([...todoList, todosInput]);
      setTodosInput("");
    }
  };

  const handleCheckbox = (e, index) => {
    if (e) {
      setCurrentIndex(index);
      setChecked(true);
    } else {
      setCurrentIndex(null);
      setChecked(false);
    }
  };
  return (
    <div>
      <h2>Todo's App</h2>
      <div className="todo__container">
        <input
          placeholder="What's on your mind today ?"
          value={todosInput}
          onChange={(e) => handleTodoInput(e.target.value)}
        />
        <button onClick={handleTodoSubmit}>Add Todo</button>
      </div>
      <hr />
      <div>
        <h3> Your task's </h3>
        {todoList.map((todo, index) => {
          return (
            <div key={index}>
              <li
                className={currentIndex === index && checked ? "checked" : ""}
              >
                {todo}{" "}
                <input
                  type="checkbox"
                  checked={currentIndex === index}
                  onChange={(e) => handleCheckbox(e.target.checked, index)}
                />
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
