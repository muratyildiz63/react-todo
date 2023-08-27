import React from "react";
import Item from "./Item";
import { useTodo } from "../../../context/TodoContext";
function List() {
  const  {todo} = useTodo()
//  console.log(Todo)
  return (
    <ul className="todo-list">
{
      todo.map((items) => (
        <Item key={items.id}  TodoItem={items}/>
       ))
}
   
      
    </ul>
  );
}

export default List;
