import React, { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import styles from "./Todo.module.scss";
import { ITodo } from "../../types/todo";

const cx = classNames.bind(styles);

interface TodoItemProps {
  todo: ITodo;
}

const Todo: React.FC<TodoItemProps> = ({ todo }) => {
  const [disabled, setDisabled] = useState<boolean>(true);

  return (
    <div
      className={cx("wrapper")}
      onDoubleClick={() => {
        setDisabled(!disabled);
      }}
      onBlur={() => {
        setDisabled(true);
      }}
    >
      {todo.status === "completed" ? (
        <span className={cx("icon", "radio", "checked")}></span>
      ) : (
        <span className={cx("icon", "radio")}></span>
      )}

      <input disabled={disabled} className={cx("input")} value={todo.title} />

      <span className={cx("icon", "trash-icon")}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </div>
  );
};

export default Todo;
