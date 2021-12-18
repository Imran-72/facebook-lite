import { SET_USERS, SET_USER_PROFILE } from "./types";

export function setUser(data) {
  return {
    type: SET_USER_PROFILE,
    payload: data,
  };
}

export function getUsers() {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://social-network.samuraijs.com/api/1.0/users?page=2&count=20"
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
