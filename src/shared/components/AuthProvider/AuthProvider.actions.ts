interface ReducerAction<T extends string> {
  type: T;
}

interface ReducerActionWithPayload<T extends string, P extends {}>
  extends ReducerAction<T> {
  payload: P;
}

export function createReducerAction<T extends string>(
  type: T
): ReducerAction<T>;
export function createReducerAction<T extends string, P extends {}>(
  type: T,
  payload: P
): ReducerActionWithPayload<T, P>;
export function createReducerAction<T extends string, P extends {}>(
  type: T,
  payload?: P
): ReducerAction<T> | ReducerActionWithPayload<T, P> {
  return payload ? { type, payload } : { type };
}

export const Action = {
  HANDLE_MISSING_TOKEN: "HANDLE_MISSING_TOKEN",
  IDENTIFY_USER: "IDENTIFY_USER",
  IDENTIFY_USER_INITIATE: "IDENTIFY_USER_INITIATE",
} as const;

export const initiateIdentifyUserAction = createReducerAction(
  Action.IDENTIFY_USER_INITIATE
);
export const identifyUserAction = (result: any) =>
  createReducerAction(Action.IDENTIFY_USER, result);
export const handleMissingTokenAction = createReducerAction(
  Action.HANDLE_MISSING_TOKEN
);

// TODO: investigate how to automate type inferrence
export type ReducerActions =
  | ReturnType<typeof identifyUserAction>
  | typeof handleMissingTokenAction
  | typeof initiateIdentifyUserAction;
