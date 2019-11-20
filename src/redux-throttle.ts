import { Action, AnyAction, Dispatch, Middleware } from 'redux';

export interface ThrottleOptions<T extends Action = AnyAction> {
  filter?: (action: T) => boolean | Promise<boolean>;
  limit?: number;
}

const defaultOptions = {
  filter: () => true,
  limit: 50
};

export const createThrottleMiddleware = (rawOptions: ThrottleOptions): Middleware => {
  const options = { ...defaultOptions, ...rawOptions };
  const {
    filter,
    limit
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
      setTimeout(() => inThrottle = false, limit);
      return;
    }
    next(action);
  };
};
