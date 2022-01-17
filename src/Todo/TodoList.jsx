import { useSelector } from "react-redux";

function TodoItem({ title, status }) {
  return (
    <div style={{ display: "flex", padding: "1rem", gap: "2rem" }}>
      <div>{title}</div>
      <div>{`${status}`}</div>
    </div>
  );
}

function TodoList() {
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
}

export default TodoList;
