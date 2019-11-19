import { AnyAction, combineReducers } from "redux";
import { ITodo, todoReducer } from "../todo/todoReducer";

export interface IRootState {
  todos: ITodo[]
}

export const rootReducer: (state: IRootState, action: AnyAction) => IRootState = combineReducers<IRootState>({
  todos: todoReducer,
});
