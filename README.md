# Functional Redux [![npm version](https://badge.fury.io/js/functional-redux.svg)](https://badge.fury.io/js/functional-redux)

### Features

- Written in TypeScript.

## Installation

```sh
$ npm i functional-redux
```

## redux-confirm


```js
import { applyMiddleware, createStore } from 'redux';
import { createConfirmMiddleware } from "functional-redux";

import reducer from './store/reducer';

// Create the Redux store.
const store = createStore(
  reducer,
  applyMiddleware(createConfirmMiddleware())
);
```

You may also pass options to the `createConfirmMiddleware` function.

#### Available options

```typescript
import { Action, AnyAction } from 'redux';

interface ConfirmOptions {
  confirm?: () => boolean | Promise<boolean>;
  filter?: <T extends Action = AnyAction>(action: T) => boolean | Promise<boolean>;
  rejectedCallback?: () => void;
}
```


## redux-intercept

```js
import { applyMiddleware, createStore } from 'redux';
import { createInterceptMiddleware } from "functional-redux";

import reducer from './store/reducer';

const interceptOption = {
  filter: (action) => {
    return !action.type.match(PERMIT_REGEX)
  }
};

// Create the Redux store.
const store = createStore(
  reducer,
  applyMiddleware(createInterceptMiddleware(interceptOption))
);
```

You should pass options to the `createInterceptMiddleware` function.

#### Available options

```typescript
import { Action, AnyAction } from 'redux';

interface InterceptOptions {
  filter: <T extends Action = AnyAction>(action: T) => boolean | Promise<boolean>;
  rejectedCallback?: <T extends Action = AnyAction>(action: T) => void;
}
```

## redux-wait


```js
import { applyMiddleware, createStore } from 'redux';
import { createWaitMiddleware } from "functional-redux";

import reducer from './store/reducer';

const waitOption = {
  milliseconds: 3000
};

// Create the Redux store.
const store = createStore(
  reducer,
  applyMiddleware(createWaitMiddleware(waitOption))
);
```

You may also pass options to the `createWaitMiddleware` function.

#### Available options

```typescript
import { Action, AnyAction } from 'redux';

interface WaitOptions {
  milliseconds?: number;
  filter?: <T extends Action = AnyAction>(action: T) => boolean | Promise<boolean>;
}
```

## redux-enricher


```js
import { applyMiddleware, createStore } from 'redux';
import { createEnricherMiddleware } from "functional-redux";

import reducer from './store/reducer';

const enricherOption = {
  enrich: (action) => ({...action, created: new Date()})
};

// Create the Redux store.
const store = createStore(
  reducer,
  applyMiddleware(createEnricherMiddleware(enricherOption))
);
```

You may also pass options to the `createEnricherMiddleware` function.

#### Available options

```typescript
import { Action, AnyAction } from 'redux';

interface EnricherOptions {
  enrich: <T extends Action = AnyAction, S extends Action = AnyAction>(action: T) => S
  filter?: <T extends Action = AnyAction>(action: T) => boolean | Promise<boolean>;
}
```

## redux-record

```js
import { applyMiddleware, createStore } from 'redux';
import { createRecordMiddleware } from "functional-redux";

import reducer from './store/reducer';

// Create the Redux store.
const store = createStore(
  reducer,
  applyMiddleware(createRecordMiddleware())
);

store.dispatch({type: "START_REDUX_RECORD"});
store.dispatch(YOUR_ACTION);
store.dispatch({type: "STOP_REDUX_RECORD"});
store.dispatch({type: "CALLBACK_REDUX_RECORD", callback: (history) => {console.log(history)}});
store.dispatch({type: "REPLAY_REDUX_RECORD"}); // REPLAY

```

You may also pass options to the `createRecordMiddleware` function.

#### Available options

```typescript
import { Action, AnyAction } from 'redux';

interface RecordOptions {
  filter?: <T extends Action = AnyAction>(action: T) => boolean | Promise<boolean>;
  START_REDUX_RECORD?: string;
  STOP_REDUX_RECORD?: string;
  RESUME_REDUX_RECORD?: string;
  CALLBACK_REDUX_RECORD?: string;
  REPLAY_REDUX_RECORD?: string;
}

const defaultOptions = {
  filter: () => true,
  START_REDUX_RECORD: "START_REDUX_RECORD",
  STOP_REDUX_RECORD: "STOP_REDUX_RECORD",
  RESUME_REDUX_RECORD: "RESUME_REDUX_RECORD",
  CALLBACK_REDUX_RECORD: "CALLBACK_REDUX_RECORD",
  REPLAY_REDUX_RECORD: "REPLAY_REDUX_RECORD",
};
```

## redux-throttle

```js
import { applyMiddleware, createStore } from 'redux';
import { createThrottleMiddleware } from "functional-redux";

import reducer from './store/reducer';

// Create the Redux store.
const store = createStore(
  reducer,
  applyMiddleware(createThrottleMiddleware())
);

store.dispatch({type: "YOUR_ACTION"}); // WORKS
store.dispatch({type: "YOUR_ACTION"}); // DOESN'T WORK

```

You may also pass options to the `createThrottleMiddleware` function.

#### Available options

```typescript
import { Action, AnyAction, Dispatch, Middleware } from 'redux';

interface ThrottleOptions {
  filter?: <T extends Action = AnyAction>(action: T) => boolean | Promise<boolean>;
  limit?: number;
}

const defaultOptions = {
  filter: () => true,
  limit: 50
};
```
