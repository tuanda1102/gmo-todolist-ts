import axiosClient from "../apis/config";
import { ITodo } from "../types/todo";

export const getListTasksApi = async () => {
  return await axiosClient.get("/tasks");
};

export const addTaskApi = async (data: ITodo) => {
  return await axiosClient.post("/tasks", data);
};

export const updateTaskApi = async (data: ITodo) => {
  return await axiosClient.put(`tasks/${data.id}`, data);
};

export const deleteTaskApi = async (id: number) => {
  return await axiosClient.delete(`tasks/${id}`);
};
