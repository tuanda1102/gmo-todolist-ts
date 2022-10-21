export type StatusTodo = "completed" | "not_started";

export interface ITodo {
  title: string;
  status: StatusTodo;
}
