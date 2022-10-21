import { Dispatch } from "redux";

import { ActionType } from "./../action-types/index";
import { Action } from "../actions";
import {
  addTodoApi,
  getListTasksApi,
  markCompletedApi,
} from "../../services/todoService";
import { ITodo } from "../../types/todo";

export const getListTasks = async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: ActionType.LOADING,
    });

    const res = await getListTasksApi();

    dispatch({
      type: ActionType.SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ActionType.FAIL,
    });
  }
};

export const addTodo = async (dispatch: Dispatch<Action>, data: ITodo) => {
  try {
    dispatch({
      type: ActionType.LOADING,
    });

    const res = await addTodoApi(data);

    dispatch({
      type: ActionType.CREATE_TASK,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ActionType.FAIL,
    });
  }
};

export const markCompleted = async (dispatch: Dispatch<Action>) => {
  try {
    dispatch({
      type: ActionType.LOADING,
    });

    await markCompletedApi();
  } catch (error) {
    console.log(error);
    dispatch({
      type: ActionType.FAIL,
    });
  }
};
