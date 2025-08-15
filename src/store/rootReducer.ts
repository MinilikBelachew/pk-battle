import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./slice/auth";
import { profileReducer } from "./slice/profile";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;