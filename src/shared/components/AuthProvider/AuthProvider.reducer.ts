import { useImmerReducer } from "use-immer";
import { Action, ReducerActions } from "./AuthProvider.actions";
import { StringMappingType } from "typescript";

export type UserType = {
  __typename?: "User";
  username: string;
  first_name: string;
  last_name: string;
  email?: string;
  profile: {
    phone: StringMappingType;
  };
};

// TODO: Update when webpack config is updated to handle const enums
const RequestStatus = {
  idle: "idle",
  loading: "loading",
  success: "success",
  failure: "failure",
} as const;

type RequestStatus = typeof RequestStatus[keyof typeof RequestStatus];

export type UserProfile = {
  user: UserType | null;
  requestStatus: RequestStatus;
};

export type AuthProviderState = {
  hasInitializedOnce: boolean;
  user: UserProfile;
};

const initialState: AuthProviderState = {
  hasInitializedOnce: false,
  user: {
    requestStatus: RequestStatus.idle,
    user: null,
  },
};

export const useAuthProviderReducer = () => {
  return useImmerReducer<AuthProviderState, ReducerActions>((draft, action) => {
    switch (action.type) {
      case Action.HANDLE_MISSING_TOKEN: {
        draft.hasInitializedOnce = true;
        draft.user = {
          user: null,
          requestStatus: RequestStatus.idle,
        };
        break;
      }

      case Action.IDENTIFY_USER_INITIATE: {
        draft.user.requestStatus = RequestStatus.loading;
        break;
      }
      case Action.IDENTIFY_USER: {
        const { data, error } = action.payload;
        draft.hasInitializedOnce = true;
        const userDraft = draft.user;
        userDraft.requestStatus = error
          ? RequestStatus.failure
          : RequestStatus.success;

        // Conditional changes
        if (data?.email) {
          userDraft.user = data;
        } else {
          // If data does not exist, clear out user/event user data.
          userDraft.user = null;
        }
        break;
      }
      default:
        break;
    }
  }, initialState);
};
