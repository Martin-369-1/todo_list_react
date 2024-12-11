export default (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.newTodo];

    case "delete":
      return state.filter((todo) => todo.id !== action.id);

    case "changeStatus":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });

    default:
      return state;
  }
};
