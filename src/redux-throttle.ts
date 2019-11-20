import { Action, AnyAction, Dispatch, Middleware } from 'redux';

export interface ThrottleOptions<T extends Action = AnyAction> {
  filter?: (action: T) => boolean | Promise<boolean>;
  milliseconds?: number;
}

const defaultOptions = {
  filter: () => true,
  milliseconds: 50
};

export const createThrottleMiddleware = (rawOptions: ThrottleOptions): Middleware => {
  const options = { ...defaultOptions, ...rawOptions };
  const {
    filter,
    milliseconds
  } = options;

  let inThrottle = false;
  return ({dispatch}) => (next: Dispatch<AnyAction>) => async (action: AnyAction) => {
    const filtered = await filter(action);
    if (filtered) {
      if (inThrottle) {
        return
      }
      next(action);
      inThrottle = true;
      setTimeout(() => inThrottle = false, milliseconds);
      return;
    }
    next(action);
  };
};
