import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [state, setState] = useState({});

  function handleChangeInput(event) {
    setValue(event.target.value);
    console.log(value);
  }
  function handleUpdate(id) {
  }

  function handleDaleteValue(id) {
    let del = todos.filter((e) => e.id !== id);
    setTodos(del);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newValue = {
      id: Math.random().toString(),
      title: value,
      status: false,
    };

    setTodos([...todos, newValue]);

    console.log(todos);

    setValue("");
  }

  return (
    <div className="todo-form">
      <h1>TODO-LIST</h1>

      <TodoForm
        handleSubmit={handleSubmit}
        value={value}
        handleChangeInput={handleChangeInput}
      />
      <TodoList
        todos={todos}
        handleDaleteValue={handleDaleteValue}
        handleUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
