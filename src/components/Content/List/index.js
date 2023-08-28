import React from "react";
import Item from "./Item";
import { useTodo } from "../../../context/TodoContext";
let filtered = null;
function List() {
  const { todo, filter } = useTodo();

  filtered = todo;
  if (filter !== "all") {
     filtered = todo.filter((data) =>
      filter === "active" ? data.completed === false : data.completed === true
    );
  }

  return (
    <ul className="todo-list">
      {filtered.map((items) => (
        <Item key={items.id} TodoItem={items} />
      ))}
    </ul>
  );
}

export default List;
