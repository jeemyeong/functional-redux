import { Action, AnyAction, Dispatch, Middleware } from 'redux';

export interface EnricherOptions<T extends Action = AnyAction, S extends Action = AnyAction> {
  enrich: (action: T) => Promise<S>
  filter?: (action: T) => boolean | Promise<boolean>;
}

const defaultOptions = {
  filter: () => true,
};

export const createEnricherMiddleware = (rawOptions: EnricherOptions): Middleware => {
  const options = { ...defaultOptions, ...rawOptions };
  const { enrich, filter } = options;

  return () => (next: Dispatch<AnyAction>) => async (action: AnyAction) => {
    const filtered = await filter(action);
    if (filtered) {
      next(await enrich(action));
    } else {
      next(action);
    }
  };
};
