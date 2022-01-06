import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { appReducer } from "./appReducer";
import { authReducer } from "./authReducer";
import { profileReducer } from "./profileReducer";
import { profileUserReducer } from "./profileUserReducer";
import { usersReducer } from "./usersReducer";

const rootReducer = combineReducers({
  usersR: usersReducer,
  profUserR: profileUserReducer,
  loaderR: appReducer,
  authR: authReducer,
  profR: profileReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
