import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware } from "redux";
import { albumReducer } from "./albumsFetch/albumReducer";
import { userReducer } from "./userFetch/userReducer";
import { combineReducers } from "redux";
import thunk from "redux-thunk";

const store = createStore(
  combineReducers({
    albums: albumReducer,
    users: userReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
