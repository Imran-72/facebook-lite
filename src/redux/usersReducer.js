import { FOLLOW, SET_USERS, SET_USERS_COUNT, UNFOLLOW } from "./types";

const initialState = {
  users: [],
  pageSize: 5,
  usersCount: 0,
  // isFetching: true,
  // followingIsFetching: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.payload };
    case SET_USERS_COUNT:
      return { ...state, usersCount: action.payload };
    default:
      return state;
  }
};
