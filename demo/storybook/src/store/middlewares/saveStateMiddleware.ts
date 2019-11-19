import { Middleware } from "redux";

export const loggingMiddleware: Middleware = (store) => (next) => (action) => {
  // tslint:disable-next-line:no-console
  console.log(action);
  next(action);
};
