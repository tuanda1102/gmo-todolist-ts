import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./TodoForm.module.scss";
import { addTodo } from "../../redux/action-creators";
import { useAppDispatch } from "../../hooks";
import { StatusTodo } from "../../types/todo";

const cx = classNames.bind(styles);

const TodoForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      if (inputValue.trim()) {
        const todo = {
          title: inputValue,
          status: "not_started" as StatusTodo,
        };
        addTodo(dispatch, todo);
        setInputValue("");
      }
    }
  };

  return (
    <div className={cx("wrapper")}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className={cx("input")}
        placeholder="Add a todo..."
        onKeyUp={handleAddTodo}
      />
    </div>
  );
};

export default TodoForm;
