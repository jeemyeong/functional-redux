import { Middleware } from "redux";
import { loggingMiddleware } from "./saveStateMiddleware";

export const middlewares: Middleware[] = [
  loggingMiddleware
];
