import { SET_MY_PROFILE } from "./types";

const initialState = {
  myProfile: {},
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MY_PROFILE:
      return { myProfile: (state.myProfile = action.payload) };
    default:
      return state;
  }
};
