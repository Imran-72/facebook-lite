import axios from "axios";
import httpServise from "../app/services/httpServices";
import {
  // FOLLOW,
  HIDE_LOADER,
  SET_MY_PROFILE,
  SET_STATUS,
  // SET_CURRENT_PAGE,
  SET_USERS,
  SET_USERS_COUNT,
  SET_USER_DATA,
  SET_USER_PROFILE,
  SHOW_LOADER,
  // UNFOLLOW,
} from "./types";

const http = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "fc78ffee-d447-4b9a-b481-18f5fb9e7074" },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export function setAuthUserData(userId, email, login, isAuth) {
  return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } };
}

export function setStatus(text) {
  return {
    type: SET_STATUS,
    payload: text,
  };
}

export function getUserStatus(userId) {
  return async (dispatch) => {
    try {
      const { data } = await http.get(`profile/status/${userId}`);
      console.log(data);

      dispatch({
        type: SET_STATUS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateUserStatus(status) {
  return async () => {
    try {
      await http.put(`profile/status/`, { status: status });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getMyProfile(userId) {
  return async (dispatch) => {
    try {
      const { data } = await http.get(`/profile/${userId}`);
      dispatch({
        type: SET_MY_PROFILE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAuthUserData() {
  return async (dispatch) => {
    try {
      const { data } = await http.get(`auth/me`);
      const { id, email, login } = data.data;
      dispatch(getMyProfile(id));
      dispatch(setAuthUserData(id, email, login, true));
    } catch (error) {
      console.log(error);
    }
  };
}

export function login({ email, password, rememberMe = true }) {
  return async (dispatch) => {
    try {
      await http.post(`auth/login`, {
        email,
        password,
        rememberMe,
      });
      dispatch(getAuthUserData());
    } catch (error) {
      console.log(error);
    }
  };
}

export function logout() {
  return async (dispatch) => {
    try {
      await http.delete(`auth/login`);
      dispatch(setAuthUserData(null, null, null, false));
    } catch (error) {
      console.log(error);
    }
  };
}

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

// export const setCurrentPage = (currentPage) => ({
//   type: SET_CURRENT_PAGE,
//   payload: currentPage,
// });

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

// export function follow(userId) {
//   return async (dispatch) => {
//     console.log(userId);
//     try {
//       const { data } = await httpServise.post(`follow/${userId}`, {}, {});
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
// }

// export const unfollow = (id) => ({
//   action: UNFOLLOW,
//   userId: id,
// });

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
