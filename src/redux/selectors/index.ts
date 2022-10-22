import { createSelector } from "reselect";

import { ITodo } from "../../types/todo";

export const isLoadingSelector = (state: any): boolean => state.todos.loading;

export const todoListNotCompletedSelector = createSelector(
  (state: any): ITodo[] => state.todos.todoList,
  (todolist): ITodo[] =>
    todolist.filter((todo) => todo.status === "not_started")
);

export const todoListCompletedSelector = createSelector(
  (state: any): ITodo[] => state.todos.todoList,
  (todolist): ITodo[] => todolist.filter((todo) => todo.status === "completed")
);
