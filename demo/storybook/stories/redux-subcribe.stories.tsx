import { applyMiddleware, createStore } from 'redux';
import { createSubscribeMiddleware, SubscribeOptions } from "functional-redux";
import * as React from "react";
import { Provider } from "react-redux";
import TodoView from "../src/todo/TodoView";
import { BrowserRouter as Router } from "react-router-dom";
import { rootReducer } from "../src/store/rootReducer";
import { TodoActionType } from '../src/todo/todoReducer';
import { logging } from "./logging";
import { action as storybookAction } from "@storybook/addon-actions";

export const ADD = () => {
  const waitOptions: SubscribeOptions = {
    filter: (action) => {
      return action.type === TodoActionType.ADD_TODO
    }
  };
  const subscribeMiddleware = createSubscribeMiddleware(waitOptions);
  subscribeMiddleware.subscribe((action) => {
    storybookAction("subscribe")(JSON.stringify(action));
  });
  const store = createStore(
    rootReducer,
    applyMiddleware(logging, subscribeMiddleware)
  );
  return <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <TodoView/>
    </Provider>
  </Router>;
};

export const REMOVE = () => {
  const waitOptions: SubscribeOptions = {
    filter: (action) => {
      return action.type === TodoActionType.REMOVE_TODO
    }
  };
  const subscribeMiddleware = createSubscribeMiddleware(waitOptions);
  subscribeMiddleware.subscribe((action) => {
    storybookAction("subscribe")(JSON.stringify(action));
  });
  const store = createStore(
    rootReducer,
    applyMiddleware(logging, subscribeMiddleware)
  );
  return <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <TodoView/>
    </Provider>
  </Router>;
};

export const ADD_OR_REMOVE = () => {
  const waitOptions: SubscribeOptions = {
    filter: (action) => {
      return action.type === TodoActionType.ADD_TODO
        || action.type === TodoActionType.REMOVE_TODO
    }
  };
  const subscribeMiddleware = createSubscribeMiddleware(waitOptions);
  subscribeMiddleware.subscribe((action) => {
    storybookAction("subscribe")(JSON.stringify(action));
  });
  const store = createStore(
    rootReducer,
    applyMiddleware(logging, subscribeMiddleware)
  );
  return <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <TodoView/>
    </Provider>
  </Router>;
};

export default {
  title: 'Subscribe',
};
