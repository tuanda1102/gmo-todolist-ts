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
    case ActionType.MARK_COMPLETED:
      return {
        ...state,
        loading: false,
        todoList: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
