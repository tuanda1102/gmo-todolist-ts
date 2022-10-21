import { ITodo } from "../../types/todo";

export const isLoadingSelector = (state: any): boolean => state.todos.loading;

export const todoListDataSelector = (state: any): ITodo[] =>
  state.todos.todoList;
