import { SET_USERS } from "./types";

// export function getUsers(users) {
//   return {
//     type: SET_USERS,
//     payload: users,
//   };
// }

export async function getUsers() {
  return (dispatch) => {
    try {
      const response = await axios(
        "https://social-network.samuraijs.com/api/1.0/users?page=1&count=10"
      );

      if (!response.ok) throw new Error("Ошибка запроса");

      const users = await response.data;
      dispatch({
        type: SET_USERS,
        payload: users,
      });
    } catch (e) {
      console.log(e);
    }
  };
}
