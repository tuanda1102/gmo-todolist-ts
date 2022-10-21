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
  const [inputValue, setInputValue] = useState<string>(todo.title);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleUpdateTodo = () => {
    if (inputValue.trim()) {
      console.log("handleUpdateTodo", inputValue);
    }
  };

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

      <input
        disabled={disabled}
        className={cx("input")}
        onChange={handleChangeInput}
        onBlur={handleUpdateTodo}
        value={inputValue}
      />

      <span className={cx("icon", "trash-icon")}>
        <FontAwesomeIcon icon={faTrash} />
      </span>
    </div>
  );
};

export default Todo;
