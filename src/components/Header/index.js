import React from "react";
import TodoAddForm from "./TodoAddForm";


function Header() {
  return (
    <header className="header">
      <h1>todos</h1>
          <TodoAddForm />
    </header>
  );
}

export default Header;
