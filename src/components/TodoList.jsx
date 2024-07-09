import TodoListItem from "./TodoListItem";

const TodoList = ({  handleDaleteValue,handleUpdate, todos}) => {
  return (
    <div>
      <TodoListItem todos={todos} handleDaleteValue={handleDaleteValue} handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default TodoList;
