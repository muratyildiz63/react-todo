import React from "react";
import { useTodo } from "../context/TodoContext";

function FooterContent() {
	const {todo,setTodo,filter,setfilter}=useTodo()
	const clearCompleted=()=>{
		setTodo((prev)=> prev.filter((todos)=> !todos.completed))
	}
  return (
	<footer className="footer">
		<span className="todo-count">
			<strong>{todo.length} </strong>
			item{todo.length>1 &&"s"} left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" className={filter==='all' ? "selected" :""}  onClick={()=>setfilter("all")}>All</a>
			</li>
			<li>
				<a href="#/" className={filter==='active' ? "selected" :""} onClick={()=>setfilter("active")}>Active</a>
			</li>
			<li>
				<a href="#/" className={filter==='comleted' ? "selected" :""} onClick={()=>setfilter("comleted")}>Completed</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={clearCompleted}>
			Clear completed
		</button>
	</footer>
  );
}

export default FooterContent;
