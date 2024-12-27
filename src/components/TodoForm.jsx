function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title.trim()) {
      return;
    }
    const newToDo = { ...formData, id: Date.now() };
    dispatch({ type: ACTIONS.ADD_TODO, payload: newToDo });

    setFormData({ title: "", completed: false });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default TodoForm;