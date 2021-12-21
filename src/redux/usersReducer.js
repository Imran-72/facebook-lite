import { SET_CURRENT_PAGE, SET_USERS, SET_USERS_COUNT } from "./types";

const initialState = {
  users: [],
  pageSize: 5,
  currentPage: 1,
  usersCount: 0,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.payload };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case SET_USERS_COUNT:
      return { ...state, usersCount: action.payload };
    default:
      return state;
  }
};
