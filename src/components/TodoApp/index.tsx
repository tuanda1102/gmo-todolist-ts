import React, { useEffect } from "react";
import classNames from "classnames/bind";

import styles from "./TodoApp.module.scss";
import TodoForm from "../TodoForm";
import { getListTasks } from "../../redux/action-creators";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { isLoadingSelector } from "../../redux/selectors";
import Loading from "../Loading";
import TodosNotCompleted from "./TodosNotCompleted";
import TodosCompleted from "./TodosCompleted";

const cx = classNames.bind(styles);

const TodoApp: React.FC = () => {
  const isLoading = useAppSelector(isLoadingSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getListTasks(dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : ""}
      <div className={cx("wrapper")}>
        <h1 className={cx("heading")}>TO DO APP</h1>

        <TodoForm />

        <TodosNotCompleted />

        <h4 className={cx("completed-heading")}>Completed</h4>
        <TodosCompleted />
      </div>
    </>
  );
};

export default TodoApp;
