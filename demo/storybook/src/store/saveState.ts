import { IRootState } from "./rootReducer";

export const saveState = (state: Partial<IRootState>) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};
