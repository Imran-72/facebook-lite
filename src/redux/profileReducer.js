import { SET_MY_PROFILE, SET_STATUS } from "./types";

const initialState = {
  myProfile: {},
  status: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_PROFILE:
      return { ...state, myProfile: action.payload };
    case SET_STATUS:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
