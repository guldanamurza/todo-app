import React from "react";
import Button from "./button/Button";

const TodoListItem = ({ todos, handleDaleteValue, handleUpdate }) => {
  console.log(todos);
  return (
    <ul className="ul">
      {todos.map((item) => (
      <li className="value-input" key={item.id}>
        {item.title}

        <div className="checkbox">
          <Button
            onClick={() => handleUpdate(item.id)}
            backgroundColor={"lime"}
          >
            {" "}
            UPDATE
          </Button>
          <Button
            onClick={() => handleDaleteValue(item.id)}
            backgroundColor={"red"}
          >
            {" "}
            DELETE
          </Button>
        </div>
      </li>
      ))}
    </ul>
  );
};

export default TodoListItem;
