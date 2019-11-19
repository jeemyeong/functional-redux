import { ActionType } from "typesafe-actions";


export enum TodoActionType {
  ADD_TODO = "todo/ADD_TODO",
  REMOVE_TODO = "todo/REMOVE_TODO",
  CHECK_TODO = "todo/CHECK_TODO",
  UNCHECK_TODO = "todo/UNCHECK_TODO",
  UPDATE_TODO = "todo/UPDATE_TODO",
  CLEAR_COMPLETED = "todo/CLEAR_COMPLETED",
  TOGGLE_ALL = "todo/TOGGLE_ALL"
}

export interface ITodo {
  id: number
  message: string
  checked: boolean
}


export const TodoActionCreator = {
  addTodo: (message: string) => ({
    payload: {
      message
    },
    type: TodoActionType.ADD_TODO,
  }) as const,
  checkTodo: (id: number) => ({
    payload: {
      id
    },
    type: TodoActionType.CHECK_TODO
  }) as const,
  clearCompleted: () => ({
    type: TodoActionType.CLEAR_COMPLETED
  }) as const,
  removeTodo: (id: number) => ({
    payload: {
      id
    },
    type: TodoActionType.REMOVE_TODO,
  }) as const,
  toggleAll: () => ({
    type: TodoActionType.TOGGLE_ALL
  }) as const,
  uncheckTodo: (id: number) => ({
    payload: {
      id
    },
    type: TodoActionType.UNCHECK_TODO
  }) as const,
  updateTodo: (todo: ITodo) => ({
    payload: {
      todo
    },
    type: TodoActionType.UPDATE_TODO
  }) as const,
};

const initialState: ITodo[] = [];

export type TodoAction = ActionType<typeof TodoActionCreator>;

export const todoReducer = (
  todoState: ITodo[] = initialState,
  action: TodoAction
) => {
  switch (action.type) {
    case TodoActionType.ADD_TODO: {
      const {
        message
      } = action.payload;
      const lastTodo = todoState[todoState.length-1];
      const newTodo: ITodo = {
        checked: false,
        id: lastTodo && lastTodo.id+1 || 0,
        message,
      };
      return todoState.concat(newTodo)
    }
    case TodoActionType.REMOVE_TODO: {
      const {
        id
      } = action.payload;

      return todoState.filter((todo) => todo.id !== id)
    }
    case TodoActionType.CHECK_TODO: {
      const {
        id
      } = action.payload;
      return todoState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: true
          }
        }
        return todo
      })
    }
    case TodoActionType.UNCHECK_TODO: {
      const {
        id
      } = action.payload;
      return todoState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: false
          }
        }
        return todo
      })
    }
    case TodoActionType.UPDATE_TODO: {
      const {
        todo: updatedTodo
      } = action.payload;
      return todoState.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return {
            ...updatedTodo,
          }
        }
        return todo
      })
    }
    case TodoActionType.CLEAR_COMPLETED: {
      return todoState.filter((todo) => !todo.checked)
    }
    case TodoActionType.TOGGLE_ALL: {
      return todoState.map((todo) => ({...todo, checked: !todo.checked}))
    }
  }
  return todoState
};
