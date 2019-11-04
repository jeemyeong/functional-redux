import { Action, AnyAction, Dispatch, Middleware } from 'redux';

interface Options {
  filter: <T extends Action = AnyAction>(action: T) => boolean | Promise<boolean>;
  rejectedCallback?: <T extends Action = AnyAction>(action: T) => void;
}

export const createInterceptMiddleware = (options: Options): Middleware => {
  const { filter, rejectedCallback } = options;

  return () => (next: Dispatch<AnyAction>) => async (action: AnyAction) => {
    const filtered = await filter(action);
    if (filtered) {
      rejectedCallback && rejectedCallback(action);
    } else {
      next(action);
    }
  };
};
