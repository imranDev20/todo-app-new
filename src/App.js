import { useState } from "react";
import "./App.css";
import { FiTrash2 } from "react-icons/fi";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      value: "Buy books",
      description: "Ki ar korbo jibone dhet",
      completed: false,
    },
    { id: 2, value: "Tidy room", description: "Valo lagena", completed: false },
    {
      id: 3,
      value: "Sleep",
      description: "E jibon rekhe lav ki ar",
      completed: false,
    },
  ]);

  const [checkedItem, setCheckedItem] = useState({});
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  const addToList = () => {
    const newTask = {
      id: tasks.length + 1,
      value: task,
      description: description,
      completed: false,
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const handleChecked = (id) => {
    const findCheckedItem = tasks.find((elem) => elem.id === id);
    // findCheckedItem.completed = true;
    setCheckedItem(findCheckedItem);

    if (!findCheckedItem.completed) {
      return (findCheckedItem.completed = true);
    } else {
      return (findCheckedItem.completed = false);
    }
  };

  return (
    <div className="bg-polka max-w-sm mx-auto py-20 px-10 my-20 rounded-lg">
      <h1 className="text-center transform rotate-1 bg-yellow-300 mx-auto w-44 px-3 py-1 text-2xl text-neutral-600 rounded">
        To Do List
      </h1>
      <div className="mt-16 ">
        <div className="">
          <input
            className="bg-polka w-full outline-none border-b-4 border-b-yellow-500 border-dotted focus:border-b-orange-600 transition placeholder:text-neutral-500"
            type="text"
            placeholder="Task name"
            onChange={(e) => setTask(e.target.value)}
          />
          <textarea
            className="bg-polka w-full outline-none border-b-4 border-b-yellow-500 border-dotted focus:border-b-orange-600 transition resize-none mt-5 placeholder:text-neutral-500"
            name="description"
            placeholder="Task description..."
            onChange={(e) => setDescription(e.target.value)}
            id=""
            cols="30"
            rows="2"
          ></textarea>
        </div>
        <button
          onClick={addToList}
          className="border-2 border-yellow-500 text-yellow-500 px-3 py-1 transform -rotate-1 focus:text-orange-600 focus:border-orange-600 bg-white rounded inline-block mt-5"
        >
          Add
        </button>
      </div>
      <ul className="my-10">
        {tasks.map((task) => (
          <div key={task.id} className="flex justify-between items-center my-4">
            <div className="flex items-center ">
              <button onClick={() => handleChecked(task.id)}>
                {checkedItem.id === task.id || task.completed === true ? (
                  <BiCheckboxChecked className="text-yellow-500 text-2xl mr-2" />
                ) : (
                  <BiCheckbox className="text-yellow-500 text-2xl mr-2" />
                )}
              </button>
              <div>
                <li className="text-lg text-neutral-700">{task.value}</li>
                <p className="text-neutral-500">{task.description}</p>
              </div>
            </div>

            <button className="text-lg">
              <FiTrash2 className="text-red-500" />
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;
