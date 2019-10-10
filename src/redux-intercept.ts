import { Action, Middleware } from 'redux';

interface Options {
  filter: (action: Action) => boolean | Promise<boolean>;
  rejectedCallback?: (action: Action) => void;
}

export const createInterceptMiddleware = (options: Options): Middleware => {
  const { filter, rejectedCallback } = options;

  return () => next => async (action: Action) => {
    const filtered = await filter(action);
    if (filtered) {
      rejectedCallback && rejectedCallback(action);
    } else {
      next(action);
    }
  };
};
