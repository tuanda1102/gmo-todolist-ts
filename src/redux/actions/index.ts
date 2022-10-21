import { ITodo, StatusTodo } from "../../types/todo";
import { ActionType } from "../action-types";

interface ILoading {
  type: ActionType.LOADING;
}

interface IFail {
  type: ActionType.FAIL;
}

interface ISuccess {
  type: ActionType.SUCCESS;
  payload: ITodo;
}

interface IGetListTask {
  type: ActionType.GET_LIST_TASK;
}

interface ICreateTask {
  type: ActionType.CREATE_TASK;
  payload: ITodo;
}

interface IUpdateTask {
  type: ActionType.UPDATE_TASK;
  payload: ITodo;
}

interface IDeleteTask {
  type: ActionType.DELETE_TASK;
}

interface IMarkCompleted {
  type: ActionType.MARK_COMPLETED;
  payload: StatusTodo;
}

interface IMarkNotCompleted {
  type: ActionType.MARK_NOT_COMPLETED;
  payload: StatusTodo;
}

export type Action =
  | IGetListTask
  | ICreateTask
  | IUpdateTask
  | IDeleteTask
  | IMarkCompleted
  | IMarkNotCompleted
  | ILoading
  | ISuccess
  | IFail;
