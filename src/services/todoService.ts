import axiosClient from "../apis/config";
import { ITodo } from "../types/todo";

export const getListTasksApi = async () => {
  return await axiosClient.get("/tasks");
};

export const addTodoApi = async (data: ITodo) => {
  return await axiosClient.post("/tasks", data);
};

export const markCompletedApi = async () => {
  return await axiosClient.put("/tasks", { status: "completed" });
};
