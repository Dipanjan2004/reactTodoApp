import React, { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  let newTodos = todos;

  const handleSubmit = (e) => {
    e.preventDefault();
    newTodos.push(todos);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        action=""
      >
        <input
          value={todos}
          type="text"
          placeholder="Add a new todo"
          onChange={(e) => {
            setTodos(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </div>
  );
};

export default App;
