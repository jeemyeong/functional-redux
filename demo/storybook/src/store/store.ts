import { applyMiddleware, compose, createStore, Store } from "redux";
import { loadState } from "./loadState";
import { middlewares } from "./middlewares";
import { IRootState, rootReducer } from "./rootReducer";
import { saveState } from "./saveState";


const composeEnhancers = ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const enhancer = composeEnhancers(applyMiddleware(...middlewares));

const store: Store<IRootState> = createStore(rootReducer, loadState(), enhancer);

store.subscribe(() => {
  // tslint:disable-next-line:no-console
  saveState({
    todos: store.getState().todos
  });
});


export default store;
