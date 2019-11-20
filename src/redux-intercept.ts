import { Action, AnyAction, Dispatch, Middleware } from 'redux';

export interface InterceptOptions<T extends Action = AnyAction> {
  filter: (action: T) => boolean | Promise<boolean>;
  rejectedCallback?: (action: T) => void;
}

export const createInterceptMiddleware = (options: InterceptOptions): Middleware => {
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
