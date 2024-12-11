import { useState, useContext } from "react";
import { todoContext } from "../App";
import { v4 as uuid } from "uuid";
import { MdOutlinePlaylistAdd } from "react-icons/md";

const AddTodo = () => {
  const { handleTodoList } = useContext(todoContext);
  const [input, setInput] = useState("");

  const addToDo = () => {
    const newTodo = {
      id: uuid(),
      task: input,
      completed: false,
    };

    handleTodoList({ type: "add", newTodo });
    setInput("");
  };

  return (
    <section className="flex justify-center pb-9">
      <div className="flex items-center w-1/3 px-3 py-2 rounded-sm bg-slate-300 h-1/6 drop-shadow-sm">
        <input
          className="w-11/12 h-full bg-transparent focus:outline-none"
          type="text"
          placeholder="enter task"
          value={input}
          onChange={(Event) => setInput(Event.target.value)}
        />
        <button className="1/12" onClick={addToDo}>
          <MdOutlinePlaylistAdd className="text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default AddTodo;
