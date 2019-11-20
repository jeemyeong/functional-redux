import { applyMiddleware, createStore, Middleware } from 'redux';
import { createEnricherMiddleware, EnricherOptions } from "functional-redux";
import * as React from "react";
import { Provider } from "react-redux";
import TodoView from "../src/todo/TodoView";
import { BrowserRouter as Router } from "react-router-dom";
import { rootReducer } from "../src/store/rootReducer";
import { TodoActionType } from '../src/todo/todoReducer';
import { action as storybookAction } from "@storybook/addon-actions";

const logging: Middleware = () => (next) => (action) => {
  console.log(action);
  storybookAction("action")(JSON.stringify(action));
  next(action);
};

export const ADD = () => {
  const enricherOptions: EnricherOptions = {
    enrich: (action) => {
      return {
        ...action,
        timestamp: new Date()
      }
    },
    filter: (action) => {
      return action.type === TodoActionType.ADD_TODO
    }
  };
  const store = createStore(
    rootReducer,
    applyMiddleware(createEnricherMiddleware(enricherOptions), logging)
  );
  return <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <TodoView/>
    </Provider>
  </Router>;
};

export const REMOVE = () => {
  const enricherOptions: EnricherOptions = {
    enrich: (action) => {
      return {
        ...action,
        timestamp: new Date()
      }
    },
    filter: (action) => {
      return action.type === TodoActionType.REMOVE_TODO
    }
  };
  const store = createStore(
    rootReducer,
    applyMiddleware(createEnricherMiddleware(enricherOptions), logging)
  );
  return <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <TodoView/>
    </Provider>
  </Router>;
};

export const ADD_OR_REMOVE = () => {
  const enricherOptions: EnricherOptions = {
    enrich: (action) => {
      return {
        ...action,
        timestamp: new Date()
      }
    },
    filter: (action) => {
      return action.type === TodoActionType.ADD_TODO
        || action.type === TodoActionType.REMOVE_TODO
    }
  };
  const store = createStore(
    rootReducer,
    applyMiddleware(createEnricherMiddleware(enricherOptions), logging)
  );
  return <Router basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <TodoView/>
    </Provider>
  </Router>;
};

export default {
  title: 'Enricher',
};
