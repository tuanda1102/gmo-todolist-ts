import React, { useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./TodoApp.module.scss";
import TodoForm from "../TodoForm";
import Todo from "../Todo";
import { getListTasks } from "../../redux/action-creators";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { isLoadingSelector, todoListDataSelector } from "../../redux/selectors";
import Loading from "../Loading";

const cx = classNames.bind(styles);

const TodoApp: React.FC = () => {
  const isLoading = useAppSelector(isLoadingSelector);
  const todoListData = useAppSelector(todoListDataSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getListTasks(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderTodoList = () => {
    return todoListData
      ?.filter((todo) => todo.status === "not_started")
      .map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      });
  };

  const renderCompletedTodo = () => {
    return todoListData
      ?.filter((todo) => todo.status === "completed")
      .map((todo, index) => {
        return <Todo key={index} todo={todo} />;
      });
  };

  return (
    <>
      {isLoading ? <Loading /> : ""}
      <div className={cx("wrapper")}>
        <h1 className={cx("heading")}>TO DO APP</h1>

        <TodoForm />

        {renderTodoList()}

        <h4 className={cx("completed-heading")}>Completed</h4>
        {renderCompletedTodo()}
      </div>
    </>
  );
};

export default TodoApp;
