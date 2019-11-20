import { Action, AnyAction, Dispatch, Middleware } from 'redux';

export interface SubscribeOptions<T extends Action = AnyAction, S extends Action = AnyAction> {
  filter?: (action: T) => boolean | Promise<boolean>;
}

const defaultOptions = {
  filter: () => true,
};


export type Unsubscribe = () => void
export type Subscribe = (fn: (action: AnyAction) => void) => Unsubscribe

export type SubscribeMiddleware = Middleware & {
  subscribe: Subscribe
}

export const createSubscribeMiddleware = (rawOptions: SubscribeOptions): SubscribeMiddleware => {
  const options = { ...defaultOptions, ...rawOptions };
  const { filter } = options;

  let listeners: ((action: AnyAction) => void)[] = [];
  const middleware = () => (next: Dispatch<AnyAction>) => async (action: AnyAction) => {
    const filtered = await filter(action);
    if (filtered) {
      listeners.forEach(fn => fn(action))
    }
    next(action);
  };
  middleware.subscribe = (fn: (action: AnyAction) => void) => {
    listeners.push(fn);
    return () => {
      listeners = listeners.filter(f => f !== fn);
    }
  };

  return middleware;
};
