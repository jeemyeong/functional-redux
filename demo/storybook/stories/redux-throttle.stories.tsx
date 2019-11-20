import { applyMiddleware, createStore } from 'redux';
import { createThrottleMiddleware } from "functional-redux";
import * as React from "react";
import { Provider } from "react-redux";
import TodoView from "../src/todo/TodoView";
import { BrowserRouter as Router } from "react-router-dom";
import { rootReducer } from "../src/store/rootReducer";
import { TodoActionType } from '../src/todo/todoReducer';
import { ThrottleOptions } from "functional-redux/lib/redux-throttle";

export const ADD = () => {
  const waitOptions: ThrottleOptions = {
    limit: 3000,
    filter: (action) => {
      return action.type === TodoActionType.ADD_TODO
    }
  };
  const store = createStore(
    rootReducer,
    applyMiddleware(createThrottleMiddleware(waitOptions))
  );
  return <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <TodoView/>
    </Provider>
  </Router>;
};

export const REMOVE = () => {
  const waitOptions: ThrottleOptions = {
    limit: 3000,
    filter: (action) => {
      return action.type === TodoActionType.REMOVE_TODO
    }
  };
  const store = createStore(
    rootReducer,
    applyMiddleware(createThrottleMiddleware(waitOptions))
  );
  return <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <TodoView/>
    </Provider>
  </Router>;
};

export const ADD_OR_REMOVE = () => {
  const waitOptions: ThrottleOptions = {
    limit: 3000,
    filter: (action) => {
      return action.type === TodoActionType.ADD_TODO
        || action.type === TodoActionType.REMOVE_TODO
    }
  };
  const store = createStore(
    rootReducer,
    applyMiddleware(createThrottleMiddleware(waitOptions))
  );
  return <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <TodoView/>
    </Provider>
  </Router>;
};

export default {
  title: 'Throttle',
};