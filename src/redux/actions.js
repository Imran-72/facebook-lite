import httpServise from "../app/services/httpServices";
import {
  FOLLOW,
  HIDE_LOADER,
  SET_CURRENT_PAGE,
  SET_USERS,
  SET_USERS_COUNT,
  SET_USER_DATA,
  SET_USER_PROFILE,
  SHOW_LOADER,
  UNFOLLOW,
} from "./types";

export function setAuthUserData(userId, email, login, isAuth) {
  return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } };
}

// export function getAuthUserData(){
//   return (dispatch)=>{

//   }
// }

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

export function follow(userId) {
  return async (dispatch) => {
    try {
      const { data } = await httpServise.post(`follow/${userId}`, {}, {});
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
}

export const unfollow = (id) => ({
  action: UNFOLLOW,
  userId: id,
});

export function getUsers(currentPage = 1, pageSize = 5) {
  return async (dispatch) => {
    dispatch(showLoader());
    try {
      const { data } = await httpServise.get(
        `users?page=${currentPage}&count=${pageSize}`
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
