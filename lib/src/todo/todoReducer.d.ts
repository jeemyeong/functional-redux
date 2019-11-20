import { ActionType } from "typesafe-actions";
export declare enum TodoActionType {
    ADD_TODO = "todo/ADD_TODO",
    REMOVE_TODO = "todo/REMOVE_TODO",
    CHECK_TODO = "todo/CHECK_TODO",
    UNCHECK_TODO = "todo/UNCHECK_TODO",
    UPDATE_TODO = "todo/UPDATE_TODO",
    CLEAR_COMPLETED = "todo/CLEAR_COMPLETED",
    TOGGLE_ALL = "todo/TOGGLE_ALL"
}
export interface ITodo {
    id: number;
    message: string;
    checked: boolean;
}
export declare const TodoActionCreator: {
    addTodo: (message: string) => {
        readonly payload: {
            readonly message: string;
        };
        readonly type: TodoActionType.ADD_TODO;
    };
    checkTodo: (id: number) => {
        readonly payload: {
            readonly id: number;
        };
        readonly type: TodoActionType.CHECK_TODO;
    };
    clearCompleted: () => {
        readonly type: TodoActionType.CLEAR_COMPLETED;
    };
    removeTodo: (id: number) => {
        readonly payload: {
            readonly id: number;
        };
        readonly type: TodoActionType.REMOVE_TODO;
    };
    toggleAll: () => {
        readonly type: TodoActionType.TOGGLE_ALL;
    };
    uncheckTodo: (id: number) => {
        readonly payload: {
            readonly id: number;
        };
        readonly type: TodoActionType.UNCHECK_TODO;
    };
    updateTodo: (todo: ITodo) => {
        readonly payload: {
            readonly todo: ITodo;
        };
        readonly type: TodoActionType.UPDATE_TODO;
    };
};
export declare type TodoAction = ActionType<typeof TodoActionCreator>;
export declare const todoReducer: (todoState: ITodo[] | undefined, action: {
    readonly payload: {
        readonly message: string;
    };
    readonly type: TodoActionType.ADD_TODO;
} | {
    readonly payload: {
        readonly id: number;
    };
    readonly type: TodoActionType.CHECK_TODO;
} | {
    readonly type: TodoActionType.CLEAR_COMPLETED;
} | {
    readonly payload: {
        readonly id: number;
    };
    readonly type: TodoActionType.REMOVE_TODO;
} | {
    readonly type: TodoActionType.TOGGLE_ALL;
} | {
    readonly payload: {
        readonly id: number;
    };
    readonly type: TodoActionType.UNCHECK_TODO;
} | {
    readonly payload: {
        readonly todo: ITodo;
    };
    readonly type: TodoActionType.UPDATE_TODO;
}) => ITodo[];
