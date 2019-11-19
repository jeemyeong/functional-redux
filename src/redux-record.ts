import { Action, AnyAction, Dispatch, Middleware } from 'redux';

export interface RecordOptions {
  filter?: <T extends Action = AnyAction>(action: T) => boolean | Promise<boolean>;
  START_REDUX_RECORD?: string;
  STOP_REDUX_RECORD?: string;
  RESUME_REDUX_RECORD?: string;
  CALLBACK_REDUX_RECORD?: string;
  REPLAY_REDUX_RECORD?: string;
}

const defaultOptions = {
  filter: () => true,
  START_REDUX_RECORD: "START_REDUX_RECORD",
  STOP_REDUX_RECORD: "STOP_REDUX_RECORD",
  RESUME_REDUX_RECORD: "RESUME_REDUX_RECORD",
  CALLBACK_REDUX_RECORD: "CALLBACK_REDUX_RECORD",
  REPLAY_REDUX_RECORD: "REPLAY_REDUX_RECORD",
};

export const createRecordMiddleware = (rawOptions: RecordOptions): Middleware => {
  const options = { ...defaultOptions, ...rawOptions };
  const {
    filter,
    START_REDUX_RECORD,
    STOP_REDUX_RECORD,
    RESUME_REDUX_RECORD,
    CALLBACK_REDUX_RECORD,
    REPLAY_REDUX_RECORD
  } = options;

  let history: AnyAction[] = [];
  let recording = false;
  return ({dispatch}) => (next: Dispatch<AnyAction>) => async (action: AnyAction) => {
    const filtered = await filter(action);
    if (filtered) {
      history.push(action);
    } else {
      switch (action.type) {
        case START_REDUX_RECORD: {
          history = [];
          recording = true;
          break;
        }
        case RESUME_REDUX_RECORD: {
          recording = true;
          break;
        }
        case STOP_REDUX_RECORD: {
          recording = false;
          break;
        }
        case CALLBACK_REDUX_RECORD: {
          action.callback && typeof action.callback === "function" && action.callback(history);
          break;
        }
        case REPLAY_REDUX_RECORD: {
          history.forEach(dispatch);
          break;
        }
      }
    }
    next(action);
  };
};
