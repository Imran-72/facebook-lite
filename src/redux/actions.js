import axios from "axios";
import {
  HIDE_LOADER,
  SET_CURRENT_PAGE,
  SET_USERS,
  SET_USERS_COUNT,
  SET_USER_PROFILE,
  SHOW_LOADER,
} from "./types";

export function setUsers(data) {
  return {
    type: SET_USERS,
    payload: data,
  };
}

export function setUser(data) {
  return {
    type: SET_USER_PROFILE,
    payload: data,
  };
}

export function setUsersCount(usersCount) {
  return {
    type: SET_USERS_COUNT,
    payload: usersCount,
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

export function getUsers(currentPage = 1, pageSize = 5) {
  console.log("currentPage", currentPage);
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const { data } = await axios.get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`
      );
      dispatch(setUsersCount(data.totalCount));
      dispatch(setUsers(data.items));
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(hideLoader());
    }
  };
}
