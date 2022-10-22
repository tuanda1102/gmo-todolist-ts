import React from "react";
import { useAppSelector } from "../../hooks";
import { todoListNotCompletedSelector } from "../../redux/selectors";
import Todo from "../Todo";

const TodosNotCompleted: React.FC = () => {
  const todoList = useAppSelector(todoListNotCompletedSelector);

  const renderTodoList = () => {
    return todoList.map((todo) => {
      return <Todo key={todo.id} todo={todo} />;
    });
  };

  return <>{renderTodoList()}</>;
};

export default TodosNotCompleted;
