import { AnyAction } from "redux";
import { ITodo } from "../todo/todoReducer";
export interface IRootState {
    todos: ITodo[];
}
export declare const rootReducer: (state: IRootState, action: AnyAction) => IRootState;
