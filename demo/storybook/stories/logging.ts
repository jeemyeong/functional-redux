import { Middleware } from "redux";
import { action as storybookAction } from "@storybook/addon-actions";

export const logging: Middleware = () => (next) => (action) => {
  console.log(action);
  storybookAction("action")(JSON.stringify(action));
  next(action);
};
