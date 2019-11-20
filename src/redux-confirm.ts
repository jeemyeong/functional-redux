import { Action, AnyAction, Dispatch, Middleware } from 'redux';

export interface ConfirmOptions<T extends Action = AnyAction> {
  confirm?: () => boolean | Promise<boolean>;
  filter?: (action: T) => boolean | Promise<boolean>;
  rejectedCallback?: (action: T) => void;
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
        rejectedCallback(action);
      }
    } else {
      next(action);
    }
  };
};
