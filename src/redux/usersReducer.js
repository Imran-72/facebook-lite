import { SET_USERS } from "./types";

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { users: action.payload };
    default:
      return state;
  }
};
