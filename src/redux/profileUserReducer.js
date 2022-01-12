import { SET_USER_PROFILE, SET_USER_STATUS } from "./types";

const initialState = {
  user: {},
  status: "",
};

export const profileUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_PROFILE:
      return { user: (state.user = action.payload) };
    case SET_USER_STATUS:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
