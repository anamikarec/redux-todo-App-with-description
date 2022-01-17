import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../redux/action";

function TodoItem({ title, status, onDelete, id }) {
  return (
    <div style={{ display: "flex", padding: "1rem", gap: "2rem" }}>
      <div>{title}</div>
      <div>{`${status}`}</div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}

function TodoList() {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    const action = removeTodo(id);
    dispatch(action);
  };
  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default TodoList;
