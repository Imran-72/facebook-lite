import axios from "axios";
import {
  FOLLOW,
  HIDE_LOADER,
  SET_MY_PROFILE,
  SET_STATUS,
  SET_USERS,
  SET_USERS_COUNT,
  SET_USER_DATA,
  SET_USER_PROFILE,
  SHOW_LOADER,
  UNFOLLOW,
} from "./types";

const http = axios.create({
  withCredentials: true,
  headers: { "API-KEY": "fc78ffee-d447-4b9a-b481-18f5fb9e7074" },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export function login({ email = "email", password, rememberMe = true }) {
  return async (dispatch) => {
    try {
      await http.post(`auth/login`, {
        email,
        password,
        rememberMe,
      });
      dispatch(getAuthUserData());
      localStorage.setItem(
        "userLogin",
        JSON.stringify({ email, password, rememberMe })
      );
    } catch (error) {
      console.log(error);
    }
  };
}

function getAuthUserData() {
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

function setAuthUserData(userId, email, login, isAuth) {
  return { type: SET_USER_DATA, payload: { userId, email, login, isAuth } };
}

function getMyProfile(userId) {
  return async (dispatch) => {
    try {
      const { data } = await http.get(`/profile/${userId}`);
      console.log(data);
      dispatch({
        type: SET_MY_PROFILE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getUserStatus(userId) {
  return async (dispatch) => {
    try {
      const { data } = await http.get(`profile/status/${userId}`);
      dispatch({
        type: SET_STATUS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function setStatus(text) {
  return {
    type: SET_STATUS,
    payload: text,
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

export function logout() {
  return async (dispatch) => {
    try {
      await http.delete(`auth/login`);
      dispatch(setAuthUserData(null, null, null, false));
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
}

const showLoader = () => ({
  type: SHOW_LOADER,
});

const hideLoader = () => ({
  type: HIDE_LOADER,
});

export function getUsers(currentPage = 1, pageSize = 5) {
  return async (dispatch) => {
    dispatch(showLoader());
    try {
      const { data } = await http.get(
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

function setUsersCount(usersCount) {
  return {
    type: SET_USERS_COUNT,
    payload: usersCount,
  };
}

function setUsers(data) {
  return {
    type: SET_USERS,
    payload: data,
  };
}

export function setUserProfile(userId) {
  return async (dispatch) => {
    try {
      const { data } = await http.get(`/profile/${userId}`);
      localStorage.setItem("user-profile", data.userId);
      dispatch({
        type: SET_USER_PROFILE,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function follow(userId) {
  return async (dispatch) => {
    try {
      const { data } = await http.post(`follow/${userId}`);
      if (data.resultCode === 0) {
        dispatch({
          type: FOLLOW,
          userId,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function unfollow(userId) {
  return async (dispatch) => {
    try {
      const { data } = await http.delete(`follow/${userId}`);
      if (data.resultCode === 0) {
        dispatch({
          type: UNFOLLOW,
          userId,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };
}
