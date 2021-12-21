import {
  HIDE_LOADER,
  SET_CURRENT_PAGE,
  SET_USERS,
  SET_USERS_COUNT,
  SET_USER_PROFILE,
  SHOW_LOADER,
} from "./types";

export function setUser(data) {
  return {
    type: SET_USER_PROFILE,
    payload: data,
  };
}

export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  payload: currentPage,
});

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export function getUsers(currentPage, pageSize) {
  return async (dispatch) => {
    try {
      dispatch(showLoader());

      const response = await fetch(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${(pageSize = 5)}`
      );

      if (!response.ok) throw new Error("Ошибка запроса");

      const data = await response.json();

      dispatch({
        type: SET_USERS_COUNT,
        payload: data.totalCount,
      });

      dispatch({
        type: SET_USERS,
        payload: data.items,
      });
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(hideLoader());
    }
  };
}
