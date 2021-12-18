import { combineReducers, createStore } from "redux";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
  users: usersReducer,
});

export const store = createStore(rootReducer);
