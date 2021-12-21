import { HIDE_LOADER, SHOW_LOADER } from "./types";

const initialState = {
  loading: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { loading: true };
    case HIDE_LOADER:
      return { loading: false };
    default:
      return state;
  }
};
