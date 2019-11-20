import { applyMiddleware, createStore } from 'redux';
import { createRecordMiddleware, RecordOptions } from "functional-redux";
import * as React from "react";
import { Provider, useDispatch } from "react-redux";
import TodoView from "../src/todo/TodoView";
import { BrowserRouter as Router } from "react-router-dom";
import { rootReducer } from "../src/store/rootReducer";
import { TodoActionType } from '../src/todo/todoReducer';
import { logging } from "./logging";

enum RecordActionType {
  START_REDUX_RECORD = "START_REDUX_RECORD",
  STOP_REDUX_RECORD = "STOP_REDUX_RECORD",
  RESUME_REDUX_RECORD = "RESUME_REDUX_RECORD",
  CALLBACK_REDUX_RECORD = "CALLBACK_REDUX_RECORD",
  REPLAY_REDUX_RECORD = "REPLAY_REDUX_RECORD",
}

const Buttons = () => {
  const dispatch = useDispatch();

  const dispatchRecordAction = (type: RecordActionType) => () => {
    dispatch({
      type
    })
  };

  return (
    <footer className={"footer"}>
      <ul className="filters">
        <li><a onClick={dispatchRecordAction(RecordActionType.START_REDUX_RECORD)}>START</a></li>
        <li><a onClick={dispatchRecordAction(RecordActionType.STOP_REDUX_RECORD)}>STOP</a></li>
        <li><a onClick={dispatchRecordAction(RecordActionType.RESUME_REDUX_RECORD)}>RESUME</a></li>
        <li><a onClick={dispatchRecordAction(RecordActionType.REPLAY_REDUX_RECORD)}>REPLAY</a></li>
      </ul>
    </footer>
  )
};

export const ADD = () => {
  const recordOptions: RecordOptions = {
    filter: (action) => {
      return action.type === TodoActionType.ADD_TODO
    },
    ...RecordActionType
  };
  const store = createStore(
    rootReducer,
    applyMiddleware(logging, createRecordMiddleware(recordOptions))
  );
  return <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <TodoView>
        <Buttons/>
      </TodoView>
    </Provider>
  </Router>;
};

export const REMOVE = () => {
  const recordOptions: RecordOptions = {
    filter: (action) => {
      return action.type === TodoActionType.REMOVE_TODO
    },
    ...RecordActionType
  };
  const store = createStore(
    rootReducer,
    applyMiddleware(logging, createRecordMiddleware(recordOptions))
  );
  return <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <TodoView>
        <Buttons/>
      </TodoView>
    </Provider>
  </Router>;
};

export const ADD_OR_REMOVE = () => {
  const recordOptions: RecordOptions = {
    filter: (action) => {
      return action.type === TodoActionType.ADD_TODO
        || action.type === TodoActionType.REMOVE_TODO
    },
    ...RecordActionType
  };
  const store = createStore(
    rootReducer,
    applyMiddleware(logging, createRecordMiddleware(recordOptions))
  );
  return <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <TodoView>
        <Buttons/>
      </TodoView>
    </Provider>
  </Router>;
};

export default {
  title: 'Record',
};
