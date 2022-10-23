import React from "react";
import classNames from "classnames/bind";

import styles from "./TodoApp.module.scss";
import { useAppSelector } from "../../hooks";
import { todoListCompletedSelector } from "../../redux/selectors";
import Todo from "../Todo";

const cx = classNames.bind(styles);

const TodosCompleted: React.FC = () => {
  const todoListCompleted = useAppSelector(todoListCompletedSelector);

  const renderCompletedTodo = () => {
    return todoListCompleted.map((todo) => {
      return <Todo key={todo.id} todo={todo} />;
    });
  };

  return (
    <>
      {!!todoListCompleted.length ? (
        <h4 className={cx("completed-heading")}>Completed</h4>
      ) : (
        ""
      )}
      {renderCompletedTodo()}
    </>
  );
};

export default TodosCompleted;
