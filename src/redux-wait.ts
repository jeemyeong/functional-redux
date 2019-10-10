import { Action, Middleware } from 'redux';

interface Options {
  milliseconds?: number;
  filter?: (action: Action) => boolean | Promise<boolean>;
  rejectedCallback?: () => void;
}

const defaultOptions = {
  milliseconds: 1000,
  filter: () => true,
  rejectedCallback: () => {},
};

const wait = (timeout: number) => new Promise(resolve =>
  setTimeout(() => resolve(undefined), timeout)
);

export const createWaitMiddleware = (rawOptions?: Options): Middleware => {
  const options = { ...defaultOptions, ...rawOptions };
  const { milliseconds, filter, rejectedCallback } = options;

  return () => (next: any) => async (action: Action) => {
    const filtered = await filter(action);
    if (filtered) {
      const answer = await wait(milliseconds);
      if (answer) {
        next(action);
      } else {
        rejectedCallback();
      }
    } else {
      next(action);
    }
  };
};
