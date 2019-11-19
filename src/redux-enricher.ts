import { Action, AnyAction, Dispatch, Middleware } from 'redux';

export interface EnricherOptions {
  enrich: <T extends Action = AnyAction, S extends Action = AnyAction>(action: T) => S
  filter?: <T extends Action = AnyAction>(action: T) => boolean | Promise<boolean>;
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
      next(enrich(action));
    } else {
      next(action);
    }
  };
};
