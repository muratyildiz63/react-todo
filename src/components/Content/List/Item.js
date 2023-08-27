import React from "react";
import { useTodo } from "../../../context/TodoContext";

function Item({ TodoItem }) {
const {complutedChange,todoDelete}=useTodo()
  return (
    <li className={TodoItem.completed ? "completed" : ""} key={TodoItem.id}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={TodoItem.completed}
          onChange={()=>complutedChange(TodoItem.id)}
        />
        <label>{TodoItem.text}</label>
        <button className="destroy" onClick={()=>todoDelete(TodoItem.id)}></button>
      </div>
    </li>
  );
}

export default Item;
