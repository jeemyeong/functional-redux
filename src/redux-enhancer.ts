import { Action, AnyAction, Middleware } from 'redux';

interface Options {
  enhance: (action: AnyAction) => AnyAction
  filter?: (action: AnyAction) => boolean | Promise<boolean>;
}

const defaultOptions = {
  filter: () => true,
};

export const createEnhancerMiddleware = (rawOptions: Options): Middleware => {
  const options = { ...defaultOptions, ...rawOptions };
  const { enhance, filter } = options;

  return () => (next: any) => async (action: Action) => {
    const filtered = await filter(action);
    if (filtered) {
      next(enhance(action));
    } else {
      next(action);
    }
  };
};
