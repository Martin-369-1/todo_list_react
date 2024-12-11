import { useReducer } from "react";
import todoListReducer from "./state/todoList";
import TodoList from "./components/TodoList";
import { createContext } from "react";
import Header from "./components/Header";
import bg from "./assets/bg.jpg";
import AddTodo from "./components/AddTodo";

export const todoContext = createContext(null);

const App = () => {
  const [todoList, handleTodoList] = useReducer(todoListReducer, []);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1 className="absolute text-3xl top-6 font-cursive">Todo App</h1>
      <div className="relative w-2/3 py-4 text-center bg-white bg-center bg-cover rounded-sm h-96 backdrop-blur-md bg-opacity-20 drop-shadow-2xl">
        <todoContext.Provider value={{ todoList, handleTodoList }}>
          <AddTodo />
          <TodoList />
        </todoContext.Provider>
      </div>
    </div>
  );
};

export default App;
