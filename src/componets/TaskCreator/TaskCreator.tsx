import { FormEvent, ChangeEvent, useState, InvalidEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import addIcon from "../../assets/add-icon.svg";

import style from "./TaskCreator.module.css";
import { ITask } from "../../interfaces";

interface IProps {
  createNewTask: (newTask: ITask) => void;
}

export function TaskCreator({ createNewTask }: IProps) {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask: ITask = {
      id: uuidv4(),
      title: newTaskTitle,
      isCompleted: false,
    };

    createNewTask(newTask);
    setNewTaskTitle("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskTitle(event.target.value);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  const isNewTaskEmpty = newTaskTitle.length === 0;
  return (
    <div className={style.formWrapper}>
      <form onSubmit={handleCreateNewTask} className={style.newTaskForm}>
        <input
          value={newTaskTitle}
          onChange={handleNewTaskChange}
          onInvalid={handleNewCommentInvalid}
          type="text"
          placeholder="Adicione uma nova tarefa"
          required
        />
        <button type="submit" disabled={isNewTaskEmpty}>
          Criar
          <img src={addIcon} alt="Ícone com o sinal de mais" />
        </button>
      </form>
    </div>
  );
}
