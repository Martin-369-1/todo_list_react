import { todoContext } from "../App";
import { useContext } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const { todoList } = useContext(todoContext);

  return (
    <section className=" flex justify-center overflow-y-auto h-72">
      <ul className="block w-2/3">
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            task={todo.task}
            completed={todo.completed}
          />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
