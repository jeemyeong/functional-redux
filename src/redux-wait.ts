import { Action, AnyAction, Dispatch, Middleware } from 'redux';

interface Options {
  milliseconds?: number;
  filter?: <T extends Action = AnyAction>(action: T) => boolean | Promise<boolean>;
}

const defaultOptions = {
  milliseconds: 1000,
  filter: () => true,
};

const wait = (timeout: number) => new Promise(resolve =>
  setTimeout(() => resolve(undefined), timeout)
);

export const createWaitMiddleware = (rawOptions?: Options): Middleware => {
  const options = { ...defaultOptions, ...rawOptions };
  const { milliseconds, filter } = options;

  return () => (next: Dispatch<AnyAction>) => async (action: AnyAction) => {
    const filtered = await filter(action);
    if (filtered) {
      await wait(milliseconds);
      next(action);
    } else {
      next(action);
    }
  };
};
