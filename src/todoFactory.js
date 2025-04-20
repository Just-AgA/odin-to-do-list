function createTodo({ title, description = '', dueDate = null, priority = 'medium', notes = '', checklist = [] }) {
  return {
    id: crypto.randomUUID(),
    title,
    description,
    dueDate,
    priority,
    notes,
    checklist,
    isCompleted: false,

    toggleComplete() {
      this.isCompleted = !this.isCompleted;
    },

    update(data) {
      Object.assign(this, data);
    }
  };
}

export {createTodo};
