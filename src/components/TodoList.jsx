import React from "react";
import { useImmerReducer } from "use-immer";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const initialTodos = [
  { id: 1, title: "Doomsday Prepper", completed: false },
  { id: 2, title: "Underground Bunker", completed: false },
];

function todoReducer(draft, action) {
  switch (action.type) {
    case "ADD_TODO":
      draft.unshift({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
      break;
    case "TOGGLE_TODO":
      const todo = draft.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      break;
    case "DELETE_TODO":
      return draft.filter((t) => t.id !== action.payload);
    case "EDIT_TODO":
      const editTodo = draft.find((t) => t.id === action.payload.id);
      if (editTodo) editTodo.title = action.payload.newTitle;
      break;
    default:
      throw new Error("Unknown action type");
  }
}

function TodoList() {
  const [todos, dispatch] = useImmerReducer(todoReducer, initialTodos);

  const addTodo = (title) => dispatch({ type: "ADD_TODO", payload: title });
  const toggleTodo = (id) => dispatch({ type: "TOGGLE_TODO", payload: id });
  const deleteTodo = (id) => dispatch({ type: "DELETE_TODO", payload: id });
  const editTodo = (id, newTitle) =>
    dispatch({ type: "EDIT_TODO", payload: { id, newTitle } });

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <TodoForm onAddTodo={addTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
