import { Header } from "./componets/Header/Header";
import { TaskCreator } from "./componets/TaskCreator/TaskCreator";

import style from "./App.module.css";

import "./global.css";
import { useState } from "react";
import { ITask } from "./interfaces";
import { TaskList } from "./componets/TaskList/TaskList";

function App() {
  const [tasksList, setTasksList] = useState<ITask[]>([]);

  function handleCreateNewTask(newTask: ITask) {
    setTasksList((prevState) => [...prevState, newTask]);
  }

  function handleUpdateTask(updatedTask: ITask) {
    setTasksList((prevState) =>
      prevState.map((task) => {
        if (updatedTask.id === task.id) {
          return { ...task, isCompleted: updatedTask.isCompleted };
        }
        return task;
      })
    );
  }

  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <TaskCreator createNewTask={handleCreateNewTask} />
        <TaskList tasks={tasksList} updateTask={handleUpdateTask} />
      </div>
    </>
  );
}

export default App;
