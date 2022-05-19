import React from "react";
import { FiTrash2 } from "react-icons/fi";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  const TODO_LOCAL_KEY = "react-todo-list-todos";

  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem(TODO_LOCAL_KEY));
    console.log(localTasks);
    if (localTasks) {
      setTasks(localTasks);
    }
  }, []);

  const addToList = () => {
    if (task !== "" && description !== "") {
      const newTask = {
        id: tasks.length + 1,
        value: task,
        description: description,
        completed: false,
      };
      const newTasks = [...tasks, newTask];
      setTasks(newTasks);
      localStorage.setItem(TODO_LOCAL_KEY, JSON.stringify(newTasks));
    }

    setTask("");
    setDescription("");
  };

  const handleCheck = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );

    toast.success("Task Completed ✌️", {
      position: "top-right",
      className: "!font-['Architects_Daughter'] ",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleDelete = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    const findIndex = tasks.findIndex((task) => task.id === id);
    tasks.splice(findIndex, 1);
    localStorage.setItem(TODO_LOCAL_KEY, JSON.stringify(tasks));
    setTasks(filteredTasks);
  };

  console.log(tasks);

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
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <textarea
            className="bg-polka w-full outline-none border-b-4 border-b-yellow-500 border-dotted focus:border-b-orange-600 transition resize-none mt-7 placeholder:text-neutral-500"
            name="description"
            placeholder="Task description..."
            onChange={(e) => setDescription(e.target.value)}
            id=""
            value={description}
            cols="30"
            rows="4"
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
          <div key={task.id} className="flex justify-between items-start my-4">
            <div className="flex items-start">
              <div onClick={() => handleCheck(task.id)}>
                <li
                  className={`${
                    task.completed ? `line-through` : null
                  } text-lg text-neutral-600`}
                >
                  {task.value}
                </li>
                <p
                  className={`text-neutral-500 ${
                    task.completed ? "line-through" : null
                  }`}
                >
                  {task.description}
                </p>
              </div>
            </div>

            <button className="text-lg mt-2">
              <FiTrash2
                onClick={() => handleDelete(task.id)}
                className="text-red-500"
              />
            </button>
          </div>
        ))}
      </ul>
      <button></button>
    </div>
  );
};

export default Home;
