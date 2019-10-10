# Functional Redux [![npm version](https://badge.fury.io/js/functional-redux.svg)](https://badge.fury.io/js/functional-redux)

### Features

- Written in TypeScript.

## Installation

```sh
$ npm i functional-redux
```

## redux-confirm


```js
import { applyMiddleware, compose, createStore } from 'redux';
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
interface Options {
  confirm?: () => boolean | Promise<boolean>;
  filter?: (action: Action) => boolean | Promise<boolean>;
  rejectedCallback?: () => void;
}
```


## redux-intercept

```js
import { applyMiddleware, compose, createStore } from 'redux';
import { createInterceptMiddleware } from "functional-redux";

import reducer from './store/reducer';

const interceptOption = {
  filter: (action) => {
    return !action.type.match(PERMIT_REGEX)
  }
}

// Create the Redux store.
const store = createStore(
  reducer,
  applyMiddleware(createInterceptMiddleware(interceptOption))
);
```

You should pass options to the `createInterceptMiddleware` function.

#### Available options

```typescript
interface Options {
  filter: (action: Action) => boolean | Promise<boolean>;
  rejectedCallback?: (action: Action) => void;
}
```

## redux-wait


```js
import { applyMiddleware, compose, createStore } from 'redux';
import { createWaitMiddleware } from "functional-redux";

import reducer from './store/reducer';

const waitOption = {
  milliseconds: 3000
}

// Create the Redux store.
const store = createStore(
  reducer,
  applyMiddleware(createWaitMiddleware(waitOption))
);
```

You may also pass options to the `v` function.

#### Available options

```typescript
interface Options {
  milliseconds?: number;
  filter?: (action: Action) => boolean | Promise<boolean>;
  rejectedCallback?: () => void;
}
```

