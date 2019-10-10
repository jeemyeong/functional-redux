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
  applyMiddleware(reduxConfirm())
);
```

You may also pass options to the `reduxConfirm` function.

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
  applyMiddleware(reduxIntercept(interceptOption))
);
```

You should pass options to the `reduxIntercept` function.

#### Available options

```typescript
interface Options {
  filter: (action: Action) => boolean | Promise<boolean>;
  rejectedCallback?: (action: Action) => void;
}
```