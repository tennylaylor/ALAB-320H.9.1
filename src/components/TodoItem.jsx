import React, { useState } from 'react';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const handleSave = () => {
    onEdit(todo.id, editText);
    setIsEditing(false);
    console.log('Todo edited:', editText);
  };

      />
     (
      <span className={todo.completed ? "completed" : ""}>{todo.title}</span>
    )}
    {isEditing ? (
      <button onClick={handleSave}>Save</button>
    ) : (
      <>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleEdit} className="btn-item btn-edit">
          Edit
        </button>
        <button
          onClick={() => dispatch({ type: "DELETE_TODO", id: todo.id })}
          disabled={!todo.completed}
          className="btn-item btn-delete"
        >
          Delete
        </button>
      </>
    )}
  </li>


export default TodoItem;
