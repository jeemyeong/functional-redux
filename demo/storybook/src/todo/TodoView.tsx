import * as React from "react";
import { ChangeEventHandler, KeyboardEventHandler, MouseEventHandler, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { matchPath, useHistory, useLocation } from 'react-router-dom';
import { useHandleOutsideClick } from "../hook/useHandleOutsideClick";
import { IRootState } from "../store/rootReducer";
import { ITodo, TodoActionCreator } from "./todoReducer";
import '../index.css';

const TodoView: React.FC = ({ children }) => {
  return (
    <section className="todoapp">
      <TodoHeader/>
      {/* This section should be hidden by default and shown when there are todos */}
      <TodoList/>
      {/* This footer should hidden by default and shown when there are todos */}
      <TodoFooter/>
      {children}
    </section>
  );
};

const TodoHeader = () => {
  return (
    <header className="header">
      <h1>todos</h1>
      <TodoInput/>
    </header>
  )
};

const TodoInput = () => {
  const [value, setValue] = useState<string>("");
  const dispatch = useDispatch();

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  };

  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      setValue("");
      dispatch(
        TodoActionCreator.addTodo(value)
      )
    }
  };

  return (
    <input
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus={true}
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  )
};

const TodoList = () => {
  const todos = useSelector<IRootState, ITodo[]>((state) => state.todos);
  const dispatch = useDispatch();
  const isEmpty = todos.length === 0;

  const toggleAll = () => {
    dispatch(
      TodoActionCreator.toggleAll()
    )
  };

  if (isEmpty) {
    return null;
  }

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" onClick={toggleAll}/>
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {/* These are here just to show the structure of the list items */}
        {/* List items should get the class `editing` when editing and `completed` when marked as completed */}
        {todos.map((todo) => {
          return (
            <Todo todo={todo} key={todo.id}/>
          )
        })}
      </ul>
    </section>
  )
};

const Todo: React.FC<{
  todo: ITodo
}> = ({ todo }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [isEditMode, setEditMode] = useState(false);

  const onTodoChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.checked) {
      dispatch(
        TodoActionCreator.checkTodo(todo.id)
      )
    } else {
      dispatch(
        TodoActionCreator.uncheckTodo(todo.id)
      )
    }
  };

  const onDeleteClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(
      TodoActionCreator.removeTodo(todo.id)
    )
  };

  const onDoubleClick: MouseEventHandler<HTMLDivElement> = () => {
    setEditMode(true)
  };

  const cancelEdit = () => {
    setEditMode(false);
  };

  if (matchPath(location.pathname, { path: Route.Active })?.isExact && todo.checked) {
    return null
  }
  if (matchPath(location.pathname, { path: Route.Completed })?.isExact && !todo.checked) {
    return null
  }

  if (isEditMode) {
    return (
      <TodoEditor
        todo={todo}
        cancelEdit={cancelEdit}
      />
    )
  }

  return (
    <li className={todo.checked ? "completed" : "view"}>
      <div
        className="view"
        onDoubleClick={onDoubleClick}
      >
        <input
          className="toggle"
          type="checkbox"
          checked={todo.checked}
          onChange={onTodoChange}
        />
        <label>{todo.message}</label>
        <button
          className="destroy"
          onClick={onDeleteClick}
        />
      </div>
    </li>
  )
};

const TodoEditor: React.FC<{
  todo: ITodo
  cancelEdit: (() => void)
}> = ({ todo, cancelEdit }) => {
  const [value, setValue] = useState(todo.message);
  const dispatch = useDispatch();
  const wrapperRef = useRef<HTMLLIElement>(null);
  useHandleOutsideClick(wrapperRef, () => {
    cancelEdit()
  });

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value)
  };

  const onKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      setValue("");
      dispatch(
        TodoActionCreator.updateTodo({
          ...todo,
          message: value
        })
      );
      cancelEdit()
    }
  };

  return (
    <li className={"editing"} ref={wrapperRef}>
      <input className="edit" value={value} onKeyPress={onKeyPress} onChange={onChange}/>
    </li>
  )
};

enum Route {
  All = "/",
  Active = "/active",
  Completed = "/completed"
}

const TodoFooter = () => {
  const todos = useSelector<IRootState, ITodo[]>((state) => state.todos);
  const isEmpty = todos.length === 0;
  const leftCount = todos.filter((todo) => !todo.checked).length;
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const setRouteAll: MouseEventHandler = (e) => {
    e.preventDefault();
    history.push(Route.All)
  };

  const setRouteActive: MouseEventHandler = (e) => {
    e.preventDefault();
    history.push(Route.Active)
  };

  const setRouteComplete: MouseEventHandler = (e) => {
    e.preventDefault();
    history.push(Route.Completed)
  };

  const clearCompleted = () => {
    dispatch(
      TodoActionCreator.clearCompleted()
    )
  };

  if (isEmpty) {
    return null;
  }

  return (
    <footer className="footer">
      {/* This should be `0 items left` by default */}
      <span className="todo-count"><strong>{leftCount}</strong> item left</span>
      {/* Remove this if you don't implement routing */}
      <ul className="filters">
        <li>
          <a
            className={matchPath(location.pathname, { path: Route.All })?.isExact ? "selected" : ""}
            onClick={setRouteAll}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={matchPath(location.pathname, { path: Route.Active })?.isExact ? "selected" : ""}
            onClick={setRouteActive}
          >
            Active
          </a>
        </li>
        <li>
          <a className={matchPath(location.pathname, { path: Route.Completed })?.isExact ? "selected" : ""}
             onClick={setRouteComplete}
          >
            Completed
          </a>
        </li>
      </ul>
      {/* Hidden if no completed items are left ↓ */}
      <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
    </footer>
  )
}

export default TodoView;
