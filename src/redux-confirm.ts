import { Action, AnyAction, Dispatch, Middleware } from 'redux';

export interface ConfirmOptions {
  confirm?: () => boolean | Promise<boolean>;
  filter?: <T extends Action = AnyAction>(action: T) => boolean | Promise<boolean>;
  rejectedCallback?: () => void;
}

const defaultOptions = {
  confirm: () => window.confirm('Are you sure?'),
  filter: () => true,
  rejectedCallback: () => {},
};

export const createConfirmMiddleware = (rawOptions?: ConfirmOptions): Middleware => {
  const options = { ...defaultOptions, ...rawOptions };
  const { confirm, filter, rejectedCallback } = options;

  return () => (next: Dispatch<AnyAction>) => async (action: AnyAction) => {
    const filtered = await filter(action);
    if (filtered) {
      const answer = await confirm();
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
