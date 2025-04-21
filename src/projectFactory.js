function createProject(name = 'Default') {
    return {
      id: crypto.randomUUID(),
      name,
      todos: [],
  
      addTodo(todo) {
        this.todos.push(todo);
      },
  
      removeTodo(todoId) {
        this.todos = this.todos.filter(todo => todo.id !== todoId);
      },
  
      getTodos() {
        return this.todos;
      }
    };
  }

  export {createProject};