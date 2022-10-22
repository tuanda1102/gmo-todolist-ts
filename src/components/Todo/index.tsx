import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Todo.module.scss";
import { ITodo, StatusTodo } from "../../types/todo";
import { updateTask, deleteTask } from "../../redux/action-creators";
import { useAppDispatch } from "../../hooks";

const cx = classNames.bind(styles);

interface TodoItemProps {
  todo: ITodo;
}

const Todo: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [inputValue, setInputValue] = useState<string>(todo.title);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleUpdateTodo = () => {
    if (inputValue.trim()) {
      updateTask(dispatch, {
        ...todo,
        title: inputValue,
        status: "not_started",
      });
    }
  };

  const handleMarkClick = () => {
    let status = "";
    todo.status === "not_started"
      ? (status = "completed")
      : (status = "not_started");
    updateTask(dispatch, { ...todo, status: status as StatusTodo });
  };

  const handleDeleteTodo = () => {
    deleteTask(dispatch, todo.id);
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
        <span
          onClick={() => {
            handleMarkClick();
          }}
          className={cx("icon", "radio", "checked")}
        ></span>
      ) : (
        <span
          onClick={() => {
            handleMarkClick();
          }}
          className={cx("icon", "radio")}
        ></span>
      )}

      <input
        disabled={disabled}
        className={cx("input")}
        onChange={handleChangeInput}
        onBlur={handleUpdateTodo}
        value={inputValue}
      />

      <span
        onClick={() => {
          handleDeleteTodo();
        }}
        className={cx("icon", "trash-icon")}
      >
        <svg
          width={28}
          height={28}
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width={28} height={28} fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <use xlinkHref="#image0_4_96" transform="scale(0.0111111)" />
            </pattern>
            <image
              id="image0_4_96"
              width={90}
              height={90}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACJ0lEQVR4nO3YsWoUURiG4e+fXZ1VsiYQRBEExdhZ6Q14AbmCaLRTQURSiOAFWCjYmzIYvQ07O4lIbIxoISJY6MaFZGLIsVBB0ogzJ99Olvfpz7//vMwe2JUAAAAAoKVi1Avs9v7iqd7EenFfKeYUOvafxz9L6dnwyM69088/bO7JgjV1R73Abv3vnQdJulXzFTguxUJ/0OlIup13s2aKUS/wtyRFSppvPCd0NbXs29pomU8XThzupt7DUFySNJlpp7b5lpSWq3LrzskXHzfqDml0dRxIhx5Jut5kxj4wFYqbvarsSrpRd0jtqyP9Onul7vl9aD416NWqO3qc1Q4d0o6kpYy7tFto6fcz19Lojt4sq4WyKn+EdFnSVJNZLfY1Qk82DlZ3R70IAADAv2X74+XL+TMp16w2OfryXZZG/DI0IbQJoU0IbUJoE0KbENqE0CaENiG0CaFNCG1CaBNCmxDahNAmhDYhtAmhTQhtQmgTQpsQ2oTQJoQ2IbQJoU0IbUJoE0KbENqE0CaENiG0CaFNCG1CaBNCmxDahNAmhDYhtAmhTQhtQmgTQpsQ2iRn6GHGWW2xnmtQvtAp3mSb1RJJyvZM2UKnIi3nmtUWhZTtmbKFHgzisRSvcs0buUgr01VvMde4bKHPrq1VxbZmxyJ2pJXY7s7G6upWtpG5Bv3xdmamnOynawrNhXRO0kTuz9gjwyS9LqSn01VvMWdkAAAAAACAcfMT9RxfXBjyljsAAAAASUVORK5CYII="
            />
          </defs>
        </svg>
      </span>
    </div>
  );
};

export default Todo;
