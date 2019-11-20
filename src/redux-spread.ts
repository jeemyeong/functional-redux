import { Action, AnyAction, Dispatch, Middleware } from 'redux';

export interface SpreadOptions<T extends Action = AnyAction> {
  filter?: (action: T) => boolean | Promise<boolean>;
  milliseconds?: number;
}

const defaultOptions = {
  filter: () => true,
  milliseconds: 50,
};

const wait = (milliseconds: number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
};

export const createSpreadMiddleware = (rawOptions: SpreadOptions): Middleware => {
  const options = { ...defaultOptions, ...rawOptions };
  const {
    filter,
    milliseconds,
  } = options;

  const promise = Promise.resolve();

  return ({dispatch}) => (next: Dispatch<AnyAction>) => async (action: AnyAction) => {
    const filtered = await filter(action);
    if (filtered) {
      promise.then(() => next(action)).then(() => wait(milliseconds))
      return;
    }
    next(action);
  };
};
