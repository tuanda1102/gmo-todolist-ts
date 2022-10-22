export type StatusTodo = "completed" | "not_started";

export interface ITodo {
  id: number;
  title: string;
  status: StatusTodo;
}
