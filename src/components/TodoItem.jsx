import React, { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const handleSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </li>
    );
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
      <button onClick={() => onDelete(todo.id)} disabled={!todo.completed}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
