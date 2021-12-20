import {
  SET_CURRENT_PAGE,
  SET_USERS,
  SET_USERS_COUNT,
  SET_USER_PROFILE,
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

export const setUsersCount = (usersCount) => ({
  type: SET_USERS_COUNT,
  payload: usersCount,
});

export function getUsers(currentPage, usersCount) {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://social-network.samuraijs.com/api/1.0/users?page=${(currentPage = 1)}&count=${(usersCount = 20)}`
      );
      const data = await response.json();

      if (!response.ok) throw new Error("Ошибка запроса");

      dispatch({
        type: SET_USERS,
        payload: data.items,
      });
    } catch (e) {
      console.log(e);
    }
  };
}
