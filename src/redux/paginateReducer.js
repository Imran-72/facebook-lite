import { SET_CURRENT_PAGE } from "./types";

const initialState = {
  currentPage: 1,
  pageSize: 5,
};

export const paginateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return { currentPage: (state.currentPage = action.payload) };
  }
};
