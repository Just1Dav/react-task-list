import { InputHTMLAttributes } from "react";
import { ITask } from "../../../interfaces";
import style from "./Checkbox.module.css";

interface ICheckbox extends InputHTMLAttributes<HTMLInputElement> {
  task: ITask;
}

export function Checkbox({ task, ...props }: ICheckbox) {
  return (
    <>
      <input type="checkbox" id={task.id} checked={task.isCompleted} {...props} />
      <label htmlFor={task.id} className={style.customCheckbox}></label>
    </>
  );
}
