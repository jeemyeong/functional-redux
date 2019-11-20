import { Action, AnyAction, Dispatch, Middleware } from 'redux';

export interface ThrottleOptions<T extends Action = AnyAction> {
  filter?: (action: T) => boolean | Promise<boolean>;
  milliseconds?: number;
  rejectedCallback?: (action: T) => void;
}

const defaultOptions = {
  filter: () => true,
  milliseconds: 50,
  rejectedCallback: () => {}
};

export const createThrottleMiddleware = (rawOptions: ThrottleOptions): Middleware => {
  const options = { ...defaultOptions, ...rawOptions };
  const {
    filter,
    milliseconds,
    rejectedCallback
  } = options;

  let inThrottle = false;
  return ({dispatch}) => (next: Dispatch<AnyAction>) => async (action: AnyAction) => {
    const filtered = await filter(action);
    if (filtered) {
      if (inThrottle) {
        rejectedCallback(action)
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
