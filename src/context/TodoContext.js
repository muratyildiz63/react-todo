import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: "Kahvaltı",
      completed: false,
    },
    {
      id: 2,
      text: "Yemek",
      completed: true,
    },
  ]);
  const addTodo = (text) =>
    setTodo((prev) => [
      ...prev,
      { id: uuidv4(), text: text, completed: false },
    ]);

    
  const complutedChange = (id) => {
    const cloned_todo = [...todo];
    const todoIndex = cloned_todo.findIndex((todo) => todo.id === id);
    const item = cloned_todo[todoIndex];
    item.completed = !item.completed;
    setTodo(cloned_todo);
  };
  const todoDelete = (id) => {
    const cloned_todo = [...todo];
    const todoIndex = cloned_todo.findIndex((todo) => todo.id === id);
  cloned_todo.splice(todoIndex,1)

    setTodo(cloned_todo);
  };

  const values = {
    todo,
    setTodo,
    addTodo,
    complutedChange,
    todoDelete,
  };

  return (
    <TodoContext.Provider value={values}> {children} </TodoContext.Provider>
  );
};
export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error("UseTodo Kullanmak zorunludur");
  }
  return context;
};
