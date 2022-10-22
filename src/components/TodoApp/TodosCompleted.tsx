import React from "react";
import { useAppSelector } from "../../hooks";
import { todoListCompletedSelector } from "../../redux/selectors";
import Todo from "../Todo";

const TodosCompleted: React.FC = () => {
  const todoListCompleted = useAppSelector(todoListCompletedSelector);

  const renderCompletedTodo = () => {
    return todoListCompleted.map((todo) => {
      return <Todo key={todo.id} todo={todo} />;
    });
  };

  return <>{renderCompletedTodo()}</>;
};

export default TodosCompleted;
