import { useContext } from "react";
import { todoContext } from "../App";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { MdDelete } from "react-icons/md";

const Todo = ({ id, task, completed }) => {
  const { handleTodoList } = useContext(todoContext);
  console.log(completed);

  return (
    <li className="bg-slate-50 rounded-lg flex justify-between px-6 py-3 mb-2">
      <button onClick={() => handleTodoList({ type: "changeStatus", id })}>
        {completed ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </button>
      <h1 className="">{completed ? <s>{task}</s> : task}</h1>
      <button onClick={() => handleTodoList({ type: "delete", id })}>
        <MdDelete />
      </button>
    </li>
  );
};

export default Todo;
