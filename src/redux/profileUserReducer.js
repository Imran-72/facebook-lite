import { SET_USER_PROFILE } from "./types";

const initialState = {
  user: {},
};

export const profileUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return { user: (state.user = action.payload) };
    default:
      return state;
  }
};
