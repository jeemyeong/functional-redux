import { AnyAction, Middleware } from 'redux';

interface Options {
  filter: (action: AnyAction) => boolean | Promise<boolean>;
  rejectedCallback?: (action: AnyAction) => void;
}

export const createInterceptMiddleware = (options: Options): Middleware => {
  const { filter, rejectedCallback } = options;

  return () => next => async (action: AnyAction) => {
    const filtered = await filter(action);
    if (filtered) {
      rejectedCallback && rejectedCallback(action);
    } else {
      next(action);
    }
  };
};
