function createTodo({ title, description = '', dueDate = null, priority = 'medium'}) {
  return {
    id: crypto.randomUUID(),
    title,
    description,
    dueDate,
    priority,
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
