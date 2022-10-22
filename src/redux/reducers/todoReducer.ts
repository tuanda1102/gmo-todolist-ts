import { ActionType } from "../action-types";
import { Action } from "../actions";
import { ITodo } from "./../../types/todo";

interface DefaultState {
  loading: boolean;
  todoList: ITodo[];
}

const initialState: DefaultState = {
  loading: false,
  todoList: [],
};

const reducer = (state: DefaultState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FAIL:
      return {
        ...state,
        loading: false,
      };
    case ActionType.LOADING:
      return {
        ...state,
        loading: true,
      };
    case ActionType.SUCCESS:
      return {
        ...state,
        loading: false,
        todoList: action.payload,
      };
    case ActionType.CREATE_TASK:
      return {
        ...state,
        loading: false,
        todoList: [...state.todoList, action.payload],
      };
    case ActionType.UPDATE_TASK: {
      // Cập nhật lại mảng todo
      const newTodoList = state.todoList.map((todo) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              title: action.payload.title,
              status: action.payload.status,
            }
          : todo
      );
      // Cập nhật lại State
      return {
        ...state,
        loading: false,
        todoList: newTodoList,
      };
    }
    case ActionType.DELETE_TASK: {
      const newTodoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        ...state,
        loading: false,
        todoList: newTodoList,
      };
    }
    default:
      return state;
  }
};

export default reducer;
