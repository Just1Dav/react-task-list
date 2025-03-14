import { ITask } from "../../interfaces";
import { Checkbox } from "./CheckBox/Checkbox";

import trashIcon from "../../assets/trash-icon.svg";
import style from "./TaskList.module.css";

export function TaskList(props: {
  tasks: ITask[];
  updateTask: (newTaskInfo: ITask) => void;
  deleteTask: (taskToDelete: ITask) => void;
}) {
  const { tasks, updateTask, deleteTask } = props;

  const completedTasks = tasks.filter((task) => task.isCompleted);

  function handleTaskCompletion(task: ITask) {
    const newTaskInfo: ITask = { ...task, isCompleted: !task.isCompleted };
    updateTask(newTaskInfo);
  }

  function handleDeleteTask(taskToDelete: ITask) {
    deleteTask(taskToDelete);
  }

  return (
    <div className={style.wrapper}>
      <header className={style.header}>
        <div className={style.createdWrapper}>
          <span>Tarefas criadas</span>
          <span className={style.badge}>{tasks.length}</span>
        </div>
        <div className={style.completedWrapper}>
          <span>Concluídas</span>
          <span className={style.badge}>{`${completedTasks.length} de ${tasks.length}`}</span>
        </div>
      </header>
      {tasks.map((task) => {
        return (
          <div key={task.id + task.title} className={style.container}>
            <Checkbox task={task} onChange={() => handleTaskCompletion(task)} />
            <p className={task.isCompleted ? style.completedTaskTitle : style.taskTitle}>
              {task.title}
            </p>
            <img src={trashIcon} alt="ícone de lixeira" onClick={() => handleDeleteTask(task)} />
          </div>
        );
      })}
    </div>
  );
}
