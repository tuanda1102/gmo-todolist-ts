import { Dispatch } from "redux";

import { ActionType } from "./../action-types/index";
import { Action } from "../actions";
import {
  addTaskApi,
  deleteTaskApi,
  getListTasksApi,
  updateTaskApi,
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

export const addTask = async (dispatch: Dispatch<Action>, data: ITodo) => {
  try {
    dispatch({
      type: ActionType.LOADING,
    });

    const res = await addTaskApi(data);

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

export const updateTask = async (dispatch: Dispatch<Action>, data: ITodo) => {
  try {
    dispatch({
      type: ActionType.LOADING,
    });

    const res = await updateTaskApi(data);

    dispatch({
      type: ActionType.UPDATE_TASK,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ActionType.FAIL,
    });
  }
};

export const deleteTask = async (dispatch: Dispatch<Action>, id: number) => {
  try {
    dispatch({
      type: ActionType.LOADING,
    });

    await deleteTaskApi(id);

    dispatch({
      type: ActionType.DELETE_TASK,
      payload: id,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ActionType.FAIL,
    });
  }
};
